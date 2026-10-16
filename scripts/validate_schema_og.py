#!/usr/bin/env python3
"""Validate JSON-LD + OG tags across all compostculture.com pages."""
import json
import re
import glob

ok = True
for path in ["index.html"] + sorted(glob.glob("articles/0*.html")):
    html = open(path).read()
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    types = []
    for b in blocks:
        try:
            d = json.loads(b)
            types.append(d.get("@type"))
        except Exception as e:
            print(f"BAD JSON in {path}: {e}")
            ok = False
    og_img = re.search(r'og:image" content="([^"]+)"', html)
    tw = "twitter:card" in html
    print(
        f"{path}: schema={types} og_image={'yes' if og_img else 'NO'} "
        f"twitter_card={'yes' if tw else 'no'}"
    )
print("ALL OK" if ok else "ERRORS FOUND")
