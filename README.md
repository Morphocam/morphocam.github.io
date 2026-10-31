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

GitHub Pages serves the `main` branch of `Morphocam/morphocam.github.io` at https://morphocam.github.io, so a merged pull request goes live automatically.

If Pages is not enabled: Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.

## Updating

Changes go in through a pull request against `main`. Without write access to the Morphocam organisation, fork the repository and open the pull request from the fork.

- **New paper:** add an `<article class="pub">` block in the Publications section of `index.html` and an entry in `papers.bib`, then update the paper count in the stats bar.
- **New repository:** add a `.card` in the Software section.
- **Team photo:** a square 320×320 JPEG in `assets/img/people/`, named `firstname-lastname.jpg`.
- **Images:** drop JPEGs into `assets/img/` (keep them under ~500 KB).
