/* PLTBR Precision Motion — shared page shell (build tool, not published).
   head/SEO + topbar + header/nav (dropdowns + language switcher + search) +
   footer + floating UI. */
import { DOMAIN, LANGS, BRAND, CONTACT, str, augment, SEO_KEYWORDS } from "./i18n.mjs";
import { GEAR_SERIES, CATEGORIES } from "./stepper-cat.mjs";

export function pageUrl(lang, file) {
  return DOMAIN + "/" + lang + "/" + (file === "index.html" ? "" : file);
}

const BRAND_MARK =
  '<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="15" cy="15" r="4"/><circle cx="15" cy="15" r="11" stroke-dasharray="2 3"/><circle cx="15" cy="4" r="2"/><line x1="15" y1="15" x2="15" y2="4"/><path d="M15 0v4M15 26v4M0 15h4M26 15h4"/></svg>';
const CARET =
  '<svg class="caret" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>';
const ICON_SEARCH =
  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="8.6" cy="8.6" r="5.4"/><path d="M12.7 12.7L18 18"/></svg>';
const ICON_GLOBE =
  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10" cy="10" r="7"/><path d="M3 10h14M10 3c2.4 2.4 2.4 11.6 0 14M10 3c-2.4 2.4-2.4 11.6 0 14"/></svg>';

/* ---------------- schema helpers ---------------- */
function org() {
  return {
    "@type": "Organization",
    "@id": DOMAIN + "/#organization",
    name: BRAND.name.en,
    alternateName: [BRAND.short.en, BRAND.name.zh, "杉华"].join(" · "),
    url: DOMAIN + "/",
    logo: DOMAIN + "/img/favicon.svg",
    description: BRAND.tagline.en,
    foundingDate: BRAND.founded,
    email: CONTACT.email,
    telephone: "+86-138-8358-2185",
    address: { "@type": "PostalAddress", streetAddress: "No. 33, Shanhu Avenue, Jiangjin District", addressLocality: "Chongqing", addressRegion: "Chongqing", addressCountry: "CN" },
    contactPoint: {
      "@type": "ContactPoint", contactType: "sales",
      email: CONTACT.email, telephone: "+86-138-8358-2185",
      availableLanguage: ["en", "zh", "ja"], areaServed: "Worldwide",
    },
    sameAs: [CONTACT.whatsapp],
  };
}

