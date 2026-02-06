# Deployment Guide

## Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
4. Deploy!

## Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Configure build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `out`
4. Deploy!

## Static Export (Current Config)

The site is configured for static export (`output: 'export'` in next.config.js).

To build:
```bash
pnpm install
pnpm build
```

The output will be in the `out` directory, ready to deploy to any static hosting.

## Environment Variables

No environment variables required for basic deployment.

## Custom Domain

Update the sitemap.xml and any hardcoded URLs to match your domain.

## Performance Tips

- Images are unoptimized for static export
- Consider adding a CDN for better global performance
- Enable gzip/brotli compression on your hosting platform
