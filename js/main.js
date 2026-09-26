/* Meridian Precision Motion — shared behaviour (v2) */
(function () {
  "use strict";

  /* ---- inject top bar (announcement + quick contact) ---- */
  if (!document.getElementById("topbar")) {
    var topbar = document.createElement("div");
    topbar.className = "topbar";
    topbar.id = "topbar";
    topbar.innerHTML =
      '<div class="container topbar-inner">' +
        '<span class="announce">ISO 9001 factory &middot; 48-hour samples &middot; OEM / ODM welcome</span>' +
        '<div class="topbar-right">' +
          '<a href="mailto:sales@meridian-motion.example"><span class="mono">sales@meridian-motion.example</span></a>' +
          '<span class="sep">|</span>' +
          '<a href="https://wa.me/860000000000" target="_blank" rel="noopener">WhatsApp</a>' +
          '<span class="sep">|</span>' +
          '<a href="resources.html">Downloads</a>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(topbar, document.body.firstChild);
  }

  /* ---- inject trade strip into footer ---- */
  if (!document.getElementById("trade-strip")) {
    var footerBottom = document.querySelector(".footer-bottom");
    if (footerBottom) {
      var trade = document.createElement("div");
      trade.className = "container";
      trade.innerHTML =
        '<div class="trade-strip" id="trade-strip">' +
          '<span class="t"><b>Payment</b>T/T &middot; L/C &middot; PayPal</span>' +
          '<span class="t"><b>Shipping</b>FOB &middot; CIF &middot; DDP &middot; EXW</span>' +
          '<span class="t"><b>MOQ</b>1 pc sample &middot; 100 pcs OEM</span>' +
          '<span class="t"><b>Lead time</b>Samples 48h &middot; Production 15&ndash;25 days</span>' +
          '<span class="t"><b>Warranty</b>2 years</span>' +
        '</div>';
      footerBottom.parentNode.insertBefore(trade, footerBottom);
    }
  }

  /* ---- mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- reveal on scroll ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- animated counters ---- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    var fmt = function (n, suffix, decimals) {
      if (decimals) n = n.toFixed(decimals);
      else n = Math.round(n).toLocaleString("en-US");
      return n + (suffix || "");
    };
    var runCounter = function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var dur = 1400;
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased, suffix, decimals);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!reduce && "IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { cio.observe(c); });
    } else {
      counters.forEach(function (c) { c.textContent = fmt(parseFloat(c.getAttribute("data-count")), c.getAttribute("data-suffix") || "", parseInt(c.getAttribute("data-decimals") || "0", 10)); });
    }
  }

  /* ---- inquiry / contact form ---- */
  var forms = document.querySelectorAll("form[data-inquiry]");
  forms.forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        if (!f.value.trim()) { f.classList.add("invalid"); ok = false; }
        else { f.classList.remove("invalid"); }
      });
      var email = form.querySelector('input[type="email"]');
      if (email && email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        email.classList.add("invalid"); ok = false;
      }
      if (status) {
        if (!ok) {
          status.className = "form-status err";
          status.textContent = "Please complete the required fields marked with an asterisk.";
        } else {
          status.className = "form-status ok";
          status.textContent = "Thank you — your inquiry has been received. Our sales team will reply within one business day.";
          form.reset();
        }
      }
    });
  });

  /* ---- resource download gate ---- */
  var gates = document.querySelectorAll("[data-gate]");
  gates.forEach(function (gate) {
    var input = gate.querySelector("input[type='email']");
    var btn = gate.querySelector("button");
    var list = document.querySelector(gate.getAttribute("data-gate"));
    btn.addEventListener("click", function () {
      if (!input.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) {
        input.classList.add("invalid"); return;
      }
      input.classList.remove("invalid");
      if (list) list.hidden = false;
      gate.hidden = true;
    });
  });
})();
