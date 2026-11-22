# TechNova Guide

A responsive, static technology learning platform built with semantic HTML, CSS and vanilla JavaScript. The website source is stored in the `technova-guide/` directory of this repository.

## What is included

- Futuristic responsive homepage with topic discovery and client-side search
- Beginner guides for AI, Linux, DNS, cybersecurity, Python, web development and digital privacy
- Browser-based tool lab: password strength checker, AI prompt builder, unit converter, text utilities, secure password generator, JSON formatter/validator and Base64 text converter
- About, Contact, Privacy Policy and Disclaimer pages
- XML sitemap, robots.txt and page metadata
- No framework, build step, paid plugin or backend required

## Run locally

Open `technova-guide/index.html` in a browser, or start a local server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/technova-guide/`.

## Publishing

The production site is intended to be served from the Cloudflare Workers/Pages project connected to this GitHub repository. The static website files live inside `technova-guide/`. Keep the deployment's configured asset/output directory pointed at that folder. A push to the connected production branch should start the configured deployment automatically; confirm the latest deployment is healthy in the Cloudflare dashboard.

Production URL: https://technova-guide.neupanesisir2.workers.dev/

## Before a wider public launch

- Read every guide and test commands on supported software versions.
- Add original screenshots, reproducible examples and authoritative references.
- Keep privacy, disclaimer and contact information accurate for the services actually enabled.
- Test all navigation and tools on mobile and desktop.
- Confirm the latest Cloudflare production deployment and submit the sitemap in Google Search Console if desired.

## Important limitations

- This is a static site: it does not currently provide accounts, a database, comments or a private contact form.
- The public GitHub issue tracker is visible to everyone; never post personal information, credentials or security-sensitive details there.
- Browser tools process input locally in the page. The password checker is an educational estimate, not a security audit. The password generator uses the browser cryptography API when available.
- Base64 is an encoding format, not encryption.
- External font files may be requested from Google Fonts. Remove the CSS import if you prefer not to load fonts from that provider.
- Search indexing and advertising approval are not guaranteed. Review current provider policies before applying for monetization.
