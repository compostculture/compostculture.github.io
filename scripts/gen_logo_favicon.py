#!/usr/bin/env python3
"""Generate assets/logo.png (hero) + favicon.ico for compostculture.com.

Brand mark: a sprout/leaf on a forest-green circle, matching theme.css
palette (forest #2d5a27, lime #728a27, off-white #f8f7f2).
"""
import math
import os

from PIL import Image, ImageDraw

FOREST = (45, 90, 39)
LIME = (114, 138, 39)
OFFWHITE = (248, 247, 242)


def draw_sprout(size):
    """Draw the mark at `size` px on a transparent canvas."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # background circle
    pad = int(size * 0.02)
    d.ellipse([pad, pad, size - pad, size - pad], fill=FOREST + (255,))

    cx = size / 2
    stem_top = size * 0.38
    stem_bot = size * 0.74
    stem_w = max(2, int(size * 0.035))

    # stem
    d.rounded_rectangle(
        [cx - stem_w / 2, stem_top, cx + stem_w / 2, stem_bot],
        radius=stem_w // 2, fill=LIME + (255,),
    )

    def leaf(x0, y0, x1, y1, fill):
        # two quadratic-ish arcs approximated with pieslice + polygon
        d.pieslice([x0, y0, x1, y1], start=90, end=270, fill=fill)

    lw = size * 0.30
    lh = size * 0.42
    # left leaf: ellipse rotated via polygon of points on an ellipse
    def rot_ellipse(cx_, cy_, a, b, angle_deg):
        pts = []
        for i in range(60):
            t = math.radians(i / 59 * 360)
            x = a * math.cos(t)
            y = b * math.sin(t)
            ang = math.radians(angle_deg)
            xr = x * math.cos(ang) - y * math.sin(ang)
            yr = x * math.sin(ang) + y * math.cos(ang)
            pts.append((cx_ + xr, cy_ + yr))
        return pts

    d.polygon(rot_ellipse(cx - lw * 0.42, stem_top + lh * 0.18, lw / 2, lh / 2, -35), fill=LIME + (255,))
    d.polygon(rot_ellipse(cx + lw * 0.42, stem_top + lh * 0.18, lw / 2, lh / 2, 35), fill=OFFWHITE + (255,))

    return img


os.makedirs("assets", exist_ok=True)
logo = draw_sprout(512)
logo.save("assets/logo.png")
print(f"wrote assets/logo.png ({os.path.getsize('assets/logo.png')} bytes)")

# favicon: multi-size .ico (16, 32, 48) — save from the big image with an
# explicit size list so PIL downsamples each entry itself.
big = draw_sprout(512).convert("RGBA")
big.save("favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"wrote favicon.ico ({os.path.getsize('favicon.ico')} bytes)")

# sanity check: logo must contain forest bg + lime leaf pixels
px = draw_sprout(512).convert("RGB")
colors = px.getcolors(maxcolors=100000)
have_forest = any(abs(r - 45) < 8 and abs(g - 90) < 8 and abs(b - 39) < 8 for cnt, (r, g, b) in colors)
have_lime = any(abs(r - 114) < 12 and abs(g - 138) < 12 and abs(b - 39) < 12 for cnt, (r, g, b) in colors)
print(f"logo sanity: forest_bg={have_forest} lime_leaf={have_lime}")
