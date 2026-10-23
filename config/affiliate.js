/* ============================================================
   compostculture.com — affiliate config
   Amazon Associates tag: worldcomposti-20
   ------------------------------------------------------------
   HOW LINKS WORK
   Every product gets a KEY. Pages use:
       <a class="amz" data-amz="reotemp-20">View Reotemp 20-inch</a>
   js/site.js resolves the key → builds the full Amazon URL with
   the tag → sets rel="sponsored noopener" target="_blank".
   If a key has no URL, the link is disabled and flagged in the
   console — never a dead link, never a search-page bait.

   HOW TO ADD / UPDATE A LINK
   1. Open affiliate-links.md (site root) — the human checklist.
   2. Paste the exact affiliate URL in the Tagged URL column:
      - dashboard short links (amzn.to / link.amazon) — tag is embedded,
        used as-is, or
      - a plain product URL (amazon.com/dp/ASIN) — ?tag=worldcomposti-20
        is appended at render time.
   3. The matching url: line below gets the same value (or ask the agent).
   Non-Amazon partners (e.g. Hungry Worms) carry tag: false — the URL is
   used exactly as written, never tagged.
   ============================================================ */
window.CC_AFFILIATE = {
  tag: "worldcomposti-20",

  products: {
    /* ---------- compost thermometers (article 03) ---------- */
    "reotemp-20": {
      name: "REOTEMP 20-inch Backyard Compost Thermometer",
      url: "https://amzn.to/4i0tVFb"
    },
    "reotemp-16": {
      name: "REOTEMP 16-inch Backyard Compost Thermometer",
      url: "https://amzn.to/4yRdimz"
    },
    "reotemp-36-pro": {
      name: "REOTEMP 36-inch Backyard Pro Compost Thermometer",
      url: "https://amzn.to/3U2xOBz"
    },
    "greenco-ygp20": {
      name: "Greenco YGP-20 Dual-Scale Compost Thermometer",
      url: "https://amzn.to/4s8wr0L"
    },
    "vivosun-thermo": {
      name: "VIVOSUN 20-inch Compost Thermometer",
      url: "https://amzn.to/3VRHK1p"
    },

    /* ---------- worm bins (best-worm-bins) ---------- */
    "vermihut-plus": {
      name: "The Original VermiHut Plus 5-Tray Worm Composter",
      url: "https://link.amazon/B0fgniome"
    },
    "urban-worm-bag": {
      name: "Urban Worm Bag v2 10-Gallon",
      url: "https://link.amazon/B0cxqzFf1"
    },
    "worm-nerd-wn55": {
      name: "Worm Nerd WN55 4-Tray Worm Bin",
      url: "https://link.amazon/B087k5vjq"
    },
    "worm-factory-360": {
      name: "Worm Factory 360 2-Tray",
      url: "https://www.amazon.com/dp/B002LH47PY"
    },
    "worm-bucket": {
      name: "Worm Bucket",
      url: "https://link.amazon/B02ehISaK"
    },

    /* ---------- compost bins & tumblers (best-compost-bins) ---------- */
    "fcmp-im4000": {
      name: "FCMP IM4000 IMAGINE Double Compost Tumbler",
      url: "https://link.amazon/B0gQ03cMA"
    },
    "vivosun-43gal": {
      name: "VIVOSUN 43-Gallon Compost Tumbler",
      url: "https://link.amazon/B056D5U9j"
    },
    "mg-55gal": {
      name: "Miracle-Gro 55.4-Gallon Compost Bin",
      url: "https://www.amazon.com/dp/B077XM69VN"
    },
    "redmon-65gal": {
      name: "Redmon 65-Gallon Compost Tumbler",
      url: "https://link.amazon/B0dcn8R4d"
    },
    "f2c-80gal": {
      name: "F2C 80-Gallon Aeration Compost Box",
      url: "https://link.amazon/B0bGeDQAE"
    },
    "geobin": {
      name: "Geobin Stacked Compost Bins",
      url: "https://link.amazon/B0d1hxpE2"
    },
    "mg-2x185": {
      name: "Miracle-Gro 2×18.5-Gallon Stacked Bin",
      url: "https://link.amazon/B0bqMumWe"
    },

    /* ---------- live worms ---------- */
    "unclejims-250": {
      name: "Uncle Jim's 250-Count Composting Red Wigglers",
      url: "https://www.amazon.com/dp/B00EZPSSGY"
    },
    /* Non-Amazon affiliate — Hungry Worms (live worm farm, Franklin ID).
       Tracking is in the URL path itself; no tag param, no search fallback. */
    "redwigglers-18lb": {
      name: "Red Wigglers (live) — Hungry Worms",
      url: "https://hungryworms.com/bkpbaj",
      network: "hungryworms",
      tag: false
    },

    /* ---------- hot vs cold vs bokashi (article 04) ---------- */
    "bokashi-starter": {
      name: "Bokashi Composting Starter Kit (bucket + bran)",
      url: "https://amzn.to/4hOOK7Q"
    },
    "jupiterforce-80gal": {
      name: "JupiterForce 80-Gallon Garden Compost Bin",
      url: "https://link.amazon/B09ekhSWl"
    }
  }
};
