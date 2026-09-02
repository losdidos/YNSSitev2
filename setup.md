# Project Setup Reference

This document covers the full technical stack, structure, and security architecture used in this project — to replicate it for a new site.

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | ^16.3.4 |
| Language | TypeScript | ^5 |
| Runtime | React | ^19 |
| Validation | Zod | ^4.3.6 |
| Styling | Tailwind CSS | ^4 |
| Email | Nodemailer (Gmail SMTP) | ^9.1.0 |
| Icons | Lucide React | ^0.564.0 |
| Deployment | Vercel | — |

> No database or auth layer — booking requests are emailed directly to the client.

---

## Dependencies

### Production (`dependencies`)

```json
"lucide-react": "^0.564.0",
"next": "^16.3.4",
"nodemailer": "^9.1.0",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"zod": "^4.3.6"
```

### Dev (`devDependencies`)

```json
"@tailwindcss/postcss": "^4",
"@types/node": "^20",
"@types/nodemailer": "^7.0.11",
"@types/react": "^19",
"@types/react-dom": "^19",
"eslint": "^9",
"eslint-config-next": "^16.3.4",
"prettier": "^3",
"prettier-plugin-tailwindcss": "^0.6",
"tailwindcss": "^4",
"typescript": "^5"
```

### Scripts

```json
"dev": "next dev --turbopack",
"dev:webpack": "next dev --webpack",
"build": "next build",
"start": "next start",
"lint": "eslint"
```

---

## Project Structure

```
root/
├── public/
│   └── pictures/
├── src/
│   ├── middleware.ts               ← CSP nonce + rate limiting + CORS
│   ├── app/
│   │   ├── layout.tsx              ← Root layout + metadata
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── api/
│   │   │   └── booking/route.ts   ← POST: validate → send email
│   │   └── booking/
│   │       └── page.tsx           ← Booking form (client component)
│   ├── components/
│   └── lib/
│       ├── email.ts               ← Nodemailer transporter + sendBookingEmail()
│       ├── security/
│       │   └── rate-limit.ts
│       └── validation/
│           ├── booking.ts
│           └── sanitize.ts
├── .env.example
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── prettier.config.mjs
└── vercel.json
```

---

## TypeScript Config (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Path alias: `@/` maps to `./src/` — use `@/lib/...`, `@/components/...` etc.

---

## ESLint Config (`eslint.config.mjs`)

Uses ESLint 9 flat config format:

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: [".next/", "out/", "build/", "next-env.d.ts"] }
];
```

---

## PostCSS Config (`postcss.config.mjs`)

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {}
  }
};
```

---

## Email (`src/lib/email.ts`)

- Nodemailer transporter using Gmail SMTP with App Password
- `secure: true` when port is 465 (SSL), STARTTLS otherwise
- `sendBookingEmail(data)` — builds plain-text + HTML email and sends to `MAIL_TO`
- Set `replyTo` to the customer's email so the client can reply directly

```ts
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});
```

> Gmail requires 2FA enabled + an App Password (not your login password). Free, ~500 emails/day.

---

> No database in this project. If persistence is needed later, add Neon or Supabase PostgreSQL + Prisma.

> No authentication in this project. If an admin panel is needed later, add NextAuth v5 (Auth.js).

---

## Security

### HTTP Security Headers

**`next.config.ts`** — static headers applied to all routes:

| Header | Value |
|---|---|
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Permissions-Policy` | Blocks camera, microphone, geolocation, payment, browsing-topics |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `X-DNS-Prefetch-Control` | `off` |
| `X-Permitted-Cross-Domain-Policies` | `none` |

`poweredByHeader: false` — removes the `X-Powered-By: Next.js` header.

**`src/middleware.ts`** — dynamic CSP with per-request nonce (eliminates `unsafe-inline` for scripts):

```
script-src 'self' 'nonce-{random}' ('unsafe-eval' in dev only)
```

The nonce is forwarded to the layout via the `x-nonce` request header so it can be applied to any inline `<script>` tags.

---

### Rate Limiting (`src/lib/security/rate-limit.ts`)

In-memory store (`Map`) with automatic cleanup when size exceeds 5,000 entries.

> **Vercel caveat**: each serverless invocation may run on a different instance, so the in-memory store resets per instance. For strict multi-instance limiting, replace with [Upstash Redis](https://upstash.com/) (`@upstash/redis` + `@upstash/ratelimit`) — one env var, free tier.

```ts
checkRateLimit({ key, limit, windowMs }): { allowed, retryAfterSeconds, remaining }
getClientIp(headers): string  // reads x-forwarded-for, then x-real-ip
```

Applied in middleware:

| Route | Limit | Window |
|---|---|---|
| `/api/booking` | 20 requests | 15 minutes |

---

### Middleware (`src/middleware.ts`)

```
matcher: all routes except _next/static, _next/image, favicon.ico, and static assets

- /api/booking  → rate limit (20 req / 15 min per IP)
- POST/PUT/PATCH/DELETE → CORS origin check (origin host must match request host, else 403)
- /booking/*    → Cache-Control: private, no-store, max-age=0
- All routes    → Content-Security-Policy header with per-request nonce
```

---

### Validation (`src/lib/validation/`)

**Library**: Zod v4

**`booking.ts` — bookingSchema**:
```
customerName:  min 2, max 100, regex: /^[\p{L}0-9 .'\-]+$/u
customerEmail: valid email, max 254
customerPhone: min 6, max 30, regex: /^[+()\-\s\d]+$/
serviceType:   min 2, max 100
notes:         optional, max 1200
```

**`sanitize.ts` — sanitizeText()**:
- Strips `<>` (XSS)
- Strips control characters (U+0000–U+001F, U+007F)
- Collapses multiple whitespace
- Trims

---

## Environment Variables

| Variable | Required | Used In |
|---|---|---|
| `SMTP_HOST` | Yes | `src/lib/email.ts` |
| `SMTP_PORT` | Yes | `src/lib/email.ts` |
| `SMTP_USER` | Yes | `src/lib/email.ts` |
| `SMTP_PASS` | Yes | `src/lib/email.ts` |
| `MAIL_TO` | Yes | `src/lib/email.ts` |
| `MAIL_FROM` | Yes | `src/lib/email.ts` |
| `NODE_ENV` | Auto | `next.config.ts`, `src/middleware.ts` |

Copy `.env.example` → `.env.local` and fill in your values:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
MAIL_TO=client@example.com
MAIL_FROM="Site Name <your-gmail@gmail.com>"
```

---

## Vercel Config (`vercel.json`)

No cron jobs needed (no DB connection to keep warm). Create an empty `vercel.json` or omit the file.

```json
{}
```

---

## SEO / Metadata Pattern (`src/app/layout.tsx`)

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: { template: "%s | Site Name", default: "Site Name" },
  description: "...",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Site Name",
    images: [{ url: "/pictures/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
```

Language is set per-locale in `<html lang="nl">`.

---

## Seeding the Database

```bash
npm run db:seed       # runs prisma/seed.cjs
npx prisma migrate dev  # apply migrations in development
npx prisma studio       # GUI to inspect data
```

---

## Starting a New Project with This Stack

> Note: `create-next-app` rejects folder names with uppercase letters. Create the app in a lowercase directory, or scaffold files manually (as done here).

```bash
# 1. Install deps
npm install

# 2. Copy env file and fill in SMTP credentials
copy .env.example .env.local

# 3. Start dev server
npm run dev
```
