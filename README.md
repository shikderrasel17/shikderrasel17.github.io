# raselshikder-portfolio

Static portfolio site (plain HTML/CSS, no build step, no framework).

## Structure
- `index.html`, `research.html`, `publications.html`, `work.html`, `projects.html`, `cv.html`, `contact.html`
- `assets/css/style.css` — all styling, one file
- `assets/pdf/` — put your CV and resume PDFs here, named exactly:
  - `rasel-shikder-academic-cv.pdf`
  - `rasel-shikder-industry-resume.pdf`
- `assets/img/` — put a headshot / og-image here if you add one later

## Deploy to GitHub Pages (from the terminal)

```bash
cd portfolio-site
git init
git add -A
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/shikderrasel17/shikderrasel17.github.io.git
git push -u origin main
```

Repo name must be exactly `shikderrasel17.github.io` for the free `username.github.io` URL
with zero extra config. GitHub Pages serves it automatically from `main` — no separate
"enable Pages" step needed for a `<username>.github.io` repo.

Site goes live at: **https://shikderrasel17.github.io/**
(usually within 1-2 minutes of the push; check the repo's Settings → Pages tab for status)

## Making future edits

```bash
cd portfolio-site
# edit files
git add -A
git commit -m "describe the change"
git push
```

Live site updates within about a minute of each push.

## Formspree contact form
Go to formspree.io, sign up free with raselshikderrifat17@gmail.com, create a form,
copy the form ID, and replace `YOUR_FORM_ID` in `contact.html`. Until then, the
mailto link on that page still works.

## Custom domain (optional, later)
1. Buy a domain (e.g. raselshikder.com) from Cloudflare or Namecheap (~$10-15/yr).
2. Add a `CNAME` file at the repo root containing just the domain, e.g.:
   ```
   raselshikder.com
   ```
3. Point the domain's DNS to GitHub Pages (A records to GitHub's IPs, or a CNAME
   record to shikderrasel17.github.io for a subdomain) — GitHub's Pages docs have
   the exact records.
4. Commit and push the CNAME file; GitHub Pages picks it up automatically.
