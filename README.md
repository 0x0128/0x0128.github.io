# 0x0128.github.io

Portfolio of 0x0128: AI and cybersecurity.

Live at https://0x0128.github.io/

## Structure

| Path | What it is |
|---|---|
| `index.html` | The whole page: hero, about, experience, skill radar, projects and contact |
| `404.html` | Page shown for addresses that do not exist |
| `assets/css/site.css` | All styles. Colours are at the top, for light and dark theme |
| `assets/js/site.js` | Theme toggle, mobile menu, active section in the nav, copy-email button and footer year |
| `assets/img/` | Logo, radar, project headers, favicon and the image shown when the link is shared |
| `assets/cv/` | The CV linked from the Download CV buttons |
| `assets/fonts/` | Archivo and IBM Plex Mono, self-hosted (SIL Open Font License) |
| `.nojekyll` | Tells GitHub Pages to publish the files as they are, without Jekyll |

## Editing

Plain HTML and CSS, no build step. Edit `index.html`, commit, and GitHub Pages publishes it in about a minute.

The skill radar (`assets/img/radar-*.svg`) comes from the profile repository [0x0128/0x0128](https://github.com/0x0128/0x0128): regenerate it there with `python3 scripts/build.py` and copy both files here.
