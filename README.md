# File Hub

Company file/document center: policies, contracts, templates, onboarding packets, invoices

## Setup

```bash
npm install
npm run dev
```

## How to Edit This App

Edit `src/App.tsx` to build your app's UI. The app has access to:

- `settings` - App configuration from `settings.json` (name, appId, version, etc.)
- Shared packages from `@shiryu-team/ui`, `@shiryu-team/api-client`, `@shiryu-team/auth`, `@shiryu-team/shared-types`

Example:
```tsx
import settings from "../settings.json";

function App() {
  return (
    <div>
      <h1>{settings.name}</h1>
      {/* Your app components here */}
    </div>
  );
}
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
