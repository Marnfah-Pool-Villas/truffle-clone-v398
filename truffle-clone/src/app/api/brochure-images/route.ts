import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'

const BROCHURE_DIR = path.join(process.cwd(), 'public', 'brochure')

const formatAlt = (fileName: string): string => {
  const nameWithoutExtension = fileName.replace(/\.[^.]+$/u, '')
  return nameWithoutExtension
    .replace(/[-_]+/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .replace(/\b\w/gu, match => match.toUpperCase())
}

export async function GET() {
  try {
    if (!fs.existsSync(BROCHURE_DIR)) {
      return NextResponse.json({ images: [] })
    }

    const entries = fs.readdirSync(BROCHURE_DIR, { withFileTypes: true })
    const images = entries
      .filter(entry => entry.isFile())
      .map(entry => entry.name)
      .filter(name => name.toLowerCase().endsWith('.webp'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map(name => ({
        src: `/brochure/${name}`,
        alt: formatAlt(name)
      }))

    return NextResponse.json({ images })
  } catch (error) {
    console.error('Failed to load brochure images', error)
    return NextResponse.json({ images: [], error: 'Failed to load brochure images.' }, { status: 500 })
  }
}
