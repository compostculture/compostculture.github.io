# Compost Culture — Action Items
Source: Grok site writeup (2026-11-04) + full code audit of build dir + live site, same day.
Status key: **TODO** = real work · **PARTIAL** = exists, needs finishing · **DONE** = already in place (Grok missed it or it was done later) · **NEWELL** = needs Newell's call or assets · **HOLD** = blocked, awaiting approval.

Working file — never pushed to the repo.

---

## 0. DONE (2026-11-05) — Oct 29 portable-power batch deployed
- `portable-power-showdown.html` (Jackery / BLUETTI / Renogy / UDPOWER), index P·01 card, shop.html portable-power section, 4-partner disclosure sweep on ALL pages (about/privacy/footers), 4 new config keys with real sjv.io partner links, Commons credit (Goal Zero Yeti 1400, Tony Webster CC BY-SA 2.0, in figcaption + credits.json + credits.html), sitemap 26→27.
- Deployed inside commit `e6661d7` (Batch A push). Verified live: page 200, image 200, sitemap 27/27 OK, 4 brand names on about.html, partner anchors `class="amz"` + rel=sponsored.
- **REMAINING (Newell):** resubmit sitemap in GSC (now 27 URLs).

## 1. Navigation & information architecture
1.1 **DONE (2026-11-05, `e6661d7`)** — Nav restructured: Gear ▾ (Worm Bins, Compost Bins, Thermometers, Kitchen Composters, Bokashi, Biochar, Tools, Portable Power, Countertop Showdown), Learn ▾ (Reading Map, 3 articles, 3 guides), Reviews ▾ (4 reviews). Hover + click + outside-click + Escape all verified in browser; mobile hamburger flattens to grouped labels.
1.2 **DONE** — "What we test" codes (W·01, C·01…): each already carries the plain category name + a one-line description beside the code. Optional: drop the codes entirely — Newell's taste call.
1.3 **DONE (2026-11-05, `e6661d7`)** — Footer sitemap grid: 3 columns (Gear / Learn / Site) on all 28 pages; 2-column collapse at ≤640px.

## 2. Homepage & first-time experience
2.1 **DONE (2026-11-05, `e6661d7`)** — Hero CTA row added under the dek ("Compare worm bins →" / "Start with the science →") — browser-verified live.
2.2 **DONE (2026-11-05, `e6661d7`)** — "Start here" trio near the top (beginner science path / apartment + worm-bin path / outdoor bin path), reusing the learn.html reading paths — browser-verified live.
2.3 **N/A** — "Pair hero image with a product photo": locked design direction (split-stage, one dominant image, no card grids). Keep as-is.

## 3. Product pages & conversion
3.1 **DONE** — Price notes: every roundup already carries "Prices move weekly; the listing behind each link shows the current price" in the table note, plus page-level "Updated October 2026".
3.2 **DONE (2026-11-05, `e6661d7`)** — pick-01 "BEST OVERALL" badge on every page with numbered picks (12: all roundups incl. turners/bokashi-kits/thermometers-03/showdowns/portable-power + compost-tea + vermicomposting) — browser-verified on worm bins.
3.3 **DONE (2026-11-05, `0e0b351`)** — "How we pick" sections now on all 10 roundups: biochar ("How we picked these five"), bokashi ("How we compared the setups"), kitchen-composters ("How we picked these machines"), compost-tools ("How we picked the tools"), countertop showdown ("How we compared the six"), portable-power ("How we compared the brands"). Copy fact-checked against each page's actual table columns before deploy.
3.4 **TODO** — CTA button polish: make pick-link buttons more prominent and consistent (one CSS pass; keep the in-link "affiliate link" note). NOT done in Batch A — deferred.
3.5 **TODO (NEW 2026-11-05)** — shop.html only aggregates Worm bins / Bins / Thermometers / Portable power / Live worms — missing Kitchen Composters (6 machines), Bokashi, and Biochar sections, though the target tree says shop = every pick grouped by category. ~16 pick rows; fold into Batch C.

