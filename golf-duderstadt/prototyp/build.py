#!/usr/bin/env python3
"""Erzeugt prototyp/index.html als eine einzige, eigenständige Datei
(Bilder, Schriften und Icons eingebettet) aus prototyp/src.html."""
import base64
import io
import json
import pathlib
import re

from PIL import Image

HERE = pathlib.Path(__file__).resolve().parent
ASSETS = HERE.parent / "assets"


def data_uri(path, max_w=1600, q=74):
    im = Image.open(path)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=q)
    return "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode()


def img(name):
    if name.startswith("hole-"):
        return data_uri(ASSETS / "img/holes" / f"loch-{int(name[5:]):02d}.webp", 400, 82)
    if name == "logo":
        return data_uri(ASSETS / "img/logo.png", 160, 90)
    return data_uri(ASSETS / "img" / f"{name}.webp")


P = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
ICONS = {
    "cart": f'<svg viewBox="0 0 24 24" {P}><path d="M3 6h13l-1.5 7H5z"/><path d="M16 6l2-3h3"/><circle cx="7" cy="18" r="2"/><circle cx="15" cy="18" r="2"/></svg>',
    "trolley": f'<svg viewBox="0 0 24 24" {P}><path d="M8 3l6 13"/><circle cx="15" cy="19" r="2"/><path d="M6 8h7"/></svg>',
    "club": f'<svg viewBox="0 0 24 24" {P}><path d="M14 3l-4 15"/><path d="M10 18c-1 2-4 2-5 1l1-2 4-1z"/></svg>',
    "home": f'<svg viewBox="0 0 24 24" {P}><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    "flag": f'<svg viewBox="0 0 24 24" {P}><path d="M6 21V3l11 4-11 4"/><ellipse cx="9" cy="21" rx="5" ry="1"/></svg>',
    "target": f'<svg viewBox="0 0 24 24" {P}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    "putt": f'<svg viewBox="0 0 24 24" {P}><ellipse cx="12" cy="17" rx="9" ry="3"/><circle cx="12" cy="17" r="1"/><path d="M12 16V4l5 2-5 2"/></svg>',
    "leaf": f'<svg viewBox="0 0 24 24" {P}><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19l8-8"/></svg>',
    "cake": f'<svg viewBox="0 0 24 24" {P}><path d="M4 21h16v-8H4z"/><path d="M4 16c2 1 4 1 6 0s4-1 6 0 3 1 4 0"/><path d="M12 13V9"/><path d="M12 6a1 1 0 0 0 0-3"/></svg>',
    "users": f'<svg viewBox="0 0 24 24" {P}><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 1.5 4 4"/></svg>',
    "phone": f'<svg viewBox="0 0 24 24" {P}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>',
    "mail": f'<svg viewBox="0 0 24 24" {P}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    "pin": f'<svg viewBox="0 0 24 24" {P}><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    "clock": f'<svg viewBox="0 0 24 24" {P}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
}


def fonts():
    css = []
    for fam, f, w in [("Fraunces", "fraunces-latin-400", 400), ("Fraunces", "fraunces-latin-600", 500),
                      ("Inter", "inter-latin-400", 400), ("Inter", "inter-latin-500", 500), ("Inter", "inter-latin-600", 600)]:
        b = base64.b64encode((ASSETS / "fonts" / f"{f}.woff2").read_bytes()).decode()
        css.append(f'@font-face{{font-family:"{fam}";font-weight:{w};font-display:swap;src:url(data:font/woff2;base64,{b}) format("woff2")}}')
    return "\n".join(css)


src = (HERE / "src.html").read_text(encoding="utf-8")
cache = {}
src = re.sub(r"\{\{img:([\w-]+)\}\}", lambda m: cache.setdefault(m[1], img(m[1])), src)
src = re.sub(r"\{\{ico:(\w+)\}\}", lambda m: ICONS[m[1]], src)
src = src.replace("{{holes}}", json.dumps([img(f"hole-{n}") for n in range(1, 19)]))
src = src.replace("{{fonts}}", fonts())
out = HERE / "index.html"
out.write_text(src, encoding="utf-8")
print(f"{out} – {out.stat().st_size / 1e6:.1f} MB")
