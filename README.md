# ✦ NovaDev

Joel's space-themed portfolio, built with React + Vite.

## Edit the content
All text — bio, missions (projects), skills and contact links — lives in
`src/data/content.js`. To add a project, copy one of the objects in the
`missions` array and change its fields. Leave a contact value as `''` to hide it.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. One-time setup: in the GitHub repo go to
**Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

Live URL: https://nottnovi.github.io/Portfolio_new/
