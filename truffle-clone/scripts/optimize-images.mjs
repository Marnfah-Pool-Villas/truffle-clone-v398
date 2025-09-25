#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const projectRoot = path.resolve(process.cwd())
const publicDir = path.join(projectRoot, 'public')
const outDir = path.join(publicDir, 'optimized')

const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.PNG'])

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true })
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(res)
    } else {
      yield res
    }
  }
}

async function optimize() {
  await ensureDir(outDir)
  let count = 0

  for await (const abs of walk(publicDir)) {
    const rel = path.relative(publicDir, abs)
    const ext = path.extname(abs)
    if (!exts.has(ext) || rel.startsWith('optimized' + path.sep)) continue

    const base = rel.slice(0, -ext.length)
    const inBuf = await fs.readFile(abs)

    const outBaseDir = path.dirname(path.join(outDir, rel))
    await ensureDir(outBaseDir)

    // Optimize original format (jpg/png)
    try {
      const pipeline = sharp(inBuf)
      const isJpg = /\.(jpe?g|JPG)$/i.test(abs)
      const isPng = /\.(png|PNG)$/i.test(abs)

      if (isJpg) {
        const jpg = await pipeline
          .jpeg({ quality: 78, progressive: true, mozjpeg: true })
          .toBuffer()
        await fs.writeFile(path.join(outDir, base + '.jpg'), jpg)
      } else if (isPng) {
        // Convert to PNG optimized; consider converting to JPG for photos separately
        const png = await pipeline
          .png({ quality: 80, compressionLevel: 9, palette: true })
          .toBuffer()
        await fs.writeFile(path.join(outDir, base + '.png'), png)
      }

      // WebP
      const webp = await sharp(inBuf).webp({ quality: 75 }).toBuffer()
      await fs.writeFile(path.join(outDir, base + '.webp'), webp)

      // AVIF (slower to encode, but smaller)
      const avif = await sharp(inBuf).avif({ quality: 45 }).toBuffer()
      await fs.writeFile(path.join(outDir, base + '.avif'), avif)

      count++
      if (count % 10 === 0) console.log(`Optimized ${count} images...`)
    } catch (e) {
      console.warn('Failed to optimize', rel, e.message)
    }
  }

  console.log(`Done. Optimized variants written to ${path.relative(projectRoot, outDir)}`)
}

optimize().catch((e) => {
  console.error(e)
  process.exit(1)
})
