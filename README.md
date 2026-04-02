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
npm run deploy
```

This uses `F:\ShiryuCore\scripts\deploy-pages.ps1` and requires `CLOUDFLARE_API_TOKEN` in the environment that runs the deploy command.

A Pages dashboard environment variable with the same name is only available inside that Pages project at build/runtime. It does not authenticate local Wrangler deploys by itself.

## Environment

- Deploy auth: `CLOUDFLARE_API_TOKEN` in your local shell or CI environment
- Runtime API: `https://api.shiryustudios.com`
- Auth routes: `/api/v1/auth/*`

## Project

- Pages project: `shiryu-team-apps-file-hub`
- Hostname: `filehub.apps.team.shiryustudios.com`