## 4. Content gaps
4.1 **PARTIAL** — Article numbering skip: homepage science list shows A·01, A·02, A·04 (03 is the thermometer money page, filed under gear). Add a one-line label or list 03 with a gear framing so the skip reads as intentional.
4.2 **NEWELL** — Real product photos. Site uses Commons photography; product-specific shots need Newell's own photos (he has the video kit) or manufacturer CDN renders (the GEME Pro pattern already in use). Amazon listing images are not usable (copyright).
4.3 **TODO** — Troubleshooting / "common failures" page — new content chunk; links back to relevant gear + method articles.
4.4 **DONE (2026-11-05, `0e0b351`)** — Anti-list surfaced: homepage Tools line already described it; now "the anti-list" is a deep link to `compost-tools.html#h-skip` (verified live).
4.5 **NEWELL** — bokashi keep-both vs consolidate (`bokashi.html` vs `best-bokashi-kits.html`) — still open since 2026-10-28.

## 5. Design & usability
5.1 **DONE** — Contrast: CSS carries verified values — body 8.4:1, muted 5.3:1 on ground (AA+). Grok's "increase contrast" doesn't hold; re-verify in browser if he wants.
5.2 **DONE (2026-11-05, `0e0b351`)** — Breadcrumbs: `.crumbs` on all 23 content pages (shop.html was the last gap — added, verified live).
5.3 **DONE (2026-11-05, `0e0b351`)** — Mobile tables: sticky first column (opaque ground bg + hairline separator, thead z-index 2) + 540px min-width forcing horizontal scroll at ≤640px. NOTE: visual check pending — browser daemon was flaky this session; CSS is scoped/standard, verify on a phone at next session.
5.4 **TODO** — Real mobile audit pass (920/640 breakpoints exist; verify in a real browser viewport, fix spacing/typography findings). Partially covered by 2026-11-05 mobile QA (hamburger + grouped nav verified at 390px).
5.5 **DONE (2026-11-05)** — Alt-text audit: every `<img>` carries alt; the only empty alts are 6 decorative stage doubles explicitly `aria-hidden="true"` (correct usage).

## 6. Trust, SEO & discoverability
6.1 **PARTIAL** — Structured data: reviews carry full Product + Review + Offer + Rating + Brand + FAQPage; roundups carry ItemList + BreadcrumbList (+FAQPage on 4); articles carry Article. Missing: Product/Offer nodes inside roundup ItemList items; WebSite/Organization on home/about.
6.2 **DONE** — Meta descriptions + per-page og:image on every content page (Grok's "same generic look" not supported). Only about/privacy/credits lack og:image — trivial if ever needed.
6.3 **TODO** — "About the data" / methodology page: explain the evaluation bar once, link from every roundup (extends the 3.3 "How we pick" pattern).
6.4 **NEWELL** — Email capture: recommend SKIP — the no-accounts stance is a stated strength. Newell's call.
6.5 **PARTIAL** — Internal linking tightening: every science article ends with the exact gear it points to; every gear page links back to its science article. One sweep.

## 7. Maintenance & scalability
7.1 **DONE** — "Data as of": page-level Updated dates + per-table price notes + reviews cite "verified live [date]" sources.
7.2 **TODO** — Link-health check as a standing deploy step: link resolver + affiliate-anchor audit (already standard practice — make it a written gate), plus a monthly GSC broken-link review (Newell's side).
7.3 **DONE** — Design-drift discipline: locked design system in the `compost-culture-site` skill.

---

## Suggested batch order (several pages per session — not one-page-a-month)
- **Batch A — DONE (2026-11-05, `e6661d7`):** 1.1 nav restructure + 1.3 footer sitemap + 2.1 hero CTA + 2.2 start-here trio + 3.2 pick-01 badge + batch-4 review-chrome fixes (site-head → canonical nav, dead slip classes → real `.slip`, skip links restored). All verified live (27/27 URLs, markers grepped, browser QA desktop + 390px mobile).
- **Batch B — DONE (2026-11-05, `0e0b351`):** 3.3 "How we pick" ×6 + 4.4 anti-list surfacing + 5.2 shop crumbs + 5.3 mobile sticky column + 5.5 alt audit (verified clean) + **new find: 17 bare unstyled tables on money/article pages fixed with the existing `.data-table` class.** Verified live: 27/27 URLs, all 6 sections grep-live, CSS rule live.
- **Batch C (next):** 3.4 CTA button polish + 3.5 shop category sections (kitchen/bokashi/biochar) + 4.3 troubleshooting page + 6.3 methodology page + 4.1 numbering fix + 6.1 structured-data pass + 6.5 link sweep.
- **Batch D (needs Newell):** 4.2 product photos — as soon as he sends shots.
