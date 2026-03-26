# File Hub

Company file/document center: policies, contracts, templates, onboarding packets, invoices

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy dist --project-name=shiryu-team-apps-file-hub
```

## Environment

- API: https://api.shiryustudios.com
- Auth: /api/v1/auth/*

## Subdomain

file-hub-app.team.shiryustudios.com
