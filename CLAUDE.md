# Modular MedTech — Claude-Kontext

Statische, zweisprachige Website (DE/EN) der Modular-MedTech-Bewegung, gebaut mit Eleventy.
Hosting: GitHub Pages → `modularmedtech.org`
Repo: `github.com/markowetz/modularmedtech` (public, branch: main)

Deployment: `git push origin main` → GitHub Action baut und veröffentlicht, live in ~1 Minute.

## Struktur

- Texte: `texts/{de,en}/*.yaml` — beide Sprachen müssen dieselben Schlüssel haben
- Seitentemplates: `src/pages/*.njk`, Layout `src/_includes/base.njk`, Makros `src/_includes/macros.njk`
- `src/_data/site.js`: Sprachen, Kontakt-E-Mail, Basis-URL
- `draft-v1/`: ursprünglicher Entwurf, nur als Referenz

## Typischer Workflow

```bash
cd ~/Dropbox/projects/modMedTech-site
npm start            # Vorschau mit Live-Reload auf http://localhost:8124/
# Texte/Templates bearbeiten — bei Textänderungen immer DE und EN pflegen
npm run build        # prüfen, dass der Build durchläuft
git add -A && git commit -m "Beschreibung" && git push origin main
```
