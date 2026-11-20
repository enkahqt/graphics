#!/usr/bin/env python3
"""Baut die statischen HTML-Seiten aus src/pages/*.html + src/layout.py.

Aufruf:  python3 src/build.py
Jede Seite beginnt mit einem Kopf aus "title:" / "description:" und "---".
"""
import html
import pathlib
import sys

SRC = pathlib.Path(__file__).resolve().parent
ROOT = SRC.parent
sys.path.insert(0, str(SRC))
from layout import page  # noqa: E402

for f in sorted((SRC / "pages").glob("*.html")):
    head, body = f.read_text(encoding="utf-8").split("\n---\n", 1)
    meta = dict(line.split(": ", 1) for line in head.strip().splitlines())
    out = page(f.name, html.escape(meta["title"]), html.escape(meta["description"]), body.strip())
    (ROOT / f.name).write_text(out, encoding="utf-8")
    print("✓", f.name)
