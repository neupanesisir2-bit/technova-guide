# TechNova Guide

TechNova Guide is a responsive, static technology learning and editorial platform built with semantic HTML, CSS and vanilla JavaScript. Source files live in the `technova-guide/` directory.

## Brand and design system

- Editorial positioning: practical technology knowledge, AI, cybersecurity, Linux, networking, programming, web development and digital privacy.
- Light theme: soft neutral canvas, white surfaces, ink typography and blue accents.
- Dark theme: deep navy canvas, elevated slate surfaces and accessible blue/teal accents.
- Typography: Manrope headings, DM Sans reading text and DM Mono technical labels.
- Shared responsive navigation, footer, topic cards, tool cards and long-form article styles.
- Theme preference is saved locally in the visitor's browser.
- Mobile navigation supports keyboard Escape and outside-click dismissal.

## Pages and content

- Homepage with searchable topic discovery, learning paths, featured reading and tool lab links.
- Beginner guides for AI, cybersecurity, Linux, DNS, Python, web development and digital privacy.
- Browser-based tool lab: password strength checker, AI prompt builder, unit converter, text utilities, secure password generator, JSON formatter/validator and Base64 text converter.
- About, Contact, Privacy Policy and Disclaimer pages.
- XML sitemap, robots.txt, canonical URLs and page metadata.

## Run locally

Open `technova-guide/index.html` in a browser, or start a local server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/technova-guide/`.

## Publishing

The static website files are served from the `technova-guide/` directory by the connected Cloudflare Workers/Pages project. Keep the deployment's configured asset/output directory pointed at that folder. A push to the connected production branch should start a deployment; confirm the latest deployment is healthy in the Cloudflare dashboard.

Production URL: https://technova-guide.neupanesisir2.workers.dev/

## Before a wider public launch

- Read every guide and test commands against supported software versions.
- Add original screenshots, reproducible examples and authoritative references.
- Keep privacy, disclaimer and contact information accurate for the services actually enabled.
- Test all navigation and tools on mobile and desktop.
- Confirm the latest Cloudflare production deployment and submit the sitemap in Google Search Console if desired.
- Connect a newsletter provider only after configuring its endpoint and updating the privacy policy.

## Important limitations

- This is a static site: it does not currently provide accounts, a database, comments or a private contact form.
- The public GitHub issue tracker is visible to everyone; never post personal information, credentials or security-sensitive details.
- Browser tools process input locally in the page. The password checker is an educational estimate, not a security audit. The password generator uses the browser cryptography API when available.
- Base64 is an encoding format, not encryption.
- Google Fonts are loaded externally. Remove the font stylesheet link if you prefer not to request fonts from that provider.
- Search indexing and advertising approval are not guaranteed. Review current provider policies before applying for monetization.
