# Praise Olivia Mazana — Portfolio

Runs anywhere with Node.js 20+ or Bun. All functions (contact form, backend calls) rely on the included `.env` values which point at the hosted backend, so they keep working outside Lovable.

## Quick start (Bun — recommended)

```bash
bun install
bun run dev
```

Open http://localhost:8080

## Using npm instead

```bash
npm install
npm run dev
```

## Build for production

```bash
bun run build
bun run preview
```

The `.env` file is included with the publishable backend keys required for the contact form and any Cloud-backed features. Do not commit secrets beyond what is already there.
