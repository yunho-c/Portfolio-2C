---
title: 'Example Post: Hello World'
image: '/hello-world/urara.webp'
alt: 'Urara'
created: 2002-06-09
---

Welcome to Urara! this article contains some basic operations to help you quickly get started.

## Developing

Start a development server:

```bash
# http://127.0.0.1:5173
pnpm dev
```

or listen to different IP and port:

```bash
# http://127.0.0.1:3000
pnpm dev --port 3000

# http://0.0.0.0:3000
nr dev --host 0.0.0.0 --port 3000
```

## Building

Create a production version of ur blog:

```bash
pnpm build
```

u can preview the built app with `pnpm preview`.

## Documentation

For full documentation, visit [urara-docs.netlify.app](https://urara-docs.netlify.app).
