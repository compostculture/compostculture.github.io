#!/usr/bin/env python3
"""Add missing og:image + twitter:card + Article/BreadcrumbList JSON-LD to
articles 03/04 (they already had basic og tags from the original template)."""
import json
import re

BASE = "https://compostculture.com"

PAGES = {
    "articles/03-compost-thermometer-showdown.html": {
        "headline": "Compost Thermometer Showdown: $15 vs $60 Probes Compared",
        "desc": "Six compost thermometers from $15 to $60 compared on the specs that actually matter: hermetic sealing, stem gauge, and calibration.",
        "date": "2026-10-15",
        "og_image": "/images/og-03-thermometer-showdown.jpg",
    },
    "articles/04-hot-vs-cold-vs-bokashi.html": {
        "headline": "Hot vs Cold vs Bokashi: Which Composting Method Actually Wins?",
        "desc": "Three composting methods compared on the numbers that matter: timeline to finished compost, pathogen kill, nitrogen retention, and effort.",
        "date": "2026-10-16",
        "og_image": "/images/og-04-hot-vs-cold-vs-bokashi.jpg",
    },
}


def article_jsonld(url, headline, desc, date):
    data = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": desc,
        "datePublished": date,
        "dateModified": date,
        "author": {"@type": "Organization", "name": "Compost Culture Lab"},
        "publisher": {
            "@type": "Organization",
            "name": "Compost Culture Lab",
            "url": BASE + "/",
        },
        "mainEntityOfPage": url,
    }
    return "<script type=\"application/ld+json\">" + json.dumps(data) + "</script>"


def breadcrumb_jsonld(url, title):
    data = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE + "/"},
            {"@type": "ListItem", "position": 2, "name": title},
        ],
    }
    return "<script type=\"application/ld+json\">" + json.dumps(data) + "</script>"


for path, meta in PAGES.items():
    with open(path, encoding="utf-8") as f:
        html = f.read()

    url = BASE + "/" + path
    additions = []

    if 'og:image' not in html:
        additions.append(
            f'<meta property="og:image" content="{BASE}{meta["og_image"]}">\n'
            '    <meta name="twitter:card" content="summary_large_image">'
        )

    if "application/ld+json" not in html:
        additions.append(article_jsonld(url, meta["headline"], meta["desc"], meta["date"]))
        additions.append(breadcrumb_jsonld(url, meta["headline"]))

    if not additions:
        print(f"nothing to add: {path}")
        continue

    # insert after the og:url line (keeps all social tags together)
    m = re.search(r'(<meta property="og:url"[^>]*>)', html)
    assert m, f"no og:url in {path}"
    html = html[: m.end()] + "\n    " + "\n    ".join(additions) + html[m.end():]

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"updated: {path}")

print("done")
