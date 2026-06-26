# Molecular H2 Water

React and Tailwind CSS starter for the Molecular H2 Water website.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Production API

The production website at `molecularh2water.com` automatically uses
`https://admin.molecularh2water.com` for media API requests. Set
`VITE_MEDIA_API_BASE_URL` before building only if the backend host changes.

```bash
VITE_MEDIA_API_BASE_URL=https://admin.molecularh2water.com npm run build
```

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons
