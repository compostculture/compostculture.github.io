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
      url: "https://link.amazon/B04q9sAkO"
    },
    "scd-2bin-kit": {
      name: "SCD Probiotics All Seasons 2-Bin Kit + 5 lb bran",
      url: "https://link.amazon/B04Vi6IOR"
    },
    "scd-bran-2lb": {
      name: "SCD Probiotics All Seasons 2 lb dry bokashi bran",
      url: "https://link.amazon/B0e4Mzizg"
    },

    /* ---------- biochar (biochar.html) ---------- */
    "charbliss-16qt": {
      name: "Char Bliss Organic Biochar, 16 qt (OMRI Listed)",
      url: "https://link.amazon/B05HoGiHz"
    },
    "foop-biochar-64oz": {
      name: "FOOP Organic Inoculated Biochar, 64 oz bag",
      url: "https://link.amazon/B0gi2slme"
    },
    "foop-biochar-5gal": {
      name: "FOOP Organic Inoculated Biochar, 5-gal pail (15 lb)",
      url: "https://link.amazon/B06xyFAIW"
    },
    "humichar-12lb": {
      name: "The Andersons HumiChar Biochar + Humic Acid, 12 lb",
      url: "https://link.amazon/B0fBIpDIp"
    },
    "humichar-40lb": {
      name: "The Andersons HumiChar Biochar, 40 lb",
      url: "https://link.amazon/B004EPyvG"
    },

    /* ---------- countertop electric composters (kitchen-composters.html) ---------- */
    "reencle-prime-14l": {
      name: "Reencle Prime 14L Countertop Composter",
      url: "https://link.amazon/B01V2VIQ3"
    },
    "lomi-1-bundle": {
      name: "Lomi 1 3L Countertop Composter (45-cycle bundle)",
      url: "https://link.amazon/B0h4cCtBG"
    },
    "growell-4l": {
      name: "Growell 4L Electric Food Waste Composter",
      url: "https://link.amazon/B0i6K6JHI"
    },
    "ouaken-4l": {
      name: "Ouaken 4L Electric Food Waste Composter",
      url: "https://link.amazon/B0fVWcwdy"
    },
    /* ---------- GEME partner store (non-Amazon affiliate, wired 2026-10-26) ----------
       GEME Bio brand-partner program: the tracking code is in the URL path,
       there is NO tag param — set tag: false so the Amazon tag is never added.
       These replace the Amazon listings for both GEME machines. */
    "geme-terra-2": {
      name: "GEME Terra 2 14L Electric Bio-Composter",
      url: "https://gemebio.com/Pia8j4",
      network: "gemebio",
      tag: false
    },
    "geme-pro-19l": {
      name: "GEME Pro 19L Electric Bio-Composter",
      url: "https://gemebio.com/esEn5r",
      network: "gemebio",
      tag: false
    },

    /* ---------- compost tools (compost-tools.html) ---------- */
    "ejwox-aerator": {
      name: "EJWOX Compost Aerator (stainless corkscrew)",
      url: "https://link.amazon/B07t8tESC"
    },
    // Compost tea page: NEW — no exact product pinned yet. site.js falls back
    // to a tagged Amazon search link for this key. Newell to create the
    // dashboard shortlink for a specific aquarium air pump + airstone and
    // replace this empty url. (see affiliate-links.md)
    "aquarium-air-pump": {
      name: "Aquarium air pump with airstone (5-gal bucket)",
      url: "",
      search: "aquarium air pump with air stone"
    },
    "yardbutler-ica36": {
      name: "Yard Butler Compost Aerator ICA-36",
      url: "https://link.amazon/B07DtYabz"
    }
  }
};
