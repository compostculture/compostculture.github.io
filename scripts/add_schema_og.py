#!/usr/bin/env python3
"""Add JSON-LD schema + Open Graph/Twitter meta to compostculture.com pages.

Per Gemini SEO audit (Oct 16): Article + BreadcrumbList on all articles,
WebSite on index, og:image per page. No FAQPage/Product aggregateRating:
no visible Q&A content exists yet and self-serving review ratings are not
eligible for rich results under Google policy, so we don't fake them.
"""
import json
import re

BASE = "https://compostculture.com"

ARTICLES = {
    "articles/01-introduction-to-compost-culture.html": {
        "headline": "Introduction to Compost Culture",
        "desc": "A beginner-friendly guide to understanding compost cultures, the microorganisms that drive decomposition, and how to build a thriving compost ecosystem.",
        "date": "2026-10-15",
        "og_image": "/images/og-01-introduction.jpg",
    },
    "articles/02-microbial-succession-in-composting.html": {
        "headline": "Microbial Succession in Composting",
        "desc": "Understanding the succession of microorganisms through composting phases — from mesophilic bacteria to thermophilic actinomycetes and fungal colonizers.",
        "date": "2026-10-15",
        "og_image": "/images/og-02-microbial-succession.jpg",
    },
    "articles/03-compost-thermometer-showdown.html": {
        "headline": "Compost Thermometer Showdown: Six Models Compared",
        "desc": "Six compost thermometers from $15 to $60 compared on the specs that actually matter: hermetic sealing, stem gauge, and calibration. What separates cheap dials from expensive ones, and which one fits your pile size.",
        "date": "2026-10-15",
        "og_image": "/images/og-03-thermometer-showdown.jpg",
    },
    "articles/04-hot-vs-cold-vs-bokashi.html": {
        "headline": "Hot vs Cold vs Bokashi: Which Composting Method Actually Wins?",
        "desc": "Three composting methods compared on the numbers that matter: timeline to finished compost, pathogen kill, nitrogen retention, and effort. Hot piles finish in 3-8 weeks, cold piles take a season or more, bokashi ferments in two weeks but needs a second step.",
        "date": "2026-10-16",
        "og_image": "/images/og-04-hot-vs-cold-vs-bokashi.jpg",
    },
}


def og_block(url, title, desc, image):
    return f"""    <meta property="og:type" content="article">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:image" content="{BASE}{image}">
    <meta name="twitter:card" content="summary_large_image">"""


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


def process_article(path, meta):
    with open(path, encoding="utf-8") as f:
        html = f.read()

    if "og:title" in html:
        print(f"skip (already has og tags): {path}")
        return

    url = BASE + "/" + path
    block = "\n".join([
        og_block(url, meta["headline"], meta["desc"], meta["og_image"]),
        article_jsonld(url, meta["headline"], meta["desc"], meta["date"]),
        breadcrumb_jsonld(url, meta["headline"]),
    ])

    # insert after the <meta name="description" ...> line in head
    m = re.search(r'(<meta name="description"[^>]*>)', html)
    assert m, f"no description meta found in {path}"
    html = html[: m.end()] + "\n" + block + html[m.end():]

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"updated: {path}")


def process_index():
    path = "index.html"
    with open(path, encoding="utf-8") as f:
        html = f.read()

    if "og:title" in html:
        print("skip (already has og tags): index.html")
        return

    title = "Compost Culture — The Science of Composting"
    desc = "Evidence-based composting research. Real temperature logs, decomposition data, and product testing for serious composters."
    block = "\n".join([
        og_block(BASE + "/", title, desc, "/images/og-index.jpg"),
        "<script type=\"application/ld+json\">"
        + json.dumps({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Compost Culture Lab",
            "url": BASE + "/",
            "description": desc,
        })
        + "</script>",
    ])

    m = re.search(r'(<meta name="description"[^>]*>)', html)
    assert m, "no description meta found in index.html"
    html = html[: m.end()] + "\n" + block + html[m.end():]

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("updated: index.html")


for path, meta in ARTICLES.items():
    process_article(path, meta)
process_index()
print("done")
