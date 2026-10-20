# Modular MedTech – Website (DE / EN)

Statische, zweisprachige Website, erzeugt mit [Eleventy](https://www.11ty.dev/).
Jede Seite gibt es **einmal als Template** und **einmal pro Sprache als Textdatei**.

## Struktur

```
texts/de/*.yaml      Deutsche Texte, eine Datei pro Seite (+ common.yaml für Navigation/Fußzeile)
texts/en/*.yaml      Englische Texte, gleiche Schlüssel wie die deutschen
src/pages/*.njk      Seitentemplates (Aufbau/HTML), werden pro Sprache gerendert
src/_includes/       Grundlayout (Kopf, Navigation, Fußzeile) und Makros
src/_data/site.js    Sprachen, Pfade, Kontakt-E-Mail
src/assets/          styles.css, script.js (werden unverändert kopiert)
_site/               Generierte Website (nicht bearbeiten, wird bei jedem Build neu erzeugt)
draft-v1/            Ursprünglicher Entwurf als Referenz
```

Englische Seiten (Standardsprache) landen im Wurzelverzeichnis, deutsche unter `/de/`.

## Texte bearbeiten

Nur die passende YAML-Datei in `texts/de/` bzw. `texts/en/` ändern. Die Texte dürfen einfaches
HTML enthalten, z. B. `<br>` für einen Zeilenumbruch oder `<em>…</em>` für Hervorhebungen.
Enthält ein Text einen Doppelpunkt mit Leerzeichen (`: `) oder beginnt er mit einem Sonderzeichen,
muss er in Anführungszeichen stehen.

## Befehle

```bash
npm install      # einmalig
npm start        # Entwicklungsserver mit Live-Reload: http://localhost:8124/
npm run build    # erzeugt _site/
npm run check    # vergleicht _site/ mit draft-v1/ (nur sinnvoll, solange die Inhalte gleich sind)
```

## Veröffentlichen (Hosting)

Die Website läuft über **GitHub Pages** unter **https://modularmedtech.org**, nach demselben Prinzip wie the-gesamtschau.de.

- Repository: `github.com/markowetz/modularmedtech` (öffentlich, Branch `main`)
- Deployment: `git push origin main`. Der Workflow `.github/workflows/deploy.yml` baut die Seite
  mit Eleventy und veröffentlicht `_site/`. Nach ca. 1 Minute ist die Änderung live.
- Domain: `src/assets/CNAME` (`modularmedtech.org`), Basis-URL für Canonical-Links in `src/_data/site.js`

### DNS-Einträge beim Domain-Anbieter

| Typ   | Host  | Ziel                   |
|-------|-------|------------------------|
| A     | `@`   | `185.199.108.153`      |
| A     | `@`   | `185.199.109.153`      |
| A     | `@`   | `185.199.110.153`      |
| A     | `@`   | `185.199.111.153`      |
| CNAME | `www` | `markowetz.github.io`  |

Status prüfen: Repository → Settings → Pages, oder `dig modularmedtech.org A`.

Bei IONOS muss dafür zuerst der Service „Default Site“ weg: den vorhandenen A-Eintrag `@` per Stift auf
`185.199.108.153` ändern, dann deaktiviert IONOS die Platzhalter-Einträge (A, AAAA, `_dep_ws_mutex`) automatisch.
HTTPS ist erzwungen. Falls GitHub kein Zertifikat ausstellt (z. B. weil die Domain beim ersten Prüfen noch nicht
auflöste): unter Settings → Pages die Custom Domain entfernen und neu eintragen.

## Festlegungen

- Impressum und Datenschutz laufen über The Gesamtschau Institute UG (haftungsbeschränkt), Bonn.
- Kein Tracking, keine Cookies, keine externen Inhalte. Die Datenschutzerklärung beschreibt nur Hosting
  (GitHub Pages) und Kontakt per E-Mail. Werden später externe Dienste eingebunden, muss sie ergänzt werden.
- Kontaktadresse: info@modularmedtech.org (`src/_data/site.js`).
- 1,000 Villages wird als Ziel beschrieben, ohne Aussagen zu Kosten oder Finanzierung
  (Umsetzung frühestens in rund einem Jahr, Stand Oktober 2026).
