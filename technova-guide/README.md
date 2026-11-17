# TechNova Guide — free static blog starter

A responsive, static English technology blog starter built with HTML, CSS and vanilla JavaScript. It is designed for free static hosting (Cloudflare Pages is the recommended option).

## Included
- Responsive homepage and navigation
- Topic cards and four starter educational articles
- About, Contact, Privacy Policy and Disclaimer pages
- `robots.txt` and XML sitemap
- Basic page titles and meta descriptions
- No framework, paid plugin, backend or build step

## Before publishing
1. Choose/confirm your publication name. `TechNova Guide` is a working name; check for naming conflicts before using it commercially.
2. Replace every `YOUR-SITE.pages.dev` in canonical URLs, `robots.txt` and `sitemap.xml` with the actual deployed URL.
3. Replace `YOUR-EMAIL@example.com` with a real contact email in Contact, About, Privacy and Disclaimer pages.
4. Review every article, add your own tested screenshots/examples, cite authoritative references, correct anything that does not match your experience, and remove editorial notes before launch.
5. Rewrite the privacy policy to match the services you actually use, especially if you add analytics, advertising, cookies, forms or newsletter providers. This template is not legal advice.
6. Test all links and pages on mobile and desktop.

## Preview locally
Open `index.html` in a browser. For a local web server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Cloudflare Pages (free static hosting)
1. Create a GitHub account and a new repository, e.g. `technova-guide`.
2. Upload the contents of this folder to the repository root (not the outer ZIP folder).
3. Create/sign in to a Cloudflare account and open Workers & Pages.
4. Create a Pages project and connect the GitHub repository.
5. For this plain static site, leave the build command blank and set the output directory to `/` (repository root). If the dashboard requires a framework preset, choose None.
6. Deploy. Cloudflare will provide a `*.pages.dev` address.
7. Replace the placeholder site URL in canonical tags, `robots.txt` and `sitemap.xml`, commit and redeploy.

## Search indexing
1. Create a Google Search Console property for the deployed site.
2. Verify ownership using one of the offered methods.
3. Submit `https://YOUR-SITE.pages.dev/sitemap.xml` after replacing the placeholder.
4. Use URL Inspection to request indexing for important pages. Indexing and ranking are not guaranteed.

## AdSense readiness
This is a starter, not an AdSense approval guarantee. Do not add ad code yet. First make the site genuinely useful: improve the starter articles with original hands-on research, screenshots, references and specific examples; publish additional substantial articles; ensure every page is complete; add a real contact route; and make the privacy notice accurate for your actual data practices. Apply only when the live site is ready and complies with current AdSense policies. Google reviews the site and approval is not guaranteed.

## Notes
- Static hosting does not provide a database, user accounts, comments or a working contact-form backend. The contact page currently uses an email link.
- The site loads Google Fonts from an external provider; if you want no third-party font request, remove the `@import` line in `assets/style.css`.
- No ads are active in this starter. AdSense code should only be added after account/site review instructions and applicable consent/privacy requirements are understood.