function website() {
  return {
    "@type": "WebSite", "@id": DOMAIN + "/#website", url: DOMAIN + "/",
    name: BRAND.short.en, publisher: { "@id": DOMAIN + "/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: DOMAIN + "/en/products.html?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

function localBusiness() {
  return {
    "@type": "LocalBusiness", "@id": DOMAIN + "/#factory",
    name: BRAND.short.en + " Factory",
    image: DOMAIN + "/img/placeholders/factory-3x2.webp",
    url: DOMAIN + "/",
    telephone: "+86-23-6286-9785",
    priceRange: "$$",
    address: { "@type": "PostalAddress", streetAddress: "No. 33, Shanhu Avenue, Jiangjin District", addressLocality: "Chongqing", addressRegion: "Chongqing", addressCountry: "CN" },
    geo: { "@type": "GeoCoordinates", latitude: CONTACT.geo.lat, longitude: CONTACT.geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30", closes: "18:00",
    },
  };
}

function breadcrumb(crumbs, lang, file) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(function (c, i) {
      return {
        "@type": "ListItem", position: i + 1, name: c.name,
        item: DOMAIN + "/" + lang + "/" + (c.to ? c.to : file),
      };
    }),
  };
}

/* ---------------- head ---------------- */
export function head(page, lang) {
  const file = page.file;
  const url = pageUrl(lang, file);
  const ogLocale = lang === "zh" ? "zh_CN" : lang === "ja" ? "ja_JP" : "en_US";

  const hreflangs = LANGS.map(
    (l) => '<link rel="alternate" hreflang="' + l.hreflang + '" href="' + pageUrl(l.code, file) + '">'
  ).join("\n");

  const graph = [org()];
  if (file === "index.html") { graph.push(website()); graph.push(localBusiness()); }
  if (page.crumb && page.crumb.length) graph.push(breadcrumb(page.crumb, lang, file));
  if (page.extraLd) page.extraLd(lang).forEach(function (e) { graph.push(e); });
  const ld = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);

  return [
    "<!DOCTYPE html>",
    '<html lang="' + lang + '">',
    "<head>",
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + page.title + "</title>",
    '<meta name="description" content="' + page.desc + '">',
    '<meta name="keywords" content="' + (page.keywords ? page.keywords + ", " : "") + SEO_KEYWORDS[lang] + '">',
    '<link rel="canonical" href="' + url + '">',
    hreflangs,
    '<link rel="alternate" hreflang="x-default" href="' + DOMAIN + '/">',
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">',
    '<meta name="author" content="' + BRAND.name.en + '">',
    '<meta name="theme-color" content="#123a5c">',
    '<meta name="format-detection" content="telephone=no">',
    '<link rel="icon" type="image/svg+xml" href="../img/favicon.svg">',
    '<link rel="apple-touch-icon" href="../img/favicon.svg">',
    '<meta property="og:type" content="' + (page.ogType || "website") + '">',
    '<meta property="og:site_name" content="' + BRAND.short.en + '">',
    '<meta property="og:locale" content="' + ogLocale + '">',
    '<meta property="og:title" content="' + page.title + '">',
    '<meta property="og:description" content="' + page.desc + '">',
    '<meta property="og:url" content="' + url + '">',
    '<meta property="og:image" content="' + DOMAIN + '/img/og-cover.webp">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + page.title + '">',
    '<meta name="twitter:description" content="' + page.desc + '">',
    '<meta name="twitter:image" content="' + DOMAIN + '/img/og-cover.webp">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">',
    '<link rel="stylesheet" href="../css/style.css">',
    '<script type="application/ld+json">',
    ld,
    "</script>",
    "</head>",
  ].filter(Boolean).join("\n");
}

/* ---------------- header / nav ---------------- */
function cur(file, target) {
  return file === target ? ' aria-current="page"' : "";
}

const gearFeatured = ["AB", "ABR", "AF", "AFR", "AE", "AG", "PB"];
const motorFeatured = ["standard", "high-precision", "closed-loop", "hollow-shaft", "geared", "external-leadscrew", "electric-cylinder"];

function productsDropdown(file, lang) {
  augment(GEAR_SERIES);
  augment(CATEGORIES);
  const active = ["products.html", "planetary-gearbox.html", "stepper-motor.html", "pg42-planetary-gearbox.html", "nema-23-stepper-motor.html"].indexOf(file) !== -1;

  const col1 = [
    ...GEAR_SERIES.filter(function (s) { return gearFeatured.indexOf(s.code) !== -1; }).map(function (s) {
      return [s.code + " " + str(lang, "series", "系列", "シリーズ"), s.file, ""];
    }),
  ];
  const col2 = [
    ...CATEGORIES.filter(function (c) { return motorFeatured.indexOf(c.id) !== -1; }).map(function (c) {
      return [c[lang], c.file, ""];
    }),
  ];

  const col1html = col1.map(function (c) {
    return '<a href="' + c[1] + '">' + c[0] + (c[2] ? '<small>' + c[2] + "</small>" : "") + "</a>";
  }).join("\n");
  const col2html = col2.map(function (c) {
    return '<a href="' + c[1] + '">' + c[0] + (c[2] ? '<small>' + c[2] + "</small>" : "") + "</a>";
  }).join("\n");

  return (
    '<div class="nav-item">' +
    '<a class="nav-link" href="products.html"' + (active ? ' aria-current="page"' : "") + ">" +
    str(lang, "Product Center", "产品中心", "製品センター") + "</a>" +
    '<div class="mega">' +
    '<div class="mega-col"><h3><a href="planetary-gearbox.html">' + str(lang, "Planetary gearboxes", "行星减速机", "プラネタリーギヤボックス") + '</a></h3>' + col1html + "</div>" +
    '<div class="mega-col"><h3><a href="stepper-motor.html">' + str(lang, "Stepper motors", "步进电机", "ステッピングモーター") + '</a></h3>' + col2html + "</div>" +
    '<div class="mega-promo">' +
    '<img src="../img/placeholders/product-3x2.webp" alt="" width="1200" height="800" loading="lazy" decoding="async">' +
    "<strong>" + str(lang, "Non-standard ratio or shaft?", "需要非标速比或轴？", "非標準の減速比・シャフトが必要ですか？") + "</strong>" +
    "<p>" + str(lang, "Output shafts, hollow bores and flanges are machined in-house — feasibility answer within 48 hours.", "输出轴、空心轴与法兰均在厂内加工——48 小时内答复可行性。", "出力シャフト・中空軸・フランジは自社工場で加工——48時間以内に可否をご回答します。") + "</p>" +
    '<a class="text-link" href="customization.html">' + str(lang, "Learn about customization", "了解定制服务", "カスタムについて見る") + ' <span aria-hidden="true">&rarr;</span></a>' +
    "</div>" +
    "</div>" +
    "</div>"
  );
}

