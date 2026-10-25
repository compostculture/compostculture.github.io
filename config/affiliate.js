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
      url: "https://link.amazon/B02lvq2fP"
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
      url: "https://link.amazon/B029tghMq"
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

    /* ---------- live worms (Hungry Worms partner store) ---------- */
    /* Non-Amazon affiliate — Hungry Worms (live worm farm, Franklin ID).
       Tracking is in the URL path itself; no tag param, no search fallback.
       "12lb" = the store's 1/2 lb pack listing. Nightcrawler partner URLs
       are live (xmgjgj = African, g1nwsl = European), wired 2026-10-24. */
    "redwigglers-12lb": {
      name: "Red Wigglers, 1/2 lb (live) — Hungry Worms",
      url: "https://hungryworms.com/bkpbaj",
      network: "hungryworms",
      tag: false
    },
    "african-nightcrawlers": {
      name: "African Nightcrawlers (live) — Hungry Worms",
      url: "https://hungryworms.com/xmgjgj",
      network: "hungryworms",
      tag: false
    },
    "european-nightcrawlers": {
      name: "European Nightcrawlers (live) — Hungry Worms",
      url: "https://hungryworms.com/g1nwsl",
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
    },

    /* ---------- bokashi (bokashi.html) ---------- */
    "scd-single-kit": {
      name: "SCD Probiotics All Seasons Single Starter Kit (5-gallon bin)",
      url: "https://www.amazon.com/dp/B003ANMBKQ"
    },
    "scd-2bin-kit": {
      name: "SCD Probiotics All Seasons 2-Bin Kit + 5 lb bran",
      url: "https://www.amazon.com/dp/B096T53RZH"
    },
    "scd-bran-2lb": {
      name: "SCD Probiotics All Seasons 2 lb dry bokashi bran",
      url: "https://www.amazon.com/dp/B000UPQGAI"
    },

    /* ---------- biochar (biochar.html) ---------- */
    "charbliss-16qt": {
      name: "Char Bliss Organic Biochar, 16 qt (OMRI Listed)",
      url: "https://www.amazon.com/dp/B0CMR3N15B"
    },
    "foop-biochar-64oz": {
      name: "FOOP Organic Inoculated Biochar, 64 oz bag",
      url: "https://www.amazon.com/dp/B0CZ7N3DPX"
    },
    "foop-biochar-5gal": {
      name: "FOOP Organic Inoculated Biochar, 5-gal pail (15 lb)",
      url: "https://www.amazon.com/dp/B0CZ7MF243"
    },
    "humichar-12lb": {
      name: "The Andersons HumiChar Biochar + Humic Acid, 12 lb",
      url: "https://www.amazon.com/dp/B08ZBGQNJ7"
    },
    "humichar-40lb": {
      name: "The Andersons HumiChar Biochar, 40 lb",
      url: "https://www.amazon.com/dp/B0843NQR9J"
    },

    /* ---------- countertop electric composters (kitchen-composters.html) ---------- */
    "reencle-prime-14l": {
      name: "Reencle Prime 14L Countertop Composter",
      url: "https://www.amazon.com/dp/B0CVNN4FC3"
    },
    "lomi-1-bundle": {
      name: "Lomi 1 3L Countertop Composter (45-cycle bundle)",
      url: "https://www.amazon.com/dp/B0B3FSQTRS"
    },
    "growell-4l": {
      name: "Growell 4L Electric Food Waste Composter",
      url: "https://www.amazon.com/dp/B0DRJGFC26"
    },
    "ouaken-4l": {
      name: "Ouaken 4L Electric Food Waste Composter",
      url: "https://www.amazon.com/dp/B0DJVJRP13"
    },
    "geme-pro-19l": {
      name: "GEME Pro 19L Countertop Composter",
      url: "https://www.amazon.com/dp/B0BV31KTCN"
    },

    /* ---------- compost tools (compost-tools.html) ---------- */
    "ejwox-aerator": {
      name: "EJWOX Compost Aerator (stainless corkscrew)",
      url: "https://www.amazon.com/dp/B0C48RHQHN"
    },
    "yardbutler-ica36": {
      name: "Yard Butler Compost Aerator ICA-36",
      url: "https://www.amazon.com/dp/B00EOMCJHC"
    }
  }
};
