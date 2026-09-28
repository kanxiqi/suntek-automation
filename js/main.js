/* PLTBR Precision Motion — shared behaviour (trilingual)
   Modules: header, nav drawer + mega dropdowns, language switcher,
   site search, catalogue filter, FAQ, reveal-on-scroll, counters,
   form validation + download gate, copy / wechat / back-to-top. */
(function () {
  "use strict";

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  /* ---------------- language ---------------- */
  var lang = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
  if (lang.indexOf("zh") === 0) lang = "zh";
  else if (lang.indexOf("ja") === 0) lang = "ja";
  else lang = "en";

  var I18N = {
    en: {
      popular: "Popular models", matches: "matches", match: "match", for_: "for",
      noMatch: "No model matched that search. Try a frame size (36, 42, 57, 86), a series (PG, PL, PE, NEMA) or send the drawing to our engineers.",
      open: "Open", shown: "models shown", modelShown: "model shown",
      formError: "Please check the highlighted fields — an e-mail address and the required boxes are needed for us to reply.",
      formOk: "Thanks — your request is ready. Your e-mail app should open; if it does not, write to",
      copied: "Copied"
    },
    zh: {
      popular: "热门型号", matches: "个匹配", match: "个匹配", for_: "，关键词",
      noMatch: "没有匹配的型号。可尝试机座尺寸（36、42、57、86）、系列（PG、PL、PE、NEMA），或将图纸发给我们的工程师。",
      open: "打开", shown: "个型号", modelShown: "个型号",
      formError: "请检查标红的字段——我们需要邮箱地址和必填项才能回复您。",
      formOk: "感谢——您的询价已就绪。系统将打开您的邮件程序；若未打开，请写信至",
      copied: "已复制"
    },
    ja: {
      popular: "人気モデル", matches: "件", match: "件", for_: "「",
      noMatch: "条件に合うモデルがありません。フレームサイズ（36、42、57、86）やシリーズ（PG、PL、PE、NEMA）をお試しいただくか、図面をエンジニアにお送りください。",
      open: "開く", shown: "モデル表示中", modelShown: "モデル表示中",
      formError: "ハイライトされた項目をご確認ください——返信にはメールアドレスと必須項目が必要です。",
      formOk: "ありがとうございます——リクエストを受け付けました。メールアプリが開きます。開かない場合は下記へお送りください：",
      copied: "コピーしました"
    },
    ko: {
      popular: "인기 모델", matches: "건 일치", match: "건 일치", for_: "검색어",
      noMatch: "조건에 맞는 모델이 없습니다. 프레임 크기(36, 42, 57, 86) 또는 시리즈(PG, PL, PE, NEMA)로 검색하거나, 도면을 엔지니어에게 보내주세요.",
      open: "열기", shown: "개 모델 표시", modelShown: "개 모델 표시",
      formError: "강조된 항목을 확인해 주세요. 답변을 위해서는 이메일 주소와 필수 항목이 필요합니다.",
      formOk: "감사합니다. 요청이 준비되었습니다. 이메일 앱이 열립니다. 열리지 않으면 아래 주소로 보내주세요:",
      copied: "복사됨"
    },
    de: {
      popular: "Beliebte Modelle", matches: "Treffer", match: "Treffer", for_: "für",
      noMatch: "Kein Modell passt zu dieser Suche. Versuchen Sie eine Baugröße (36, 42, 57, 86) oder eine Serie (PG, PL, PE, NEMA) oder senden Sie die Zeichnung an unsere Ingenieure.",
      open: "Öffnen", shown: "Modelle angezeigt", modelShown: "Modell angezeigt",
      formError: "Bitte prüfen Sie die markierten Felder — für eine Antwort benötigen wir eine E-Mail-Adresse und die Pflichtfelder.",
      formOk: "Danke — Ihre Anfrage ist fertig. Ihr E-Mail-Programm sollte sich öffnen; falls nicht, schreiben Sie an",
      copied: "Kopiert"
    }
  }[lang] || I18N.en;

  var PH = "../img/placeholders/";
  var P = function (en, zh, ja) { return { en: en, zh: zh, ja: ja }; };

  /* ---------------- product index (header search) ---------------- */
  var PRODUCTS = [
    { name: P("PG28 Planetary Gearbox", "PG28 行星减速机", "PG28 プラネタリーギヤボックス"), series: P("PG standard", "PG 标准", "PG標準"), url: "products.html#pg28", family: "planetary", frame: "28 mm", torque: "3 N·m" },
    { name: P("PG36 Planetary Gearbox", "PG36 行星减速机", "PG36 プラネタリーギヤボックス"), series: P("PG standard", "PG 标准", "PG標準"), url: "products.html#pg36", family: "planetary", frame: "36 mm", torque: "8 N·m" },
    { name: P("PG42 Planetary Gearbox", "PG42 行星减速机", "PG42 プラネタリーギヤボックス"), series: P("PG standard", "PG 标准", "PG標準"), url: "pg42-planetary-gearbox.html", family: "planetary", frame: "42 mm", torque: "30 N·m" },
    { name: P("PG52 Planetary Gearbox", "PG52 行星减速机", "PG52 プラネタリーギヤボックス"), series: P("PG standard", "PG 标准", "PG標準"), url: "products.html#pg52", family: "planetary", frame: "52 mm", torque: "60 N·m" },
    { name: P("PG62 Planetary Gearbox", "PG62 行星减速机", "PG62 プラネタリーギヤボックス"), series: P("PG standard", "PG 标准", "PG標準"), url: "products.html#pg62", family: "planetary", frame: "62 mm", torque: "160 N·m" },
    { name: P("PL Low-Backlash Gearbox", "PL 低背隙减速机", "PL 低バックラッシギヤ"), series: P("PL precision", "PL 精密级", "PL精密"), url: "products.html#pl", family: "planetary", frame: "60–120 mm", torque: "320 N·m" },
    { name: P("PE Economy Gearbox", "PE 经济型减速机", "PE 経済型ギヤ"), series: P("PE economy", "PE 经济型", "PE経済型"), url: "products.html#pe", family: "planetary", frame: "42–90 mm", torque: "90 N·m" },
    { name: P("NEMA 8 Stepper Motor", "NEMA 8 步进电机", "NEMA 8 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "products.html#nema-8", family: "stepper", frame: "20 mm", torque: "0.04 N·m" },
    { name: P("NEMA 11 Stepper Motor", "NEMA 11 步进电机", "NEMA 11 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "products.html#nema-11", family: "stepper", frame: "28 mm", torque: "0.12 N·m" },
    { name: P("NEMA 14 Stepper Motor", "NEMA 14 步进电机", "NEMA 14 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "products.html#nema-14", family: "stepper", frame: "35 mm", torque: "0.28 N·m" },
    { name: P("NEMA 17 Stepper Motor", "NEMA 17 步进电机", "NEMA 17 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "products.html#nema-17", family: "stepper", frame: "42 mm", torque: "0.65 N·m" },
    { name: P("NEMA 23 Stepper Motor", "NEMA 23 步进电机", "NEMA 23 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "nema-23-stepper-motor.html", family: "stepper", frame: "57 mm", torque: "3.0 N·m" },
    { name: P("NEMA 34 Stepper Motor", "NEMA 34 步进电机", "NEMA 34 ステッピングモーター"), series: P("NEMA frame", "NEMA 机座", "NEMAフレーム"), url: "products.html#nema-34", family: "stepper", frame: "86 mm", torque: "12 N·m" },
    { name: P("Stepper + Gearbox Set", "步进电机+减速机套装", "ステッピング＋ギヤセット"), series: P("Matched sets", "匹配套装", "マッチングセット"), url: "products.html#sets", family: "sets", frame: "42–86 mm", torque: "12 N·m" },
    { name: P("Stepper Drivers & Controllers", "步进驱动器与控制器", "ステッピングドライバ"), series: P("Electronics", "电子驱动", "電子部品"), url: "products.html#drivers", family: "drivers", frame: "—", torque: "1/128" }
  ];

  function searchIndex(query, family) {
    var q = (query || "").trim().toLowerCase();
    var parts = q ? q.split(/\s+/) : [];
    return PRODUCTS.filter(function (p) {
      if (family && family !== "all" && p.family !== family) return false;
      if (!parts.length) return true;
      var hay = (p.name.en + " " + p.series.en + " " + (p.name[lang] || "") + " " + p.family + " " + p.frame + " " + p.torque).toLowerCase();
      return parts.every(function (part) { return hay.indexOf(part) !== -1; });
    });
  }

  /* ---------------- header scroll + back-to-top ---------------- */
  var header = $(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    var toTop = $(".to-top");
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 520);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- navigation ---------------- */
  (function nav() {
    var toggle = $(".nav-toggle");
    var navEl = $("#mainNav") || $(".main-nav");
    var backdrop = $(".nav-backdrop");
    if (!navEl) return;
    var items = $$(".nav-item", navEl);
    function closeAllMenus(except) {
      items.forEach(function (item) {
        if (item === except) return;
        item.classList.remove("is-open");
        var link = $(".nav-link", item);
        if (link) link.setAttribute("aria-expanded", "false");
      });
    }
    function setDrawer(open) {
      navEl.classList.toggle("is-open", open);
      if (backdrop) backdrop.classList.toggle("is-open", open);
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-locked", open && window.innerWidth <= 980);
      if (!open) closeAllMenus();
    }
    if (toggle) toggle.addEventListener("click", function () { setDrawer(!navEl.classList.contains("is-open")); });
    if (backdrop) backdrop.addEventListener("click", function () { setDrawer(false); });
    items.forEach(function (item) {
      var link = $(".nav-link", item);
      if (!link || link.tagName !== "BUTTON") return;
      link.addEventListener("click", function (ev) {
        ev.preventDefault();
        var open = !item.classList.contains("is-open");
        closeAllMenus(item);
        item.classList.toggle("is-open", open);
        link.setAttribute("aria-expanded", open ? "true" : "false");
      });
      item.addEventListener("focusout", function (ev) {
        if (!item.contains(ev.relatedTarget)) {
          item.classList.remove("is-open");
          link.setAttribute("aria-expanded", "false");
        }
      });
    });
    document.addEventListener("click", function (ev) {
      if (!navEl.contains(ev.target) && (!toggle || !toggle.contains(ev.target)) && (!backdrop || !backdrop.contains(ev.target))) closeAllMenus();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      closeAllMenus();
      var panel = $(".search-panel:not([hidden])");
      if (panel) { panel.hidden = true; var b = $("[data-search-toggle]"); if (b) b.setAttribute("aria-expanded", "false"); }
      var lm = $(".lang-menu");
      if (lm) { lm.hidden = true; var lc = $(".lang-current"); if (lc) lc.setAttribute("aria-expanded", "false"); }
      if (navEl.classList.contains("is-open")) setDrawer(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980 && navEl.classList.contains("is-open")) setDrawer(false);
    });
    setDrawer(false);
  })();

  /* ---------------- language switcher ---------------- */
  (function langSwitch() {
    var root = $("[data-lang-switch]");
    if (!root) return;
    var btn = $(".lang-current", root);
    var menu = $(".lang-menu", root);
    if (!btn || !menu) return;
    btn.addEventListener("click", function (ev) {
      ev.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (ev) {
      if (!root.contains(ev.target)) { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    });
  })();

  /* ---------------- site search ---------------- */
  (function siteSearch() {
    var panel = $(".search-panel");
    if (!panel) return;
    var toggle = $("[data-search-toggle]");
    var input = $("[data-search-input]", panel);
    var results = $("[data-search-results]", panel);
    var count = $("[data-search-count]", panel);
    var family = "all";
    if (toggle) {
      toggle.addEventListener("click", function () {
        var willOpen = panel.hidden;
        panel.hidden = !willOpen;
        toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen && input) { input.focus(); render(); }
      });
    }
    $$("[data-search-family]", panel).forEach(function (chip) {
      chip.addEventListener("click", function () {
        family = chip.getAttribute("data-search-family") || "all";
        $$("[data-search-family]", panel).forEach(function (o) { o.setAttribute("aria-pressed", o === chip ? "true" : "false"); });
        render();
      });
    });
    function render() {
      if (!results) return;
      var q = input ? input.value : "";
      var list = searchIndex(q, family);
      var shown = list.slice(0, 7);
      if (!q.trim()) shown = list.slice(0, 5);
      if (count) count.textContent = q.trim() ? list.length + I18N.match + " " + I18N.for_ + q.trim() + '"' : I18N.popular;
      results.innerHTML = "";
      if (!shown.length) {
        var empty = document.createElement("p");
        empty.className = "search-empty";
        empty.textContent = I18N.noMatch;
        results.appendChild(empty);
        return;
      }
      shown.forEach(function (p) {
        var a = document.createElement("a");
        a.className = "search-result";
        a.href = p.url;
        a.innerHTML = '<img src="' + PH + 'product-square.webp" alt="" width="56" height="42" loading="lazy" decoding="async">' +
          "<span><strong>" + (p.name[lang] || p.name.en) + "</strong><small>" + (p.series[lang] || p.series.en) + " &middot; " + p.frame + " &middot; " + p.torque + "</small></span>" +
          '<span class="tag tag--outline">' + I18N.open + "</span>";
        results.appendChild(a);
      });
    }
    if (input) input.addEventListener("input", render);
    render();
  })();

  /* ---------------- catalogue filter ---------------- */
  (function catalog() {
    var root = $("[data-catalog]");
    if (!root) return;
    var grid = $("[data-catalog-grid]", root);
    var cards = $$("[data-product-card]", root);
    var chips = $$("[data-filter-family]", root);
    var input = $("[data-catalog-input]", root);
    var sort = $("[data-catalog-sort]", root);
    var count = $("[data-catalog-count]", root);
    var empty = $("[data-catalog-empty]", root);
    var family = "all";
    var params = new URLSearchParams(window.location.search);
    var q = params.get("q") || "";
    if (params.get("family")) family = params.get("family");
    if (input && q) input.value = q;
    if (params.get("sort") && sort) sort.value = params.get("sort");
    chips.forEach(function (chip) {
      chip.setAttribute("aria-pressed", (chip.getAttribute("data-filter-family") || "all") === family ? "true" : "false");
      chip.addEventListener("click", function () {
        family = chip.getAttribute("data-filter-family") || "all";
        chips.forEach(function (o) { o.setAttribute("aria-pressed", o === chip ? "true" : "false"); });
        apply();
      });
    });
    function num(el, attr) { return parseFloat(el.getAttribute(attr) || "0") || 0; }
    function apply() {
      var term = (input ? input.value : "").trim().toLowerCase();
      var parts = term ? term.split(/\s+/) : [];
      var visible = 0;
      cards.forEach(function (card) {
        var hay = ((card.getAttribute("data-keywords") || "") + " " + (card.textContent || "")).toLowerCase();
        var okFamily = family === "all" || card.getAttribute("data-family") === family;
        var okTerm = parts.every(function (p) { return hay.indexOf(p) !== -1; });
        var show = okFamily && okTerm;
        card.hidden = !show;
        if (show) visible++;
      });
      if (count) count.textContent = visible + " " + (visible === 1 ? I18N.modelShown : I18N.shown);
      if (empty) empty.hidden = visible !== 0;
      if (sort && grid) {
        var mode = sort.value;
        var ordered = cards.slice().sort(function (a, b) {
          if (mode === "torque-desc") return num(b, "data-torque") - num(a, "data-torque");
          if (mode === "frame-asc") return num(a, "data-frame") - num(b, "data-frame");
          if (mode === "frame-desc") return num(b, "data-frame") - num(a, "data-frame");
          return (a.getAttribute("data-name") || "").localeCompare(b.getAttribute("data-name") || "");
        });
        ordered.forEach(function (card) { grid.appendChild(card); });
      }
    }
    if (input) input.addEventListener("input", apply);
    if (sort) sort.addEventListener("change", apply);
    var clear = $("[data-catalog-clear]", root);
    if (clear) clear.addEventListener("click", function () {
      if (input) input.value = "";
      family = "all";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", c.getAttribute("data-filter-family") === "all" ? "true" : "false"); });
      apply();
    });
    apply();
  })();

  /* ---------------- FAQ accordion ---------------- */
  (function faq() {
    var items = $$(".faq-item");
    if (!items.length) return;
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) { if (other !== item) other.open = false; });
      });
    });
  })();

  /* ---------------- tabs ---------------- */
  (function tabs() {
    $$("[data-tabs]").forEach(function (root) {
      var buttons = $$("[role='tab']", root);
      var panels = $$("[role='tabpanel']", root);
      if (!buttons.length) return;
      function select(index) {
        buttons.forEach(function (btn, i) {
          var on = i === index;
          btn.setAttribute("aria-selected", on ? "true" : "false");
          btn.tabIndex = on ? 0 : -1;
        });
        panels.forEach(function (panel, i) { panel.hidden = i !== index; });
      }
      buttons.forEach(function (btn, i) {
        btn.addEventListener("click", function () { select(i); });
        btn.addEventListener("keydown", function (ev) {
          var next = ev.key === "ArrowRight" ? i + 1 : ev.key === "ArrowLeft" ? i - 1 : -1;
          if (next < 0) return;
          ev.preventDefault();
          var target = (next + buttons.length) % buttons.length;
          buttons[target].focus();
          select(target);
        });
      });
      var initial = buttons.findIndex(function (b) { return b.getAttribute("aria-selected") === "true"; });
      select(initial < 0 ? 0 : initial);
    });
  })();

  /* ---------------- reveal on scroll ---------------- */
  (function reveal() {
    var els = $$(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---------------- animated counters ---------------- */
  (function counters() {
    var els = $$("[data-count]");
    if (!els.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion) { el.textContent = Math.round(target) + suffix; return; }
      var started = null, duration = 1200;
      function step(ts) {
        if (started === null) started = ts;
        var progress = Math.min((ts - started) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (!entry.isIntersecting) return; run(entry.target); io.unobserve(entry.target); });
      }, { threshold: 0.4 });
      els.forEach(function (el) { io.observe(el); });
    } else els.forEach(run);
  })();

  /* ---------------- inquiry forms + download gate ---------------- */
  (function inquiry() {
    $$("form[data-inquiry]").forEach(function (form) {
      var status = $(".form-status", form);
      function validateField(field) {
        var value = (field.value || "").trim();
        var valid = true;
        if (!value) valid = false;
        else if (field.type === "email") valid = EMAIL_RE.test(value);
        else if (field.hasAttribute("data-min") && value.length < parseInt(field.getAttribute("data-min"), 10)) valid = false;
        field.classList.toggle("invalid", !valid);
        field.setAttribute("aria-invalid", valid ? "false" : "true");
        return valid;
      }
      $$("input, select, textarea", form).forEach(function (field) {
        field.addEventListener("input", function () { if (field.classList.contains("invalid")) validateField(field); });
      });
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var firstBad = null, ok = true;
        $$("[required]", form).forEach(function (field) { if (!validateField(field)) { ok = false; if (!firstBad) firstBad = field; } });
        if (!ok) {
          if (status) { status.className = "form-status err"; status.textContent = I18N.formError; }
          if (firstBad) firstBad.focus();
          return;
        }
        var data = new FormData(form), lines = [];
        data.forEach(function (value, key) { if (String(value).trim()) lines.push(key + ": " + value); });
        var to = form.getAttribute("data-mailto") || "yong.zhao@live.cn";
        var subject = form.getAttribute("data-subject") || "RFQ from website";
        if (status) { status.className = "form-status ok"; status.textContent = I18N.formOk + " " + to + "."; }
        window.location.href = "mailto:" + to + "?" + new URLSearchParams({ subject: subject, body: lines.join("\n") }).toString();
      });
    });
    $$("[data-gate]").forEach(function (gate) {
      var input = $("input[type='email']", gate);
      var button = $("button", gate);
      var list = $(gate.getAttribute("data-gate"));
      if (!input || !button) return;
      button.addEventListener("click", function () {
        if (!EMAIL_RE.test((input.value || "").trim())) { input.classList.add("invalid"); input.focus(); return; }
        input.classList.remove("invalid");
        if (list) list.hidden = false;
        gate.hidden = true;
      });
    });
  })();

  /* ---------------- utilities ---------------- */
  (function utilities() {
    var toTop = $("[data-to-top]");
    if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

    var wechatBtn = $("[data-wechat]");
    var wechatPop = $("[data-wechat-pop]");
    if (wechatBtn && wechatPop) {
      wechatBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        wechatPop.hidden = !wechatPop.hidden;
        wechatBtn.setAttribute("aria-expanded", wechatPop.hidden ? "false" : "true");
      });
      document.addEventListener("click", function (ev) { if (!wechatPop.contains(ev.target) && ev.target !== wechatBtn && !wechatBtn.contains(ev.target)) wechatPop.hidden = true; });
    }

    $$("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy");
        var original = btn.textContent;
        function done() { btn.textContent = I18N.copied + " ✓"; window.setTimeout(function () { btn.textContent = original; }, 1600); }
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
        else done();
      });
    });
    $$("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
    $$("a[target='_blank']").forEach(function (a) {
      var rel = a.getAttribute("rel") || "";
      if (rel.indexOf("noopener") === -1) a.setAttribute("rel", (rel + " noopener noreferrer").trim());
    });
    $$("a[href^='#']").forEach(function (a) {
      a.addEventListener("click", function () {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var target = document.getElementById(id.slice(1));
        if (!target) return;
        var navEl = $("#mainNav") || $(".main-nav");
        if (navEl && navEl.classList.contains("is-open")) navEl.classList.remove("is-open");
      });
    });
  })();

  /* ---------------- banner carousel ---------------- */
  (function bannerCarousel() {
    var root = $("[data-banner]");
    if (!root) return;
    var slides = $$(".banner-slide", root);
    var dots = $$("[data-banner-dot]", root);
    if (slides.length < 2) return;
    var idx = 0, timer = null;
    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
    }
    function play() { if (!timer) timer = setInterval(function () { go(idx + 1); }, 5000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    dots.forEach(function (d, i) { d.addEventListener("click", function () { stop(); go(i); play(); }); });
    var prev = $("[data-banner-prev]", root);
    var next = $("[data-banner-next]", root);
    if (prev) prev.addEventListener("click", function () { stop(); go(idx - 1); play(); });
    if (next) next.addEventListener("click", function () { stop(); go(idx + 1); play(); });
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", play);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (e) { e[0].isIntersecting ? play() : stop(); }, { threshold: 0.15 });
      io.observe(root);
    }
    play();
  })();

  onScroll();
})();
