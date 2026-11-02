import { toast as x, i18n as _, pickPublicLocale as S, postSortMillis as g, mediaToView as y, pickFormat as w, buildPostUrl as A } from "@agent-cms/runtime";
import { jsxs as p, jsx as l } from "react/jsx-runtime";
import { useState as h, useEffect as k } from "react";
import { useTranslation as N } from "react-i18next";
const E = `# Atlas Slider

Automatic photo slider at the top of the home page: one slide per article, with arrows and dots.

An AgentCMS plugin. Install the ZIP from the admin: **Plugins → Install plugin**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack atlas-slider.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the plugin in place.
`;
function C({ config: t, save: i }) {
  const { t: a } = N("atlas-slider"), [e, n] = h(t), [o, d] = h(!1);
  k(() => n(t), [t]);
  async function s(r) {
    r.preventDefault(), d(!0);
    try {
      await i(e), x.success(a("settings.saved"));
    } finally {
      d(!1);
    }
  }
  return /* @__PURE__ */ p("form", { onSubmit: s, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ l("h1", { className: "text-xl font-semibold", children: a("settings.title") }),
    /* @__PURE__ */ p("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ l("span", { className: "text-sm font-medium", children: a("settings.intervalSeconds") }),
      /* @__PURE__ */ l(
        "input",
        {
          className: "input w-full",
          type: "number",
          min: 3,
          max: 30,
          value: e.intervalSeconds,
          onChange: (r) => n({ ...e, intervalSeconds: Number(r.target.value) })
        }
      )
    ] }),
    /* @__PURE__ */ p("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ l("span", { className: "text-sm font-medium", children: a("settings.maxSlides") }),
      /* @__PURE__ */ l(
        "input",
        {
          className: "input w-full",
          type: "number",
          min: 1,
          max: 12,
          value: e.maxSlides,
          onChange: (r) => n({ ...e, maxSlides: Number(r.target.value) })
        }
      )
    ] }),
    /* @__PURE__ */ l("button", { type: "submit", className: "btn btn-primary", disabled: o, children: /* @__PURE__ */ l("span", { children: a("settings.save") }) })
  ] });
}
const v = {
  intervalSeconds: 6,
  maxSlides: 6
}, L = {
  intervalSeconds: { description: "Seconds between two slides.", min: 3, max: 30 },
  maxSlides: { description: "Maximum number of slides: the newest articles that have a featured image.", min: 1, max: 12 }
};
function b(t) {
  return { ...v, ...t ?? {} };
}
const I = {
  en: {
    public: {
      label: "Latest articles",
      previous: "Previous slide",
      next: "Next slide",
      pause: "Pause the slider",
      play: "Play the slider",
      goTo: "Go to slide"
    },
    settings: {
      navLabel: "Atlas Slider",
      title: "Atlas Slider",
      intervalSeconds: "Seconds between two slides",
      maxSlides: "Maximum number of slides",
      save: "Save",
      saved: "Saved. Regenerate the site to apply it to the home page."
    }
  },
  fr: {
    public: {
      label: "Derniers articles",
      previous: "Diapositive précédente",
      next: "Diapositive suivante",
      pause: "Mettre le diaporama en pause",
      play: "Lancer le diaporama",
      goTo: "Aller à la diapositive"
    },
    settings: {
      navLabel: "Atlas Slider",
      title: "Atlas Slider",
      intervalSeconds: "Secondes entre deux diapositives",
      maxSlides: "Nombre maximum de diapositives",
      save: "Enregistrer",
      saved: "Enregistré. Régénérez le site pour l'appliquer à la page d'accueil."
    }
  }
}, T = `.atlas-slider { position: relative; width: min(100% - 2.5rem, 1120px); max-height: min(80vh, 630px); aspect-ratio: 16 / 9; margin: 0 auto 3rem; overflow: hidden; border-radius: 4px; background: #2b1a12; color: #fff; }
.atlas-slider a.atlas-slider__slide { position: absolute; inset: 0; display: block; color: #fff; text-decoration: none; opacity: 0; visibility: hidden; transition: opacity .7s ease, visibility 0s linear .7s; }
.atlas-slider a.atlas-slider__slide.is-active { opacity: 1; visibility: visible; transition: opacity .7s ease; }
/* Slightly above center: subjects of portrait photos sit in the upper half. */
.atlas-slider img.atlas-slider__img { position: absolute; inset: 0; width: 100%; height: 100%; max-width: none; object-fit: cover; object-position: 50% 38%; }
.atlas-slider__caption { position: absolute; left: 0; right: 0; bottom: 0; padding: 6rem clamp(4rem, 8vw, 5.5rem) 3.25rem; text-align: center; background: linear-gradient(to top, rgba(20, 11, 7, .9), rgba(20, 11, 7, .68) 55%, rgba(20, 11, 7, 0)); }
.atlas-slider h2.atlas-slider__title { margin: 0; color: #fff; font-size: clamp(1.7rem, 4vw, 2.8rem); line-height: 1.12; text-shadow: 0 1px 12px rgba(20, 11, 7, .7); }
.atlas-slider a.atlas-slider__slide:hover .atlas-slider__title { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: .15em; }
.atlas-slider__btn { position: absolute; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 0; border-radius: 50%; background: rgba(20, 11, 7, .5); color: #fff; cursor: pointer; transition: background .2s; }
.atlas-slider__btn:hover { background: rgba(20, 11, 7, .8); }
.atlas-slider__btn svg { display: block; }
.atlas-slider__prev { left: .75rem; top: 50%; transform: translateY(-50%); }
.atlas-slider__next { right: .75rem; top: 50%; transform: translateY(-50%); }
.atlas-slider__toggle { top: .75rem; right: .75rem; width: 36px; height: 36px; }
.atlas-slider__dots { position: absolute; left: 0; right: 0; bottom: .6rem; display: flex; justify-content: center; }
.atlas-slider__dot { width: 28px; height: 28px; padding: 0; border: 0; background: none; cursor: pointer; }
.atlas-slider__dot::before { content: ""; display: block; width: 10px; height: 10px; margin: auto; border-radius: 50%; border: 1px solid #fff; transition: background .2s; }
.atlas-slider__dot[aria-current="true"]::before { background: #fff; }
.atlas-slider button:focus-visible, .atlas-slider a:focus-visible { outline: 2px solid #fff; outline-offset: -4px; }
@media (max-width: 720px) {
  .atlas-slider { aspect-ratio: 4 / 3; margin-bottom: 2rem; }
  .atlas-slider__caption { padding-inline: 1rem; }
  .atlas-slider__prev, .atlas-slider__next { top: 40%; }
}
@media (prefers-reduced-motion: reduce) {
  .atlas-slider a.atlas-slider__slide, .atlas-slider a.atlas-slider__slide.is-active { transition: none; }
}
`, M = `// Atlas Slider: inlined on the home page. Builds the slider from the
// JSON next to it and puts it at the top of <main>. Fails silently: the
// page is complete without it. Autoplay stops while the slider is
// hovered or focused, and never starts for reduced-motion visitors.
(function () {
  "use strict";
  var source = document.getElementById("atlas-slider-data");
  var main = document.querySelector("main");
  if (!source || !main) return;
  var data;
  try {
    data = JSON.parse(source.textContent);
  } catch (e) {
    return;
  }
  if (!data.slides || !data.slides.length) return;

  // Sites hosted in a sub-folder carry <meta name="x-cms-base" content="/repo/">.
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";

  var SVG_NS = "http://www.w3.org/2000/svg";
  function el(tag, className, parent) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (parent) parent.appendChild(node);
    return node;
  }
  function icon(path, filled) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", filled ? "currentColor" : "none");
    if (!filled) {
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
    }
    var p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", path);
    svg.appendChild(p);
    return svg;
  }
  function button(className, label, svg, parent) {
    var b = el("button", "atlas-slider__btn " + className, parent);
    b.type = "button";
    b.setAttribute("aria-label", label);
    if (svg) b.appendChild(svg);
    return b;
  }

  var labels = data.labels || {};
  var root = el("section", "atlas-slider");
  root.setAttribute("aria-roledescription", "carousel");
  root.setAttribute("aria-label", labels.label || "");

  var items = data.slides.map(function (slide, i) {
    var a = el("a", "atlas-slider__slide", root);
    a.href = BASE + slide.url;
    var img = el("img", "atlas-slider__img", a);
    img.src = slide.image;
    img.alt = slide.alt || "";
    if (i > 0) img.loading = "lazy";
    var caption = el("div", "atlas-slider__caption", a);
    var title = el("h2", "atlas-slider__title", caption);
    title.textContent = slide.title;
    return a;
  });

  var current = 0;
  var dots = [];
  function show(index) {
    current = (index + items.length) % items.length;
    items.forEach(function (item, i) {
      item.classList.toggle("is-active", i === current);
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var paused = reduced; // by the visitor's choice
  var held = false; // while hovered or focused
  var timer = null;

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  function start() {
    stop();
    if (paused || held || items.length < 2) return;
    timer = setInterval(function () {
      if (!document.hidden) show(current + 1);
    }, data.interval || 6000);
  }

  if (items.length > 1) {
    button("atlas-slider__prev", labels.previous, icon("M15 5l-7 7 7 7"), root).addEventListener("click", function () {
      show(current - 1);
      start();
    });
    button("atlas-slider__next", labels.next, icon("M9 5l7 7-7 7"), root).addEventListener("click", function () {
      show(current + 1);
      start();
    });

    var toggle = button("atlas-slider__toggle", "", null, root);
    var pauseIcon = icon("M7 5h4v14H7zM13 5h4v14h-4z", true);
    var playIcon = icon("M8 5l11 7-11 7z", true);
    function renderToggle() {
      toggle.textContent = "";
      toggle.appendChild(paused ? playIcon : pauseIcon);
      toggle.setAttribute("aria-label", paused ? labels.play : labels.pause);
    }
    toggle.addEventListener("click", function () {
      paused = !paused;
      renderToggle();
      start();
    });
    renderToggle();

    var nav = el("div", "atlas-slider__dots", root);
    items.forEach(function (_, i) {
      var dot = el("button", "atlas-slider__dot", nav);
      dot.type = "button";
      dot.setAttribute("aria-label", (labels.goTo || "") + " " + (i + 1));
      dot.addEventListener("click", function () {
        show(i);
        start();
      });
      dots.push(dot);
    });

    function hold(value) {
      held = value;
      start();
    }
    root.addEventListener("mouseenter", function () {
      hold(true);
    });
    root.addEventListener("mouseleave", function () {
      hold(false);
    });
    root.addEventListener("focusin", function () {
      hold(true);
    });
    root.addEventListener("focusout", function () {
      hold(false);
    });

    // Swipe on touch screens.
    var startX = null;
    root.addEventListener(
      "touchstart",
      function (e) {
        startX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    root.addEventListener(
      "touchend",
      function (e) {
        if (startX === null) return;
        var delta = e.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(delta) > 40) {
          show(current + (delta < 0 ? 1 : -1));
          start();
        }
      },
      { passive: true }
    );
  }

  main.insertBefore(root, main.firstChild);
  show(0);
  start();
})();
`, u = "atlas-slider";
let c = [];
function j(t) {
  var a;
  const { maxSlides: i } = b((a = t.settings.pluginConfigs) == null ? void 0 : a[u]);
  return t.posts.filter((e) => e.status === "online" && e.heroMediaId).sort((e, n) => g(n) - g(e)).flatMap((e) => {
    const n = y(t.media.get(e.heroMediaId)), o = w(n, n != null && n.formats.full ? "full" : "large");
    if (!o) return [];
    const d = t.terms.find((s) => s.id === e.primaryTermId);
    return [{ title: e.title, url: A({ post: e, primaryTerm: d }), image: o, alt: (n == null ? void 0 : n.alt) ?? "" }];
  }).slice(0, i);
}
function P(t) {
  return JSON.stringify(t).replace(/</g, "\\u003c").split("\u2028").join("\\u2028").split("\u2029").join("\\u2029");
}
const f = (t) => t.currentPath === "index.html", G = {
  id: u,
  name: "Atlas Slider",
  version: "1.0.0",
  description: "Automatic photo slider at the top of the home page: one slide per article, with arrows and dots.",
  author: "",
  readme: E,
  settings: {
    navLabelKey: "settings.navLabel",
    defaultConfig: v,
    component: C,
    schema: L
  },
  i18n: I,
  register(t) {
    t.addAction("regenerate.listings.before", (...i) => {
      try {
        c = j(i[0]);
      } catch {
        c = [];
      }
    }), t.addFilter("page.head.extra", (i, ...a) => {
      const e = a[0];
      return !f(e) || c.length === 0 ? i : `${i}<style data-atlas-slider>${T}</style>
`;
    }), t.addFilter("page.body.end", (i, ...a) => {
      var m;
      const e = a[0];
      if (!f(e) || c.length === 0) return i;
      const { site: n, currentLocale: o } = e, { intervalSeconds: d } = b((m = n.settings.pluginConfigs) == null ? void 0 : m[u]), s = _.getFixedT(S(o || n.settings.language || "en"), u), r = {
        slides: c,
        interval: d * 1e3,
        labels: {
          label: s("public.label"),
          previous: s("public.previous"),
          next: s("public.next"),
          pause: s("public.pause"),
          play: s("public.play"),
          goTo: s("public.goTo")
        }
      };
      return `${i}<script type="application/json" id="atlas-slider-data">${P(r)}<\/script>
<script>${M.replace(/<\/script>/g, "<\\/script>")}<\/script>
`;
    });
  }
};
export {
  G as default
};
