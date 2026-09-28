/* PLTBR Precision Motion — trilingual static site generator.
   Reads page modules from ./pages/*.mjs and emits /en/ /zh/ /ja/ plus the
   root language-redirect index, sitemap.xml and robots.txt.
   Run from the site root:  node _tmp/build.mjs                                  */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DOMAIN, LANGS, BRAND } from "./i18n.mjs";
import { head, header, footer, floats, scripts, pageUrl } from "./components.mjs";
import { renderFramePage, allFrames, fileForFrame } from "./model-detail.mjs";
import { GEAR_SERIES, renderGearSeries } from "./stepper-cat.mjs";

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIR, "..");

const PAGES = [
  "index", "products", "planetary-gearbox", "stepper-motor",
  "stepper-standard", "stepper-high-precision", "stepper-closed-loop",
  "stepper-hollow-shaft", "stepper-geared", "stepper-high-precision-geared",
  "stepper-external-leadscrew", "stepper-through-leadscrew", "stepper-fixed-leadscrew",
  "stepper-electric-cylinder", "stepper-integrated-drive",
  "pg42-planetary-gearbox", "nema-23-stepper-motor",
  "industries", "quality", "about", "resources", "blog", "news",
  "software", "customization", "contact", "sitemap",
];

const mods = {};
for (const name of PAGES) mods[name] = await import("./pages/" + name + ".mjs");

/* ---------- root language-redirect index ---------- */
function rootIndex() {
  const links = LANGS.map((l) => '<a href="' + l.code + '/" hreflang="' + l.hreflang + '" lang="' + l.htmlLang + '">' + l.label + "</a>").join(" · ");
  return [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + BRAND.short.en + " · " + BRAND.name.zh + "</title>",
    '<meta name="robots" content="index, follow">',
    '<link rel="canonical" href="' + DOMAIN + '/">',
    '<link rel="icon" type="image/svg+xml" href="img/favicon.svg">',
    "<script>",
    "(function(){var n=(navigator.languages&&navigator.languages[0])||navigator.language||'en';n=n.toLowerCase();var p='en';if(n.indexOf('zh')===0)p='zh';else if(n.indexOf('ja')===0)p='ja';else if(n.indexOf('ko')===0)p='ko';else if(n.indexOf('de')===0)p='de';window.location.replace(p+'/');})();",
    "</script>",
    '<meta http-equiv="refresh" content="0; url=en/">',
    "</head>",
    "<body>",
    '<h1 style="font-family:sans-serif">' + BRAND.short.en + " · " + BRAND.name.zh + "</h1>",
    '<p style="font-family:sans-serif">' + links + "</p>",
    "</body>",
    "</html>",
  ].join("\n");
}

/* ---------- sitemap.xml ---------- */
function sitemapXml() {
  const files = PAGES.map((n) => n + ".html");
  for (const f of allFrames()) files.push(fileForFrame(f.catId, f.frame));
  for (const s of GEAR_SERIES) files.push(s.file);
  const urls = [];
  for (const file of files) {
    for (const l of LANGS) {
      const url = pageUrl(l.code, file);
      const alts = LANGS.map((o) =>
        '<xhtml:link rel="alternate" hreflang="' + o.hreflang + '" href="' + pageUrl(o.code, file) + '"/>'
      ).join("");
      urls.push("  <url><loc>" + url + "</loc>" + alts + "</url>");
    }
  }
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urls.join("\n"),
    "</urlset>",
  ].join("\n");
}

/* ---------- robots.txt ---------- */
function robots() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: " + DOMAIN + "/sitemap.xml",
    "",
  ].join("\n");
}

/* ---------- build ---------- */
const frames = allFrames();

function writeHtml(langDir, page, lang) {
  const html = [
    head(page, lang),
    header(page.file, lang),
    '<main id="main">',
    page.body,
    "</main>",
    footer(lang),
    floats(lang),
    scripts(),
  ].join("\n");
  fs.writeFileSync(path.join(langDir, page.file), html + "\n", "utf8");
  console.log("built " + lang + "/" + page.file + "  (" + html.length + " chars)");
}

function cleanObsolete(langDir) {
  for (const f of fs.readdirSync(langDir)) {
    if (f.startsWith("stepper-model-")) {
      try { fs.unlinkSync(path.join(langDir, f)); } catch (e) { /* ignore */ }
    }
  }
}

for (const l of LANGS) {
  const langDir = path.join(ROOT, l.code);
  await fs.promises.mkdir(langDir, { recursive: true });
  cleanObsolete(langDir);
  for (const name of PAGES) writeHtml(langDir, mods[name].page(l.code), l.code);
  for (const f of frames) writeHtml(langDir, renderFramePage(l.code, f), l.code);
  for (const s of GEAR_SERIES) writeHtml(langDir, renderGearSeries(l.code, s), l.code);
}

fs.writeFileSync(path.join(ROOT, "index.html"), rootIndex() + "\n", "utf8");
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapXml() + "\n", "utf8");
fs.writeFileSync(path.join(ROOT, "robots.txt"), robots(), "utf8");
console.log("built index.html (redirect), sitemap.xml, robots.txt");
console.log("done: " + (PAGES.length + frames.length + GEAR_SERIES.length) + " pages x " + LANGS.length + " languages");
