# raselshikder-portfolio

Static portfolio site (plain HTML/CSS/JS, no build step, no framework).
v7: dark theme by default, photo backdrops on inner pages, and three new pages
(Leadership, Academic History, Skills).

## Structure
- `index.html` (home, doubles as the about page), `research.html`, `publications.html`,
  `work.html` (labeled "Experience"), `leadership.html`, `academic-history.html`,
  `skills.html`, `projects.html`, `contact.html`
- There is no `about.html` or `cv.html`. The about content lives on `index.html`.
  The academic/PhD CV link is on `publications.html`, the job/industry resume link
  is on `work.html`.
- `assets/css/style.css` — all styling, one file
- `assets/js/site.js` — scroll-reveal animation, one file, no dependencies
- `assets/pdf/` — keep your existing CV/resume PDFs here (this update doesn't touch that folder):
  - `rasel-shikder-academic-cv.pdf`
  - `rasel-shikder-industry-resume.pdf`

## Theme
The site is dark by default now (`data-theme="dark"` on every page's `<html>` tag),
regardless of the visitor's system setting. To go back to following the visitor's
system light/dark preference instead, remove `data-theme="dark"` from the `<html>`
tag on each page.

## Photos
- `assets/img/headshot-large.jpg` — the big photo on the Home hero.
- `assets/img/gallery/` — event photos. Used on the Home page (short teaser),
  the Leadership page (full set with write-ups), and as blurred backdrop images
  behind the hero on Research, Publications, Projects, and Contact.
- `assets/img/logos/` — University of Dhaka, ICMAB, UTEP marks, used on the Home
  page credentials strip and the Academic History timeline.

To swap any of these for a different photo, replace the file at the same path and
keep the same filename, or update the `src=` / `--hero-img` values in the HTML.

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
