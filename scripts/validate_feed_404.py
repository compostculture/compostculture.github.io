#!/usr/bin/env python3
"""Validate feed.xml is well-formed and 404.html links resolve to real files."""
import os
import re
import xml.etree.ElementTree as ET

tree = ET.parse("feed.xml")
items = tree.getroot().findall(".//item")
print(f"feed.xml: well-formed, {len(items)} items")
for it in items:
    link = (it.findtext("link") or "").strip()
    local = link.replace("https://compostculture.com/", "")
    print(f"  - {local} exists={os.path.exists(local)}")

html404 = open("404.html").read()
links = re.findall(r'href="(/[^"]+)"', html404)
print("\n404.html internal links:")
for l in sorted(set(links)):
    print(f"  - {l} exists={os.path.exists(l.lstrip('/'))}")
