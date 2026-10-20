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

Deutsche Seiten landen im Wurzelverzeichnis, englische unter `/en/`.

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

## Veröffentlichen

`npm run build` ausführen und den Inhalt von `_site/` auf einen beliebigen statischen Webhost laden.

## Vor der Veröffentlichung (aus dem Entwurf übernommen)

1. Impressumsangaben prüfen und ggf. weitere Kontaktwege (z. B. Telefon) ergänzen.
2. Beide Datenschutzhinweise an Hoster, Server-Logs, Auftragsverarbeiter, Speicherdauer und
   Rechtsgrundlagen anpassen. Die vorhandenen Texte sind Entwürfe, keine Rechtsberatung.
3. Verhältnis zwischen Bewegung und Website-Betreiberin klären (The Gesamtschau Institute UG
   (haftungsbeschränkt), Ippendorfer Allee 31, 53127 Bonn) und die Kontaktadresse in `src/_data/site.js` prüfen.
4. Aussagen zu Finanzierung und Umsetzung prüfen: 1,000 Villages ist als Aufruf/Vorschlag formuliert,
   nicht als bereits finanziertes Programm.
5. Nach Wahl der Domain Canonical-URLs und ggf. Suchmaschinen-Metadaten ergänzen.
