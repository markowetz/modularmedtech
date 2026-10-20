# Modular MedTech — Bilingual Website (Deutsch / English)

A complete static, responsive website with **seven pages in two languages**, intentionally without photographs, external web fonts, analytics, or JavaScript frameworks.

## Pages

| German (site root) | English (`/en/`) | Content |
|---|---|---|
| `index.html` | `en/index.html` | Home |
| `manifest.html` | `en/manifest.html` | Manifesto and ten principles |
| `device.html` | `en/device.html` | Modular multimodal tablet diagnostic demonstrator |
| `villages.html` | `en/villages.html` | 1,000 Villages international outreach |
| `mitmachen.html` | `en/mitmachen.html` | Ways to collaborate and contact links |
| `impressum.html` | `en/impressum.html` | German-law legal notice / English translation |
| `datenschutz.html` | `en/datenschutz.html` | Privacy notice / English translation |

Every page includes a visible **DE / EN language link** to its exact counterpart. Both versions use one local `styles.css` and `script.js` file. English page links stay inside `/en/` until the visitor switches language. Both language versions expose their HTML language and alternative-language link metadata.

## Translation text exports

All page bodies are exported as Markdown under `texts/de/` and `texts/en/` for review, editing, or sharing. The pages themselves are the authoritative website versions.

## Preview locally

Run a basic local static web server in this folder:

```bash
python3 -m http.server 8000
```

German: http://localhost:8000/

English: http://localhost:8000/en/

## Deployment

Upload the **entire website folder**, preserving the `en/` directory, to the root of any static web host. No installation or build process is needed. The contact links use visitors' installed email client (`mailto:`); there is no contact form or backend.

## Before publication

1. Confirm all legal notice details and whether additional contact channels (such as a phone number) are required under the applicable rules.
2. Update **both** privacy notices for the final host, server log practices, data processors, storage periods and their respective legal bases. The supplied notices are drafts, not legal advice.
3. Confirm the relationship between the movement and the legal website operator. The organization is listed as supplied: **The Gesamtschau Institute UG (haftungsbeschränkt)**, Ippendorfer Allee 31, 53127 Bonn, Germany.
4. Verify funding and delivery claims before announcing changes. The 1,000-device initiative is presented as a **call/proposal**, not as an already funded distribution programme.
5. After choosing a public domain, configure canonical URLs, hosting and optional search-engine metadata as appropriate.

All assets are local; the site has no external visual dependencies. No photographs are included.
