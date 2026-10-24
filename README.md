# morphocam.github.io

Source for the MorphoCam project website: **https://morphocam.github.io**

MorphoCam is a NERC-funded University of Oxford project (WildCRU and the Department of
Computer Science) building open-source AI tools that estimate animal distance, body size and
3D shape from camera trap images.

## Structure

```
index.html          single-page site (about, approach, software, datasets, publications, team, news)
papers.bib          BibTeX for all project publications
assets/css/style.css
assets/js/main.js   dark-mode toggle, mobile menu
assets/img/         photos (WildCRU / WildDepth team) and screenshots
.nojekyll           tells GitHub Pages to serve the files as-is
```

No build step. Plain HTML, CSS and a few lines of JavaScript.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

The repository `Morphocam/morphocam.github.io` already exists. Push this folder to its
`main` branch and GitHub Pages serves it at https://morphocam.github.io automatically.

```bash
git remote add origin git@github.com:Morphocam/morphocam.github.io.git
git push -u origin main --force   # the remote only holds a placeholder README
```

If Pages is not enabled: Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.

## Updating

- **New paper:** add an `<article class="pub">` block in the Publications section of `index.html`
  and an entry in `papers.bib`.
- **New repository:** add a `.card` in the Software section.
- **Images:** drop JPEGs into `assets/img/` (keep them under ~500 KB).
