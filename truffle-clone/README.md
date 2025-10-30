This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Loading Animation Configuration

The project includes a custom loading animation that displays on first page load.

### Location
- Component: `src/components/LoadingAnimation.tsx`
- Usage: `src/app/page.tsx`

### Configuration

**Timing Settings** (in `LoadingAnimation.tsx`):
- Phase 1: Logo appears and scales up (100ms)
- Phase 2: Glow effect and gentle pulse (1000ms)
- Phase 3: Fade out preparation (2000ms)
- Phase 4: Fade out begins (2500ms)
- Total duration: ~3.3 seconds

**Text Content**:
- Main title: "MARNFAH"
- Subtitle (2 lines):
  - "Luxury Pool Villas"
  - "Wellness & Luxury"
- Font size: `text-xs` (extra small)

### For Debugging

To extend the loading animation duration for testing:

1. In `LoadingAnimation.tsx`, change the timing values:
   ```typescript
   // Extend Phase 3 and 4 timings
   timers.push(setTimeout(() => setAnimationPhase(3), 58000)) // 58 seconds
   timers.push(setTimeout(() => {
     setIsVisible(false)
     setTimeout(() => onLoadingComplete(), 800)
   }, 59000)) // 59 seconds
   ```

2. In `src/app/page.tsx`, comment out the completion handler:
   ```typescript
   const handleLoadingComplete = () => {
     // DEBUG: Keep loading animation visible
     // setIsLoadingComplete(true)
   }
   ```

## Development Workflow

### Real-time Changes
1. Make sure dev server is running: `npm run dev`
2. Edit files in your code editor
3. Save the file (`Cmd + S` or `Ctrl + S`)
4. Wait 1-2 seconds for Next.js to compile
5. Browser should auto-refresh

### When Changes Don't Appear

If your changes don't show up in the browser:

**Step 1: Stop the dev server**
- Press `Ctrl + C` in the terminal

**Step 2: Clear Next.js cache**
```bash
rm -rf .next
rm -rf out
rm -rf node_modules/.cache
```

**Step 3: (Optional) Reinstall dependencies**
```bash
npm install
```

**Step 4: Restart dev server**
```bash
npm run dev
```

**Step 5: Hard refresh browser**
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`
- Or open in incognito/private window

### Quick Browser Cache Clear

Without stopping the server:
1. Open Developer Tools (`F12` or Right-click > Inspect)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
