# stablecoins.org

Next.js site for stablecoins.org.

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Deploy

Deploys the static export to GitHub Pages:

```bash
npm run deploy
```

## Periodic checks

- `npm run check:outdated` — version freshness
- `npm run check:unused` — unused/missing dependency scan (via depcheck)
- `npm run check:audit` — security vulnerabilities in dependencies
- `npm run check:deps` — runs all three