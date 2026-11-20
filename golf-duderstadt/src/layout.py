"""Gemeinsames Layout (Kopf, Navigation, Fuß) für alle Seiten."""

SITE = "Golfclub Rittergut Rothenberger Haus e.V."
BOOKING = "https://rothenberger.albatros9.net/a9online/#/"
PHONE = "+49 5529 8992"
PHONE_HREF = "tel:+4955298992"
MAIL = "manager@golf-duderstadt.de"

NAV = [
    ("golfplatz.html", "Golfplatz"),
    ("gaeste.html", "Gäste &amp; Greenfee"),
    ("golfen-lernen.html", "Golfen lernen"),
    ("mitgliedschaft.html", "Mitgliedschaft"),
    ("club.html", "Club &amp; Turniere"),
    ("restaurant.html", "Restaurant"),
]

ICON_FB = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V14h2.7v8h3.1z"/></svg>'
ICON_IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 8.2c-.1-1.6-.4-3-1.6-4.1S17.6 2.6 16 2.5c-1.6-.1-6.4-.1-8 0-1.6.1-3 .4-4.1 1.6S2.6 6.4 2.5 8c-.1 1.6-.1 6.4 0 8 .1 1.6.4 3 1.6 4.1s2.5 1.5 4.1 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.1-1.6s1.5-2.5 1.6-4.1c.1-1.6.1-6.4 0-7.8zM19.8 18a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4A3 3 0 0 1 5.8 18c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3a3 3 0 0 1 1.7-1.7c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.3z"/></svg>'


def page(slug, title, description, body):
    nav = "\n".join(
        f'<a href="{href}"{" aria-current=\"page\"" if href == slug else ""}>{label}</a>'
        for href, label in NAV
    )
    full_title = SITE if slug == "index.html" else f"{title} – Golfclub Rittergut Rothenberger Haus"
    return f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{full_title}</title>
<meta name="description" content="{description}">
<meta property="og:title" content="{full_title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="assets/img/hero-clubhaus.webp">
<meta name="theme-color" content="#005958">
<link rel="icon" href="assets/img/logo.png">
<link rel="preload" href="assets/fonts/fraunces-latin-600.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/fonts.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<a class="skip" href="#main">Zum Inhalt springen</a>

<div class="topbar">
  <div class="container">
    <div><span class="hide-sm">Rittergut Rothenberger Haus · 37115 Duderstadt</span><span><a href="{PHONE_HREF}">{PHONE}</a></span><span class="hide-sm"><a href="mailto:{MAIL}">{MAIL}</a></span></div>
    <div><a href="index.html#platzstatus">Platzstatus ansehen &rarr;</a></div>
  </div>
</div>

<header class="site-header">
  <div class="container">
    <a class="brand" href="index.html" aria-label="Startseite">
      <img src="assets/img/logo.png" alt="" width="52" height="52">
      <span><strong>Rittergut<br>Rothenberger Haus</strong><small>Golfclub seit 1994</small></span>
    </a>
    <button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
    <nav class="nav" id="nav" aria-label="Hauptnavigation">
      {nav}
      <a class="btn btn-teal" href="{BOOKING}" target="_blank" rel="noopener">Startzeit buchen</a>
    </nav>
  </div>
</header>

<main id="main">
{body}
</main>

<footer class="site-footer">
  <div class="container">
    <div>
      <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="52" height="52"><span><strong>Rittergut<br>Rothenberger Haus</strong><small>Golfclub e.V.</small></span></a>
      <p>Rittergut Rothenberger Haus<br>37115 Duderstadt</p>
      <p class="small">Navi-Adresse: Rothenbergerhaus 1,<br>37412 Herzberg am Harz</p>
      <div class="social">
        <a href="https://www.facebook.com/GCRothenbergerHaus/" target="_blank" rel="noopener" aria-label="Facebook">{ICON_FB}</a>
        <a href="https://www.instagram.com/gcrothenbergerhaus/" target="_blank" rel="noopener" aria-label="Instagram">{ICON_IG}</a>
      </div>
    </div>
    <div>
      <h4>Kontakt</h4>
      <ul>
        <li><a href="{PHONE_HREF}">Tel. {PHONE}</a></li>
        <li>Fax +49 5529 999707</li>
        <li><a href="mailto:{MAIL}">{MAIL}</a></li>
        <li><a href="{BOOKING}" target="_blank" rel="noopener">Startzeit online buchen</a></li>
      </ul>
    </div>
    <div>
      <h4>Öffnungszeiten</h4>
      <ul>
        <li>Montag Ruhetag</li>
        <li>Proshop &amp; Büro:<br>Di – So 10:30 – 18:00 Uhr</li>
        <li>Restaurant:<br>Di – So 12:00 – 18:00 Uhr</li>
        <li class="small">Platz &amp; Range: Sonnenauf- bis -untergang</li>
      </ul>
    </div>
    <div>
      <h4>Entdecken</h4>
      <ul>
        {"".join(f'<li><a href="{h}">{l}</a></li>' for h, l in NAV)}
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <span>&copy; <span data-year>2026</span> {SITE}</span>
      <span><a href="impressum.html">Impressum</a> &nbsp;·&nbsp; <a href="datenschutz.html">Datenschutz</a></span>
    </div>
  </div>
</footer>

<script src="assets/js/data.js"></script>
<script src="assets/js/site.js"></script>
</body>
</html>
"""
