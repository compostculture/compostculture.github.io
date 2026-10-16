#!/usr/bin/env python3
"""Generate 1200x630 Open Graph preview cards for compostculture.com pages.

Uses the site theme palette (theme.css): forest-green #2d5a27, leaf-lime #728a27,
ocean-blue #005a4f, off-white #f8f7f2, sage #d4e0d4.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
FOREST = (45, 90, 39)
LIME = (114, 138, 39)
OCEAN = (0, 90, 79)
OFFWHITE = (248, 247, 242)
SAGE = (212, 224, 212)
BROWN = (75, 54, 33)

FONT_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]
REG_PATHS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
]

import os
def pick(paths):
    for p in paths:
        if os.path.exists(p):
            return p
    return None

BOLD = pick(FONT_PATHS)
REG = pick(REG_PATHS)


def wrap(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make_card(path, kicker, title, subtitle):
    img = Image.new("RGB", (W, H), OFFWHITE)
    d = ImageDraw.Draw(img)

    # top band
    d.rectangle([0, 0, W, 14], fill=FOREST)
    # left accent block
    d.rectangle([0, 14, 26, H - 90], fill=LIME)

    f_kicker = ImageFont.truetype(BOLD, 30) if BOLD else ImageFont.load_default()
    f_title = ImageFont.truetype(BOLD, 78) if BOLD else ImageFont.load_default()
    f_sub = ImageFont.truetype(REG, 34) if REG else ImageFont.load_default()
    f_brand = ImageFont.truetype(BOLD, 26) if BOLD else ImageFont.load_default()

    # kicker (small caps style)
    d.text((80, 90), kicker.upper(), font=f_kicker, fill=OCEAN)

    # title, wrapped to max 2 lines
    lines = wrap(d, title, f_title, W - 160)[:3]
    y = 150
    for ln in lines:
        d.text((80, y), ln, font=f_title, fill=FOREST)
        y += 92

    # subtitle line(s)
    sy = max(y + 10, H - 240)
    for ln in wrap(d, subtitle, f_sub, W - 160)[:2]:
        d.text((80, sy), ln, font=f_sub, fill=BROWN)
        sy += 46

    # footer brand bar
    d.rectangle([0, H - 76, W, H], fill=FOREST)
    d.text((80, H - 52), "COMPOST CULTURE LAB", font=f_brand, fill=(255, 255, 255))
    d.text((W - 340, H - 52), "compostculture.com", font=f_brand, fill=SAGE)

    img.save(path, quality=90)
    print(f"wrote {path} ({os.path.getsize(path)} bytes)")


CARDS = [
    ("images/og-index.jpg", "Evidence-Based Composting Research",
     "Compost Culture Lab",
     "Real temperature logs, decomposition data, and product testing for serious composters."),
    ("images/og-01-introduction.jpg", "Article 01 · Foundations",
     "Introduction to Compost Culture",
     "The microorganisms that drive decomposition, explained from first principles."),
    ("images/og-02-microbial-succession.jpg", "Article 02 · The Science",
     "Microbial Succession in Composting",
     "Mesophilic to thermophilic: what actually happens inside your pile, phase by phase."),
    ("images/og-03-thermometer-showdown.jpg", "Article 03 · Product Testing",
     "Compost Thermometer Showdown",
     "Six compost thermometers from $15 to $60 compared on the specs that matter."),
    ("images/og-04-hot-vs-cold-vs-bokashi.jpg", "Article 04 · Method Comparison",
     "Hot vs Cold vs Bokashi",
     "Three home composting methods compared: timeline, pathogen kill, nitrogen retention."),
]

os.makedirs("images", exist_ok=True)
for args in CARDS:
    make_card(*args)
print("done")
