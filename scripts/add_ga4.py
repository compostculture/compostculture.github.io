#!/usr/bin/env python3
"""Insert the GA4 gtag snippet (G-01P1FVHJ9V) into <head> of all site pages.

Idempotent: skips files that already contain the measurement ID.
Snippet provided by the user from their Google Analytics property.
"""
import glob

MEASUREMENT_ID = "G-01P1FVHJ9V"

SNIPPET = """    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-01P1FVHJ9V"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-01P1FVHJ9V');
    </script>"""

files = ["index.html", "404.html"] + sorted(glob.glob("articles/0*.html"))
for path in files:
    html = open(path).read()
    if MEASUREMENT_ID in html:
        print(f"skip (already has GA): {path}")
        continue
    assert "</head>" in html, f"no </head> in {path}"
    html = html.replace("</head>", SNIPPET + "\n</head>", 1)
    open(path, "w").write(html)
    print(f"added GA to: {path}")

print("done")
