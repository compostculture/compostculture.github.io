/* ============================================================
   compostculture.com — runtime
   1. Affiliate wiring (config/affiliate.js keys → real URLs)
   2. Nav toggle (mobile)
   3. Scroll reveal (respects prefers-reduced-motion)
   4. GA4 (only when a real property ID is configured)
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. affiliate wiring ---------- */
  var aff = window.CC_AFFILIATE || { tag: "", products: {} };

  function buildUrl(p) {
    if (!p.url) return null;
    if (p.tag === false) return p.url;                            /* non-Amazon affiliate — use as-is */
    if (/tag=|amzn\.to\/|link\.amazon\//.test(p.url)) return p.url; /* already tagged, or dashboard short link (tag embedded) */
    var sep = p.url.indexOf("?") === -1 ? "?" : "&";
    return p.url + sep + "tag=" + aff.tag;
  }

  function wireAffiliate() {
    var links = document.querySelectorAll("a.amz");
    Array.prototype.forEach.call(links, function (a) {
      var key = a.getAttribute("data-amz");
      var p = aff.products[key];
      if (!p) {
        console.warn("[cc] unknown affiliate key:", key);
        a.classList.add("amz-dead");
        a.style.pointerEvents = "none";
        a.style.opacity = "0.4";
        return;
      }
      var url = buildUrl(p);
      if (!url) {
        /* no exact URL yet — degrade to a search link and say so */
        if (p.search) {
          url = "https://www.amazon.com/s?k=" + p.search + "&tag=" + aff.tag;
          var note = a.querySelector(".aff-note");
          if (!note) {
            note = document.createElement("span");
            note.className = "aff-note";
            a.appendChild(note);
          }
          note.textContent = "affiliate link (search — exact product pending)";
        } else {
          console.warn("[cc] affiliate key missing url:", key);
          a.classList.add("amz-dead");
          a.style.pointerEvents = "none";
          a.style.opacity = "0.4";
          return;
        }
      }
      a.setAttribute("href", url);
      a.setAttribute("target", "_blank");
      var rel = (a.getAttribute("rel") || "").split(/\s+/);
      if (rel.indexOf("sponsored") === -1) rel.push("sponsored");
      if (rel.indexOf("noopener") === -1) rel.push("noopener");
      a.setAttribute("rel", rel.join(" "));
    });
  }

  /* ---------- 2. nav toggle ---------- */
  function wireNav() {
    var burger = document.querySelector(".nav-burger");
    var links = document.querySelector(".nav-links");
    if (!burger || !links) return;
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---------- 3. scroll reveal ---------- */
  function wireReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ---------- 4. GA4 ---------- */
  function wireAnalytics() {
    var id = (window.CC_SITE && window.CC_SITE.ga4) || "";
    if (!id || id.indexOf("G-") !== 0 || /X{3,}/.test(id)) return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireAffiliate();
    wireNav();
    wireReveal();
    wireAnalytics();
  });
})();