function linkDropdown(file, lang, href, label, items, activeFiles) {
  const active = activeFiles.indexOf(file) !== -1;
  const links = items.map(function (it) {
    return '<a href="' + it[1] + '"' + (file === it[1] ? ' aria-current="page"' : "") + ">" + it[0] + "</a>";
  }).join("\n");
  return (
    '<div class="nav-item">' +
    '<a class="nav-link" href="' + href + '"' + (active ? ' aria-current="page"' : "") + ">" + label + "</a>" +
    '<div class="mega mega--compact"><div class="mega-col">' + links + "</div></div>" +
    "</div>"
  );
}

export function header(file, lang) {
  const announce = str(lang, "ISO 9001 factory · 48-hour samples · OEM / ODM welcome", "ISO 9001 工厂 · 48 小时打样 · 欢迎 OEM / ODM", "ISO 9001認証工場・48時間サンプル・OEM / ODM歓迎");
  const telLabel = str(lang, "Tel", "座机", "TEL");
  const curLang = LANGS.find(function (l) { return l.code === lang; });
  const langItems = LANGS.map(function (l) {
    return '<li><a href="../' + l.code + "/" + file + '" hreflang="' + l.hreflang + '" lang="' + l.htmlLang + '"' +
      (l.code === lang ? ' aria-current="true"' : "") + ">" + l.label + "</a></li>";
  }).join("");

  return [
    '<a class="skip-link" href="#main">' + str(lang, "Skip to main content", "跳到主要内容", "本文へスキップ") + "</a>",
    '<div class="topbar">',
    '  <div class="container topbar-inner">',
    '    <p class="announce">' + announce + "</p>",
    '    <div class="topbar-right">',
    '      <a href="mailto:' + CONTACT.email + '"><span class="mono">' + CONTACT.email + "</span></a>",
    '      <span class="sep" aria-hidden="true">|</span>',
    '      <a href="' + CONTACT.telHref + '">' + telLabel + " " + CONTACT.tel + "</a>",
    '      <span class="sep" aria-hidden="true">|</span>',
    '      <a href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener">WhatsApp</a>',
    "    </div>",
    "  </div>",
    "</div>",
    '<header class="site-header">',
    '  <div class="container header-bar">',
    '    <a class="brand" href="index.html" aria-label="' + BRAND.short.en + " — home\">",
    '      <span class="brand-mark" aria-hidden="true">' + BRAND_MARK + "</span>",
    '      <span class="brand-text"><span class="brand-name">' + BRAND.mark[lang] + '</span><span class="brand-sub">' + BRAND.sub[lang] + "</span></span>",
    "    </a>",
    '    <nav class="main-nav" id="mainNav" aria-label="Main">',
    '      <a href="index.html"' + cur(file, "index.html") + ">" + str(lang, "Home", "主页", "ホーム") + "</a>",
    productsDropdown(file, lang),
    '      <a href="industries.html"' + cur(file, "industries.html") + ">" + str(lang, "Industries", "应用行业", "業界・用途") + "</a>",
    linkDropdown(file, lang,
      "about.html",
      str(lang, "About Us", "关于我们", "会社概要"),
      [
        [str(lang, "Company Profile", "公司简介", "会社概要"), "about.html"],
        [str(lang, "Quality & Certification", "质量认证", "品質・認証"), "quality.html"],
        [str(lang, "News", "最新动态", "お知らせ"), "news.html"],
        [str(lang, "Contact Us", "联系我们", "お問い合わせ"), "contact.html"],
      ],
      ["about.html", "quality.html", "news.html", "contact.html"]),
    linkDropdown(file, lang,
      "resources.html",
      str(lang, "Resources", "资源中心", "資料センター"),
      [
        [str(lang, "CAD & Downloads", "资源下载", "資料ダウンロード"), "resources.html"],
        [str(lang, "Articles", "技术文章", "技術記事"), "blog.html"],
        [str(lang, "Software & Tools", "软件及工具", "ソフトウェア・ツール"), "software.html"],
        [str(lang, "Customization", "客户定制", "カスタマイズ"), "customization.html"],
      ],
      ["resources.html", "blog.html", "software.html", "customization.html"]),
    "    </nav>",
    '    <div class="header-tools">',
    '      <div class="lang-switch" data-lang-switch>',
    '        <button class="lang-current" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Language">' + ICON_GLOBE + "<span>" + curLang.short + "</span>" + CARET + "</button>",
    '        <ul class="lang-menu" hidden>' + langItems + "</ul>",
    "      </div>",
    '      <button class="icon-btn" type="button" data-search-toggle aria-expanded="false" aria-controls="siteSearch" aria-label="' + str(lang, "Search products", "搜索产品", "製品を検索") + '">' + ICON_SEARCH + "</button>",
    '      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="' + str(lang, "Open navigation menu", "打开导航菜单", "メニューを開く") + '"><span></span></button>',
    "    </div>",
    "  </div>",
    '  <div class="search-panel" id="siteSearch" hidden>',
    '    <div class="container">',
    '      <div class="search-form" role="search">',
    '        <label class="sr-only" for="siteSearchInput">' + str(lang, "Search products", "搜索产品", "製品を検索") + "</label>",
    '        <input type="search" id="siteSearchInput" name="q" data-search-input autocomplete="off" placeholder="' + str(lang, "Search AB, AF, AG, NEMA 23…", "搜索 AB、AF、AG、NEMA 23…", "AB、AF、AG、NEMA 23…を検索") + '">',
    '        <div class="filter-group" role="group" aria-label="Filter by product family">',
    '          <button class="tag tag--outline" type="button" data-search-family="all" aria-pressed="true">' + str(lang, "All", "全部", "すべて") + "</button>",
    '          <button class="tag tag--outline" type="button" data-search-family="planetary" aria-pressed="false">' + str(lang, "Gearboxes", "减速机", "ギヤボックス") + "</button>",
    '          <button class="tag tag--outline" type="button" data-search-family="stepper" aria-pressed="false">' + str(lang, "Motors", "电机", "モーター") + "</button>",
    '          <button class="tag tag--outline" type="button" data-search-family="sets" aria-pressed="false">' + str(lang, "Sets", "套装", "セット") + "</button>",
    "        </div>",
    "      </div>",
    '      <p class="catalog-count mt-8" data-search-count>' + str(lang, "Popular models", "热门型号", "人気モデル") + "</p>",
    '      <div class="search-results" data-search-results role="region" aria-live="polite" aria-label="' + str(lang, "Search results", "搜索结果", "検索結果") + '"></div>',
    "    </div>",
    "  </div>",
    "</header>",
    '<div class="nav-backdrop" aria-hidden="true"></div>',
  ].join("\n");
}

