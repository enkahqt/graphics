# golf-duderstadt.de – Relaunch

Neue Website für den **Golfclub Rittergut Rothenberger Haus e.V.**, statisch (HTML/CSS/JS), ohne CMS, ohne Cookies, ohne Drittanbieter (Schriften selbst gehostet).

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Start: Hero, Zahlen, Platzstatus, News, Einstieg, Aktion, Restaurant |
| `golfplatz.html` | Anlage, interaktive Bahnübersicht (18 Loch), Scorekarte, Platzregeln, Proshop |
| `gaeste.html` | Greenfee, Leihausrüstung, Service, Haus am Grün, Anfahrt, FAQ |
| `golfen-lernen.html` | Pros, Schnupperkurs, Starterpaket, Einzeltraining, Gruppen, TrackMan |
| `mitgliedschaft.html` | Aktion 2026, alle Mitgliedschaftsmodelle, Downloads |
| `club.html` | Turniere, Vorstand & Team, Jugend, Clubmeister, Charity |
| `restaurant.html` | Restaurant |
| `impressum.html`, `datenschutz.html` | Rechtliches |

## Pflege

- **Platzstatus & News:** `assets/js/data.js` bearbeiten – kein Build nötig.
- **Seiteninhalte:** in `src/pages/*.html` ändern, danach `python3 src/build.py` ausführen
  (setzt Kopf/Navigation/Fuß aus `src/layout.py` ein und schreibt die Seiten ins Hauptverzeichnis).
- **Lokal ansehen:** `python3 -m http.server` im Ordner, dann http://localhost:8000

## Offene Punkte vor dem Livegang

- Datenschutzerklärung: Hosting-Anbieter und Log-Speicherdauer ergänzen, juristisch prüfen.
- Widersprüche aus der alten Seite klären: Platzreife „ab 299 €“ (Gäste-Seite) vs. „289 €“ (Kurs-Seite); Telefon 05529 8992 vs. 8995; Mens Captain (Michael Falk vs. Wolfgang Schug).
- Fotos: mehr hochauflösende Bilder (mind. 2000 px breit) für die Hero-Bereiche wären ideal.
- Wettspielkalender / Turniertermine: aktuell Verweis auf Albatros.
- Alte URLs (WordPress) per 301 auf die neuen Seiten umleiten.
