import { jsx as a, jsxs as o, Fragment as _ } from "react/jsx-runtime";
import { i18n as w, pickPublicLocale as N, canonicalUrl as k, pickFormat as g, postSortMillis as S, buildTermUrl as z, toast as A } from "@agent-cms/runtime";
import { useState as x, useEffect as T } from "react";
import { useTranslation as F } from "react-i18next";
const y = `@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap");

/* Atlas Roast. Plain CSS, uploaded verbatim as theme-assets/atlas-roast.css.
   Always light: the cream paper is the identity of the theme, so there is
   deliberately no dark palette. Surfaces and borders derive from the
   background and text colors, so they follow the settings page. */
:root {
  color-scheme: light;
  --atlas-roast-accent: #a9492a;
  --atlas-roast-bg: #faf3e7;
  --atlas-roast-text: #2b1a12;
  --atlas-roast-muted: color-mix(in srgb, var(--atlas-roast-text) 72%, var(--atlas-roast-bg));
  --atlas-roast-border: color-mix(in srgb, var(--atlas-roast-text) 16%, var(--atlas-roast-bg));
  --atlas-roast-surface: color-mix(in srgb, var(--atlas-roast-text) 5%, var(--atlas-roast-bg));
  --atlas-roast-radius: 4px;
  --atlas-roast-max: 1120px;
  --atlas-roast-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --atlas-roast-font: "Source Serif 4", Georgia, "Times New Roman", serif;
}

*, *::before, *::after { box-sizing: border-box; }
.atlas-roast { margin: 0; min-height: 100vh; display: flex; flex-direction: column; background: var(--atlas-roast-bg); color: var(--atlas-roast-text); font: 18px/1.7 var(--atlas-roast-font); -webkit-font-smoothing: antialiased; }
.atlas-roast a { color: var(--atlas-roast-accent); text-underline-offset: .18em; text-decoration-thickness: 1px; }
.atlas-roast a:hover { color: var(--atlas-roast-text); }
.atlas-roast img { max-width: 100%; height: auto; display: block; }
.atlas-roast :focus-visible { outline: 2px solid var(--atlas-roast-accent); outline-offset: 3px; }
.atlas-roast h1, .atlas-roast h2, .atlas-roast h3 { font-family: var(--atlas-roast-display); font-weight: 600; letter-spacing: -.005em; }
.atlas-roast-container { width: min(100% - 2.5rem, var(--atlas-roast-max)); margin-inline: auto; }
.atlas-roast-sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.atlas-roast-muted { color: var(--atlas-roast-muted); font-size: .85rem; }

/* Header: menu, centered name, actions */
.atlas-roast-header { border-bottom: 1px solid var(--atlas-roast-border); }
.atlas-roast-header__inner { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 1rem; min-height: 84px; position: relative; }
.atlas-roast-brand { grid-column: 2; font-family: var(--atlas-roast-display); font-weight: 600; font-size: 1.9rem; line-height: 1.1; text-align: center; color: var(--atlas-roast-text) !important; text-decoration: none; }
.atlas-roast-actions { grid-column: 3; display: flex; justify-content: flex-end; align-items: center; gap: .35rem; }
.atlas-roast-nav { grid-column: 1; grid-row: 1; }
.atlas-roast-nav ul { list-style: none; display: flex; flex-wrap: wrap; gap: .25rem 1.4rem; margin: 0; padding: 0; }
.atlas-roast-nav a { color: var(--atlas-roast-text); text-decoration: none; font-size: .92rem; }
.atlas-roast-nav a:hover, .atlas-roast-nav a[aria-current="page"] { color: var(--atlas-roast-accent); }
.atlas-roast-nav ul ul { display: none; }
.atlas-roast-icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; background: none; border: 0; border-radius: 50%; color: var(--atlas-roast-text); cursor: pointer; }
.atlas-roast-icon:hover { color: var(--atlas-roast-accent); }
.atlas-roast-burger { display: none; }
@media (max-width: 720px) {
  .atlas-roast-header__inner { min-height: 68px; }
  .atlas-roast-brand { font-size: 1.6rem; }
  .atlas-roast-burger { display: inline-flex; }
  /* No menu items: nothing to open. */
  .atlas-roast-header__inner:has(.atlas-roast-nav > ul:empty) .atlas-roast-burger { display: none; }
  .atlas-roast-nav { display: none; position: absolute; top: 100%; left: -1.25rem; right: -1.25rem; background: var(--atlas-roast-bg); border-block: 1px solid var(--atlas-roast-border); padding: 1rem 1.25rem; z-index: 10; }
  .atlas-roast-nav.is-open { display: block; }
  .atlas-roast-nav ul { flex-direction: column; gap: .5rem; }
  .atlas-roast-nav a { font-size: 1.05rem; }
}

.atlas-roast-main { flex: 1; padding-block: 3rem 5rem; }
.atlas-roast-hero { padding-block: .5rem 2.75rem; text-align: center; }
.atlas-roast-hero h1 { font-size: clamp(2.6rem, 6vw, 4rem); line-height: 1.08; margin: 0; }
.atlas-roast-hero h1::after { content: ""; display: block; width: 56px; height: 2px; margin: 1.1rem auto 0; background: var(--atlas-roast-accent); }
.atlas-roast-lead { font-size: 1.2rem; font-style: italic; line-height: 1.5; color: var(--atlas-roast-muted); margin: 1rem auto 0; max-width: 38em; }
.atlas-roast-eyebrow { display: inline-block; text-transform: uppercase; letter-spacing: .14em; font-size: .72rem; font-weight: 600; color: var(--atlas-roast-accent); text-decoration: none; }

/* Latest post, on the home */
.atlas-roast-feature { display: grid; grid-template-columns: 1.15fr 1fr; background: var(--atlas-roast-surface); border: 1px solid var(--atlas-roast-border); border-radius: var(--atlas-roast-radius); overflow: hidden; margin-bottom: 3rem; }
.atlas-roast-feature--plain { grid-template-columns: 1fr; }
.atlas-roast-feature__media { display: block; min-height: 480px; position: relative; }
.atlas-roast .atlas-roast-feature__media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.atlas-roast-feature__body { align-self: center; padding: clamp(1.75rem, 4vw, 3.25rem); }
.atlas-roast-feature__title { font-size: clamp(2.1rem, 3.8vw, 3rem); line-height: 1.1; margin: .6rem 0 .8rem; }
.atlas-roast-feature__title a { color: var(--atlas-roast-text); text-decoration: none; }
.atlas-roast-feature__title a:hover { color: var(--atlas-roast-accent); }
.atlas-roast-feature__excerpt { font-size: 1.1rem; line-height: 1.55; margin: 0 0 1.1rem; color: var(--atlas-roast-muted); }
.atlas-roast-feature__read { display: inline-block; margin-top: .4rem; font-weight: 600; }
@media (max-width: 860px) {
  .atlas-roast-feature { grid-template-columns: 1fr; }
  .atlas-roast-feature__media { min-height: 0; aspect-ratio: 1 / 1; }
}

.atlas-roast-grid { display: grid; gap: 2.25rem 2rem; grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr)); }
.atlas-roast-card { display: flex; flex-direction: column; }
.atlas-roast-card__media { display: block; border-radius: var(--atlas-roast-radius); overflow: hidden; }
.atlas-roast-card__media img { aspect-ratio: 3 / 2; width: 100%; object-fit: cover; }
.atlas-roast-card__body { padding-top: .9rem; }
.atlas-roast-card__title { font-size: 1.65rem; line-height: 1.15; margin: .2rem 0 .4rem; }
.atlas-roast-card__title a { color: var(--atlas-roast-text); text-decoration: none; }
.atlas-roast-card__title a:hover { color: var(--atlas-roast-accent); }
.atlas-roast-card__excerpt { margin: 0 0 .4rem; color: var(--atlas-roast-muted); font-size: 1rem; line-height: 1.55; }
.atlas-roast-card .atlas-roast-muted { margin: 0; }
.atlas-roast-more { margin: 2.75rem 0 0; text-align: center; }

/* Article */
.atlas-roast-article { max-width: 760px; }
.atlas-roast-article__header { text-align: center; }
.atlas-roast-article__header h1 { font-size: clamp(2.5rem, 6vw, 3.7rem); line-height: 1.08; margin: .4rem 0 .7rem; }
.atlas-roast-article__header .atlas-roast-muted { margin: .9rem 0 0; }
.atlas-roast-article__hero { margin: 2.25rem 0; background: var(--atlas-roast-surface); border-radius: var(--atlas-roast-radius); overflow: hidden; }
/* Whole photo, portrait ones included, without a screen-tall column. */
.atlas-roast .atlas-roast-article__hero img { width: auto; max-height: min(82vh, 780px); margin-inline: auto; }
.atlas-roast-article__hero figcaption { color: var(--atlas-roast-muted); background: var(--atlas-roast-bg); font-size: .85rem; padding-top: .5rem; text-align: center; }
.atlas-roast-prose { font-size: 1.08rem; }
.atlas-roast-prose > :first-child { margin-top: 0; }
.atlas-roast-prose h2 { font-size: 2rem; margin: 2.4rem 0 .6rem; line-height: 1.15; }
.atlas-roast-prose h3 { font-size: 1.55rem; margin: 2rem 0 .5rem; line-height: 1.2; }
.atlas-roast-prose blockquote { margin: 1.75rem 0; padding: .1rem 0 .1rem 1.4rem; border-left: 2px solid var(--atlas-roast-accent); font-style: italic; color: var(--atlas-roast-muted); }
.atlas-roast-prose pre { background: var(--atlas-roast-surface); border: 1px solid var(--atlas-roast-border); border-radius: var(--atlas-roast-radius); padding: 1rem; overflow-x: auto; font-size: .88rem; }
.atlas-roast-prose code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85em; }
.atlas-roast-prose table { border-collapse: collapse; width: 100%; display: block; overflow-x: auto; }
.atlas-roast-prose th, .atlas-roast-prose td { border: 1px solid var(--atlas-roast-border); padding: .5rem .75rem; text-align: left; }
.atlas-roast-prose img { border-radius: var(--atlas-roast-radius); margin: 1.75rem 0; }
.atlas-roast-prose hr { border: 0; width: 56px; border-top: 2px solid var(--atlas-roast-accent); margin: 2.75rem auto; }
.atlas-roast-tags { list-style: none; display: flex; flex-wrap: wrap; gap: .5rem; padding: 0; margin: 2.25rem 0 0; }
.atlas-roast-tags li { border: 1px solid var(--atlas-roast-border); border-radius: 999px; padding: .1rem .8rem; font-size: .82rem; color: var(--atlas-roast-muted); }

.atlas-roast-author { display: flex; gap: 1.5rem; align-items: center; justify-content: center; margin-bottom: 2.75rem; }
.atlas-roast-author h1 { margin: 0; font-size: clamp(2.3rem, 5vw, 3.2rem); line-height: 1.1; }
.atlas-roast-author p { margin: .3rem 0 0; }
.atlas-roast .atlas-roast-author__avatar { border-radius: 50%; width: 96px; height: 96px; object-fit: cover; flex: none; }
.atlas-roast-socials { list-style: none; display: flex; gap: 1rem; padding: 0; margin: .5rem 0 0; }

.atlas-roast-notfound { text-align: center; padding-block: 3rem; }

/* Footer: the one espresso band of the page */
.atlas-roast-footer { background: var(--atlas-roast-text); color: var(--atlas-roast-bg); padding-block: 2.5rem; text-align: center; }
.atlas-roast-footer__brand { display: block; font-family: var(--atlas-roast-display); font-weight: 600; font-size: 1.6rem; line-height: 1.2; }
.atlas-roast-footer ul { list-style: none; display: flex; flex-wrap: wrap; justify-content: center; gap: .4rem 1.4rem; padding: 0; margin: .9rem 0 0; }
.atlas-roast-footer ul:empty { display: none; }
.atlas-roast-footer a { color: var(--atlas-roast-bg); }
.atlas-roast-footer a:hover { color: var(--atlas-roast-bg); opacity: .75; }
.atlas-roast-footer__copy { margin: .9rem 0 0; font-size: .8rem; opacity: .75; }
`, C = `// Atlas Roast — runtime menu loader, uploaded as theme-assets/atlas-roast-menu.js.
// Refreshes [data-cms-menu="header|footer"] from data/menu.json (the
// admin rewrites it whenever menus, posts or categories change) and
// wires the mobile burger. Fails silently: the statically rendered
// menu stays in place.
(function () {
  "use strict";
  // Sites hosted in a sub-folder carry <meta name="x-cms-base" content="/repo/">.
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\\/\\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\\//, "");
  }
  var here = location.pathname.replace(/\\/$/, "/index.html");

  function render(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = withBase(item.href);
      a.textContent = item.label;
      // Anchors ("/index.html#menu") are sections, not the current page.
      if (a.pathname === here && !a.hash) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      if (item.children && item.children.length) li.appendChild(render(item.children));
      ul.appendChild(li);
    });
    return ul;
  }

  function fill(menu) {
    ["header", "footer"].forEach(function (slot) {
      var host = document.querySelector('[data-cms-menu="' + slot + '"]');
      if (!host || !Array.isArray(menu[slot])) return;
      var old = host.querySelector("ul");
      var next = render(menu[slot]);
      if (old) host.replaceChild(next, old);
      else host.appendChild(next);
    });
  }

  function wireBurger() {
    var button = document.querySelector("[data-atlas-roast-burger]");
    var nav = document.getElementById("atlas-roast-nav");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
  }

  function start() {
    wireBurger();
    fetch(withBase("/data/menu.json"), { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(fill)
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`, E = `# Atlas Roast

Warm coffee-shop theme: cream background, espresso text, terracotta accents and an elegant serif.

An AgentCMS theme. Install the ZIP from the admin: **Themes → Install theme**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack atlas-roast.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the theme in place.
`;
function u(t, e) {
  const r = w.getFixedT(N(e || t.settings.language || "en"), "theme-atlas-roast");
  return (s) => r(`public.${s}`);
}
function b({ items: t, currentPath: e }) {
  return /* @__PURE__ */ a("ul", { children: t.map((r) => {
    const s = e !== void 0 && r.href === `/${e}`;
    return /* @__PURE__ */ o("li", { children: [
      /* @__PURE__ */ a("a", { href: r.href, "aria-current": s ? "page" : void 0, children: r.label }),
      r.children && r.children.length > 0 && /* @__PURE__ */ a(b, { items: r.children, currentPath: e })
    ] }, r.id);
  }) });
}
function L({ site: t, currentPath: e, locale: r }) {
  var l;
  const s = u(t, r), n = ((l = t.settings.enabledPlugins) == null ? void 0 : l["agentcms-search"]) !== !1;
  return /* @__PURE__ */ a("header", { className: "atlas-roast-header", children: /* @__PURE__ */ o("div", { className: "atlas-roast-container atlas-roast-header__inner", children: [
    /* @__PURE__ */ a("nav", { id: "atlas-roast-nav", className: "atlas-roast-nav", "aria-label": s("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ a(b, { items: t.resolvedMenus.header, currentPath: e }) }),
    /* @__PURE__ */ a("a", { className: "atlas-roast-brand", href: t.homePath ?? "/index.html", children: t.settings.title }),
    /* @__PURE__ */ o("div", { className: "atlas-roast-actions", children: [
      n && /* @__PURE__ */ a("button", { className: "atlas-roast-icon", type: "button", "data-cms-search": !0, "aria-label": s("search"), children: /* @__PURE__ */ o("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ a("circle", { cx: "11", cy: "11", r: "7" }),
        /* @__PURE__ */ a("path", { d: "m20 20-4-4" })
      ] }) }),
      /* @__PURE__ */ o("button", { className: "atlas-roast-icon atlas-roast-burger", type: "button", "aria-expanded": "false", "aria-controls": "atlas-roast-nav", "data-atlas-roast-burger": !0, children: [
        /* @__PURE__ */ a("span", { className: "atlas-roast-sr-only", children: s("menu") }),
        /* @__PURE__ */ a("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ a("path", { d: "M4 7h16M4 12h16M4 17h16" }) })
      ] })
    ] })
  ] }) });
}
function j({ site: t, locale: e }) {
  const r = u(t, e);
  return /* @__PURE__ */ a("footer", { className: "atlas-roast-footer", children: /* @__PURE__ */ o("div", { className: "atlas-roast-container", children: [
    /* @__PURE__ */ a("span", { className: "atlas-roast-footer__brand", children: t.settings.title }),
    /* @__PURE__ */ a("nav", { "aria-label": r("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ a(b, { items: t.resolvedMenus.footer }) }),
    /* @__PURE__ */ o("p", { className: "atlas-roast-footer__copy", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      t.settings.title
    ] })
  ] }) });
}
function B({ site: t, pageTitle: e, pageDescription: r, ogImage: s, currentPath: n, currentLocale: l, children: h }) {
  const c = l || t.settings.language || "en", i = t.settings.title || "", d = e ? e.includes(i) ? e : `${e} — ${i}` : i, m = t.settings.baseUrl && n ? k(t.settings.baseUrl, n) : void 0;
  return /* @__PURE__ */ o("html", { lang: c, children: [
    /* @__PURE__ */ o("head", { children: [
      /* @__PURE__ */ a("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ a("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ a("title", { children: d }),
      r && /* @__PURE__ */ a("meta", { name: "description", content: r }),
      m && /* @__PURE__ */ a("link", { rel: "canonical", href: m }),
      /* @__PURE__ */ a("meta", { property: "og:title", content: d }),
      r && /* @__PURE__ */ a("meta", { property: "og:description", content: r }),
      s && /* @__PURE__ */ a("meta", { property: "og:image", content: s }),
      m && /* @__PURE__ */ a("meta", { property: "og:url", content: m }),
      /* @__PURE__ */ a("link", { rel: "stylesheet", href: `/${t.themeCssPath}` }),
      /* @__PURE__ */ a("script", { src: "/theme-assets/atlas-roast-menu.js", defer: !0 }),
      /* @__PURE__ */ a("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ o("body", { className: "atlas-roast", children: [
      /* @__PURE__ */ a(L, { site: t, currentPath: n, locale: c }),
      /* @__PURE__ */ a("main", { className: "atlas-roast-main", children: h }),
      /* @__PURE__ */ a(j, { site: t, locale: c }),
      /* @__PURE__ */ a("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function $({ post: t }) {
  var r;
  const e = g(t.hero, "medium");
  return /* @__PURE__ */ o("article", { className: "atlas-roast-card", children: [
    e && /* @__PURE__ */ a("a", { href: `/${t.url}`, className: "atlas-roast-card__media", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ a("img", { src: e, alt: ((r = t.hero) == null ? void 0 : r.alt) ?? "", loading: "lazy" }) }),
    /* @__PURE__ */ o("div", { className: "atlas-roast-card__body", children: [
      t.category && /* @__PURE__ */ a("a", { className: "atlas-roast-eyebrow", href: t.category.url, children: t.category.name }),
      /* @__PURE__ */ a("h2", { className: "atlas-roast-card__title", children: /* @__PURE__ */ a("a", { href: `/${t.url}`, children: t.title }) }),
      t.excerpt && /* @__PURE__ */ a("p", { className: "atlas-roast-card__excerpt", children: t.excerpt }),
      t.dateLabel && /* @__PURE__ */ a("p", { className: "atlas-roast-muted", children: t.dateLabel })
    ] })
  ] });
}
function M({ post: t, site: e }) {
  var n;
  const r = u(e), s = g(t.hero, "full");
  return /* @__PURE__ */ o("article", { className: s ? "atlas-roast-feature" : "atlas-roast-feature atlas-roast-feature--plain", children: [
    s && /* @__PURE__ */ a("a", { href: `/${t.url}`, className: "atlas-roast-feature__media", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ a("img", { src: s, alt: ((n = t.hero) == null ? void 0 : n.alt) ?? "" }) }),
    /* @__PURE__ */ o("div", { className: "atlas-roast-feature__body", children: [
      t.category ? /* @__PURE__ */ a("a", { className: "atlas-roast-eyebrow", href: t.category.url, children: t.category.name }) : /* @__PURE__ */ a("span", { className: "atlas-roast-eyebrow", children: r("latest") }),
      /* @__PURE__ */ a("h2", { className: "atlas-roast-feature__title", children: /* @__PURE__ */ a("a", { href: `/${t.url}`, children: t.title }) }),
      t.excerpt && /* @__PURE__ */ a("p", { className: "atlas-roast-feature__excerpt", children: t.excerpt }),
      t.dateLabel && /* @__PURE__ */ a("p", { className: "atlas-roast-muted", children: t.dateLabel }),
      /* @__PURE__ */ a("a", { className: "atlas-roast-feature__read", href: `/${t.url}`, children: r("read") })
    ] })
  ] });
}
function p({ posts: t, site: e }) {
  return t.length === 0 ? /* @__PURE__ */ a("p", { className: "atlas-roast-muted", children: u(e)("empty") }) : /* @__PURE__ */ a("div", { className: "atlas-roast-grid", children: t.map((r) => /* @__PURE__ */ a($, { post: r }, r.id)) });
}
function R({ site: t, posts: e, staticPage: r, archivesLink: s }) {
  if (r)
    return /* @__PURE__ */ a("div", { className: "atlas-roast-container atlas-roast-prose", dangerouslySetInnerHTML: { __html: r.bodyHtml } });
  const [n, ...l] = e;
  return /* @__PURE__ */ o("div", { className: "atlas-roast-container", children: [
    t.settings.description ? /* @__PURE__ */ o("section", { className: "atlas-roast-hero", children: [
      /* @__PURE__ */ a("h1", { children: t.settings.title }),
      /* @__PURE__ */ a("p", { className: "atlas-roast-lead", children: t.settings.description })
    ] }) : /* @__PURE__ */ a("h1", { className: "atlas-roast-sr-only", children: t.settings.title }),
    n ? /* @__PURE__ */ a(M, { post: n, site: t }) : /* @__PURE__ */ a(p, { posts: [], site: t }),
    l.length > 0 && /* @__PURE__ */ a(p, { posts: l, site: t }),
    s && /* @__PURE__ */ a("p", { className: "atlas-roast-more", children: /* @__PURE__ */ a("a", { href: s.href, children: s.label }) })
  ] });
}
function P({ site: t, post: e, bodyHtml: r, author: s, hero: n, primaryTerm: l, tags: h }) {
  const c = g(n, "full"), i = e.type === "post", d = new Date(S(e));
  let m = "";
  try {
    m = new Intl.DateTimeFormat(t.settings.language || "en", { dateStyle: "long" }).format(d);
  } catch {
    m = d.toDateString();
  }
  return /* @__PURE__ */ o("article", { className: "atlas-roast-container atlas-roast-article", children: [
    /* @__PURE__ */ o("header", { className: "atlas-roast-article__header", children: [
      i && l && /* @__PURE__ */ a("a", { className: "atlas-roast-eyebrow", href: `/${z(l)}`, children: l.name }),
      /* @__PURE__ */ a("h1", { children: e.title }),
      e.excerpt && /* @__PURE__ */ a("p", { className: "atlas-roast-lead", children: e.excerpt }),
      i && /* @__PURE__ */ o("p", { className: "atlas-roast-muted", children: [
        s ? /* @__PURE__ */ o(_, { children: [
          s.url ? /* @__PURE__ */ a("a", { href: s.url, children: s.displayName }) : s.displayName,
          " · "
        ] }) : null,
        /* @__PURE__ */ a("time", { dateTime: d.toISOString(), children: m })
      ] })
    ] }),
    c && /* @__PURE__ */ o("figure", { className: "atlas-roast-article__hero", children: [
      /* @__PURE__ */ a("img", { src: c, alt: (n == null ? void 0 : n.alt) ?? "" }),
      (n == null ? void 0 : n.caption) && /* @__PURE__ */ a("figcaption", { children: n.caption })
    ] }),
    /* @__PURE__ */ a("div", { className: "atlas-roast-prose", dangerouslySetInnerHTML: { __html: r } }),
    i && h.length > 0 && /* @__PURE__ */ a("ul", { className: "atlas-roast-tags", "aria-label": u(t)("tags"), children: h.map((v) => /* @__PURE__ */ o("li", { children: [
      "#",
      v.name
    ] }, v.id)) })
  ] });
}
function I({ site: t, term: e, posts: r, archivesLink: s }) {
  return /* @__PURE__ */ o("div", { className: "atlas-roast-container", children: [
    /* @__PURE__ */ o("header", { className: "atlas-roast-hero", children: [
      /* @__PURE__ */ a("h1", { children: e.name }),
      e.description && /* @__PURE__ */ a("p", { className: "atlas-roast-lead", children: e.description })
    ] }),
    /* @__PURE__ */ a(p, { posts: r, site: t }),
    s && /* @__PURE__ */ a("p", { className: "atlas-roast-more", children: /* @__PURE__ */ a("a", { href: s.href, children: s.label }) })
  ] });
}
function H({ site: t, author: e, posts: r }) {
  const s = g(e.avatar, "small");
  return /* @__PURE__ */ o("div", { className: "atlas-roast-container", children: [
    /* @__PURE__ */ o("header", { className: "atlas-roast-author", children: [
      s && /* @__PURE__ */ a("img", { className: "atlas-roast-author__avatar", src: s, alt: "", width: 96, height: 96 }),
      /* @__PURE__ */ o("div", { children: [
        /* @__PURE__ */ a("h1", { children: e.displayName }),
        e.title && /* @__PURE__ */ a("p", { className: "atlas-roast-muted", children: e.title }),
        e.bio && /* @__PURE__ */ a("p", { children: e.bio }),
        e.socials && e.socials.length > 0 && /* @__PURE__ */ a("ul", { className: "atlas-roast-socials", children: e.socials.map((n) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a("a", { href: n.url, rel: "me noopener", children: n.network }) }, n.network)) })
      ] })
    ] }),
    /* @__PURE__ */ a(p, { posts: r, site: t })
  ] });
}
function q({ site: t, message: e }) {
  const r = u(t);
  return /* @__PURE__ */ o("div", { className: "atlas-roast-container atlas-roast-hero atlas-roast-notfound", children: [
    /* @__PURE__ */ a("h1", { children: r("notFoundTitle") }),
    /* @__PURE__ */ a("p", { className: "atlas-roast-lead", children: e ?? r("notFoundText") }),
    /* @__PURE__ */ a("p", { children: /* @__PURE__ */ a("a", { href: t.homePath ?? "/index.html", children: r("backHome") }) })
  ] });
}
function G({ config: t, save: e }) {
  const { t: r } = F("theme-atlas-roast"), [s, n] = x(t), [l, h] = x(!1);
  T(() => n(t), [t]);
  async function c(i) {
    i.preventDefault(), h(!0);
    try {
      await e(s), A.success(r("settings.saved"));
    } finally {
      h(!1);
    }
  }
  return /* @__PURE__ */ o("form", { onSubmit: c, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ a("h1", { className: "text-xl font-semibold", children: r("settings.title") }),
    ["accent", "background", "text"].map((i) => /* @__PURE__ */ o("label", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ a("span", { className: "text-sm", children: r(`settings.${i}`) }),
      /* @__PURE__ */ a(
        "input",
        {
          type: "color",
          value: s.colors[i],
          onChange: (d) => n({ ...s, colors: { ...s.colors, [i]: d.target.value } })
        }
      )
    ] }, i)),
    /* @__PURE__ */ a("button", { type: "submit", className: "btn btn-primary", disabled: l, children: /* @__PURE__ */ a("span", { children: r("settings.save") }) })
  ] });
}
const f = {
  colors: { accent: "#a9492a", background: "#faf3e7", text: "#2b1a12" }
}, D = {
  "colors.accent": { description: "Links, buttons and highlights.", format: "hex color" },
  "colors.background": { description: "Page background.", format: "hex color" },
  "colors.text": { description: "Body text.", format: "hex color" }
};
function U(t, e) {
  const r = { ...f.colors, ...(e == null ? void 0 : e.colors) ?? {} };
  if (Object.keys(r).every((l) => r[l] === f.colors[l])) return t;
  const n = (l) => /^#[0-9a-f]{3,8}$/i.test(l) ? l : "inherit";
  return `${t}
:root{--atlas-roast-accent:${n(r.accent)};--atlas-roast-bg:${n(r.background)};--atlas-roast-text:${n(r.text)}}
`;
}
const O = {
  en: {
    public: { latest: "Latest", read: "Read the story", search: "Search", menu: "Menu", mainNav: "Main", footerNav: "Footer", tags: "Tags", empty: "Nothing published yet.", notFoundTitle: "Page not found", notFoundText: "The page you are looking for does not exist or has moved.", backHome: "Back to the home page", by: "By" },
    settings: { navLabel: "Atlas Roast", title: "Atlas Roast settings", accent: "Accent color", background: "Background", text: "Text color", save: "Save", saved: "Saved — the theme CSS was uploaded with your colors. Visitors may need a hard refresh." }
  },
  fr: {
    public: { latest: "À la une", read: "Lire l'article", search: "Rechercher", menu: "Menu", mainNav: "Principal", footerNav: "Pied de page", tags: "Étiquettes", empty: "Rien de publié pour le moment.", notFoundTitle: "Page introuvable", notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil", by: "Par" },
    settings: { navLabel: "Atlas Roast", title: "Réglages Atlas Roast", accent: "Couleur d'accent", background: "Fond", text: "Couleur du texte", save: "Enregistrer", saved: "Enregistré — le CSS du thème a été envoyé avec vos couleurs. Un rechargement forcé peut être nécessaire." }
  }
}, Y = {
  id: "atlas-roast",
  name: "Atlas Roast",
  version: "1.0.0",
  description: "Warm coffee-shop theme: cream background, espresso text, terracotta accents and an elegant serif.",
  readme: E,
  scssEntry: "theme.css",
  cssText: y,
  // Uploaded as theme-assets/atlas-roast-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: C,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" },
      // Uncropped: article heroes and the home feature keep portrait photos whole.
      full: { width: 1600, height: 1600, fit: "contain" }
    }
  },
  templates: {
    base: B,
    home: R,
    single: P,
    category: I,
    author: H,
    notFound: q
  },
  // /theme-settings page; the saved config is baked into the uploaded CSS.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: f, component: G, schema: D },
  compileCss: (t) => U(y, t),
  // Translations, namespace "theme-atlas-roast" (admin UI + public labels).
  i18n: O
};
export {
  Y as default
};