/* ---------------- footer ---------------- */
export function footer(lang) {
  augment(CATEGORIES);
  const colGear = GEAR_SERIES.filter(function (s) { return gearFeatured.indexOf(s.code) !== -1; }).map(function (s) {
    return [s.code + " " + str(lang, "series", "系列", "シリーズ"), s.file];
  });
  const colMotor = CATEGORIES.filter(function (c) { return motorFeatured.indexOf(c.id) !== -1; }).map(function (c) {
    return [c[lang], c.file];
  });
  const colCompany = [
    [str(lang, "About the factory", "关于工厂", "工場について"), "about.html"],
    [str(lang, "Quality & certification", "质量与认证", "品質・認証"), "quality.html"],
    [str(lang, "Industries we serve", "服务行业", "対応業界"), "industries.html"],
    [str(lang, "Customization", "客户定制", "カスタマイズ"), "customization.html"],
    [str(lang, "Engineering articles", "技术文章", "技術記事"), "blog.html"],
    [str(lang, "Software & tools", "软件及工具", "ソフトウェア・ツール"), "software.html"],
    [str(lang, "Sitemap", "站点地图", "サイトマップ"), "sitemap.html"],
  ];

  function list(arr) {
    return "<ul>" + arr.map(function (a) { return '<li><a href="' + a[1] + '">' + a[0] + "</a></li>"; }).join("") + "</ul>";
  }

  return [
    '<footer class="site-footer">',
    '  <div class="container">',
    '    <div class="footer-top">',
    '      <div class="footer-brand">',
    '        <a class="brand" href="index.html" aria-label="' + BRAND.short.en + " — home\">",
    '          <span class="brand-mark" aria-hidden="true">' + BRAND_MARK + "</span>",
    '          <span class="brand-text"><span class="brand-name">' + BRAND.mark[lang] + '</span><span class="brand-sub">' + BRAND.sub[lang] + "</span></span>",
    "        </a>",
    "        <p>" + BRAND.tagline[lang] + "</p>",
    '        <div class="footer-badges">',
    '          <span class="tag">ISO 9001:2015</span>',
    '          <span class="tag">CE</span>',
    '          <span class="tag">RoHS</span>',
    '          <span class="tag">REACH</span>',
    "        </div>",
    "      </div>",
    '      <div class="footer-col"><h3>' + str(lang, "Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス") + "</h3>" + list(colGear) + "</div>",
    '      <div class="footer-col"><h3>' + str(lang, "Stepper Motors", "步进电机", "ステッピングモーター") + "</h3>" + list(colMotor) + "</div>",
    '      <div class="footer-col"><h3>' + str(lang, "Company", "公司", "企業情報") + "</h3>" + list(colCompany) + "</div>",
    '      <div class="footer-contact">',
    "        <h3>" + str(lang, "Contact", "联系我们", "お問い合わせ") + "</h3>",
    "        <ul>",
    '          <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="1.6" y="3.2" width="12.8" height="9.6" rx="1.4"/><path d="m2 4 6 4.6L14 4"/></svg><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + "</a></li>",
    '          <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3.2 2h2.4l1.2 3-1.6 1.2a9 9 0 0 0 4.2 4.2L11 9l3 1.2v2.4c0 .7-.6 1.3-1.3 1.3A11.4 11.4 0 0 1 2 3.3C2 2.6 2.5 2 3.2 2Z"/></svg><a href="' + CONTACT.telHref + '">' + CONTACT.tel + "</a></li>",
    '          <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M7.5 2A5.5 5.5 0 0 0 2 7.5V9l1 3h2v-3.5A2.5 2.5 0 0 1 7.5 6 2.5 2.5 0 0 1 10 8.5V12h2l1-3V7.5A5.5 5.5 0 0 0 7.5 2Z"/><path d="M8.5 2A5.5 5.5 0 0 1 14 7.5V9l-1 3h-2V8.5"/></svg><span>' + str(lang, "Mobile / WhatsApp", "手机 / WhatsApp", "携帯 / WhatsApp") + " · " + CONTACT.mobileDisplay + "</span></li>",
    '          <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="8" cy="8" r="6.4"/><path d="M8 4.4V8l2.6 1.6"/></svg><span>' + CONTACT.hours[lang] + "</span></li>",
    '          <li><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z"/><circle cx="8" cy="6" r="1.8"/></svg><span>' + CONTACT.address[lang] + "</span></li>",
    "        </ul>",
    "      </div>",
    "    </div>",
    '    <div class="footer-bottom">',
    '      <p>&copy; <span data-year>2026</span> ' + BRAND.name[lang] + " · " + str(lang, "All rights reserved.", "保留所有权利。", "All rights reserved.") + "</p>",
    "      <ul>",
    '        <li><a href="sitemap.html">' + str(lang, "Sitemap", "站点地图", "サイトマップ") + "</a></li>",
    '        <li><a href="quality.html#certifications">' + str(lang, "Certifications", "认证", "認証") + "</a></li>",
    '        <li><a href="resources.html">' + str(lang, "Downloads", "下载", "ダウンロード") + "</a></li>",
    '        <li><a href="contact.html#privacy">' + str(lang, "Privacy & terms", "隐私与条款", "プライバシー・規約") + "</a></li>",
    "      </ul>",
    "    </div>",
    "  </div>",
    "</footer>",
  ].join("\n");
}

