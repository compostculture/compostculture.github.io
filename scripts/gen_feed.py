#!/usr/bin/env python3
"""Generate feed.xml (RSS 2.0) for compostculture.com from the article files.

Re-run whenever a new article is added: python3 scripts/gen_feed.py
Reads title, meta description, canonical URL, and og:image from each
articles/0*.html file; publish dates come from git first-commit date.
"""
import glob
import html
import re
import subprocess
from datetime import datetime

BASE = "https://compostculture.com"


def git_first_commit_date(path):
    out = subprocess.run(
        ["git", "log", "--diff-filter=A", "--format=%ad", "--date=short", "--", path],
        capture_output=True, text=True, cwd=".",
    ).stdout.strip().splitlines()
    return out[-1] if out else datetime.utcnow().strftime("%Y-%m-%d")


def rfc822(date_str):
    dt = datetime.strptime(date_str, "%Y-%m-%d").replace(hour=12, minute=0)
    return dt.strftime("%a, %d %b %Y 12:00:00 GMT")


articles = []
for path in sorted(glob.glob("articles/0*.html")):
    src = open(path).read()

    def meta(pattern):
        m = re.search(pattern, src)
        return html.unescape(m.group(1)) if m else ""

    title = meta(r"<title>([^<]+)</title>")
    desc = meta(r'<meta name="description" content="([^"]+)"')
    og_img = meta(r'og:image" content="([^"]+)"')
    date = git_first_commit_date(path)
    url = BASE + "/" + path

    articles.append({
        "title": title,
        "link": url,
        "desc": desc,
        "date": date,
        "rfc": rfc822(date),
        "img": og_img or f"{BASE}/images/og-index.jpg",
    })

# newest first
articles.sort(key=lambda a: a["date"], reverse=True)

items = "\n".join(
    f"""  <item>
    <title>{html.escape(a['title'])}</title>
    <link>{a['link']}</link>
    <guid isPermaLink="true">{a['link']}</guid>
    <description>{html.escape(a['desc'])}</description>
    <pubDate>{a['rfc']}</pubDate>
    <author>Compost Culture Lab</author>
  </item>"""
    for a in articles
)

feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Compost Culture Lab</title>
    <link>{BASE}/</link>
    <description>Evidence-based composting research. Real temperature logs, decomposition data, and product testing for serious composters.</description>
    <language>en-us</language>
    <lastBuildDate>{articles[0]['rfc']}</lastBuildDate>
    <atom:link href="{BASE}/feed.xml" rel="self" type="application/rss+xml"/>
{items}
  </channel>
</rss>
"""

with open("feed.xml", "w") as f:
    f.write(feed)
print(f"wrote feed.xml with {len(articles)} items (newest first)")