/* ---------------- floating UI ---------------- */
export function floats(lang) {
  return [
    '<button class="to-top" type="button" data-to-top aria-label="' + str(lang, "Back to top", "回到顶部", "トップへ戻る") + '">',
    '  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M8 13V3M3.4 7.6 8 3l4.6 4.6"/></svg>',
    '  <span class="float-tip">' + str(lang, "Back to top", "回到顶部", "トップへ戻る") + "</span>",
    "</button>",
    '<a class="wa-float" href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener" aria-label="' + str(lang, "Chat with us on WhatsApp", "通过 WhatsApp 联系我们", "WhatsAppでチャット") + '">',
    '  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 28l7.2-1.6c1.8.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.8.8-3.7-.2-.4C6.4 18.5 6 16.8 6 15c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.6-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>',
    '  <span class="float-tip">WhatsApp · ' + CONTACT.mobileDisplay + "</span>",
    "</a>",
    '<button class="wechat-float" type="button" data-wechat aria-expanded="false" aria-label="' + str(lang, "Add us on WeChat", "添加微信", "WeChatを追加") + '">',
    '  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M14.5 6C8.7 6 4 9.8 4 14.5c0 2.6 1.4 5 3.6 6.5l-.9 3 3.4-1.6c1.3.4 2.7.6 4.4.6h.5c-.1-.4-.1-.8-.1-1.2 0-4.2 4-7.6 8.9-7.6h.7C23.9 9.7 19.6 6 14.5 6zm-4 4.8a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zm8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM28 18.7c0-3.5-3.3-6.3-7.4-6.3S13.2 15.2 13.2 18.7 16.5 25 20.6 25c1 0 2-.2 2.9-.5l2.7 1.2-.7-2.4c1.6-1.2 2.5-2.8 2.5-4.6zm-10.2-1.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5.4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>',
    '  <span class="float-tip">' + str(lang, "WeChat", "微信", "WeChat") + " · " + CONTACT.wechat + "</span>",
    "</button>",
    '<div class="wechat-pop" data-wechat-pop hidden>',
    "  <strong>" + str(lang, "WeChat", "微信", "WeChat") + "</strong>",
    '  <span class="mono">' + CONTACT.wechat + "</span>",
    '  <button class="btn btn--accent btn--sm" type="button" data-copy="' + CONTACT.wechat + '">' + str(lang, "Copy ID", "复制微信号", "IDをコピー") + "</button>",
    "</div>",
  ].join("\n");
}

export function scripts() {
  return ['<script src="../js/main.js" defer></script>', "</body>", "</html>"].join("\n");
}
