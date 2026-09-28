/* Planetary gearbox series overview — trilingual body */
import { str, augment } from "../i18n.mjs";
import { gearIcon } from "../drawings.mjs";
import { GEAR_SERIES } from "../stepper-cat.mjs";

const rightAngleIcon = `<svg viewBox="0 0 220 180" role="img" aria-label="Right-angle planetary gearbox">
  <g fill="none" stroke="#28658f" stroke-width="3">
    <rect x="58" y="56" width="104" height="82"/>
    <circle cx="110" cy="97" r="24"/>
    <circle cx="110" cy="97" r="7" fill="#176da6"/>
    <circle cx="110" cy="73" r="5" fill="#176da6"/>
    <circle cx="131" cy="111" r="5" fill="#176da6"/>
    <circle cx="89" cy="111" r="5" fill="#176da6"/>
    <path d="M110 56V30h30v10"/>
    <path d="M162 97h34"/>
    <path d="M196 91v12"/>
  </g>
</svg>`;

export function page(lang) {
  augment(GEAR_SERIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Planetary Gearboxes — 15 Series | PLTBR", "行星减速机 — 15 个系列 | 普兰特", "プラネタリーギヤボックス — 15シリーズ | PLTBR");
  const desc = t("15 planetary gearbox series: AB, ABR, AD, ADR, AF, AFR, AE, AER, AG, AGR, VL, VLR, PB, PE, PR.", "15 个行星减速机系列：AB、ABR、AD、ADR、AF、AFR、AE、AER、AG、AGR、VL、VLR、PB、PE、PR。", "15シリーズのプラネタリーギヤボックス：AB、ABR、AD、ADR、AF、AFR、AE、AER、AG、AGR、VL、VLR、PB、PE、PR。");

  const tiles = GEAR_SERIES.map((s) => `
    <a class="card card--media card-link reveal" href="${s.file}">
      ${s.img ? '<div class="media-frame media-frame--4x3"><img src="' + s.img + '" alt="' + s.code + '" loading="lazy" decoding="async"></div>' : '<div class="media-frame media-frame--4x3 media-frame--drawing">' + (s.ra ? rightAngleIcon : gearIcon) + '</div>'}
      <div class="card-body">
        <h3 class="h4">${s.code}</h3>
        <p class="small muted">${s[lang]}</p>
      </div>
    </a>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス")}</span></nav>
    <h1 class="h1">${t("Planetary gearboxes, 15 series.", "行星减速机，15 个系列。", "プラネタリーギヤボックス、15シリーズ。")}</h1>
    <p class="lede">${t("15 planetary gearbox series from AB to PR — straight and right-angle, economy and precision, for every axis.", "从 AB 到 PR 共 15 个行星减速机系列——直齿与直角、经济型与精密型，覆盖各类轴应用。", "ABからPRまで15シリーズのプラネタリーギヤボックス——平行軸・直角、経済型・精密型、あらゆる軸用途に対応。")}</p>
    <div class="btn-row" style="margin-top:22px;">
      <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
      <a class="btn btn--ghost" href="resources.html">${t("Download CAD & PDF", "下载 CAD 与 PDF", "CAD・PDFをダウンロード")}</a>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Product categories", "产品系列", "製品カテゴリ")}</span>
      <h2 class="h2">${t("15 series.", "15 个系列。", "15シリーズ。")}</h2>
    </div>
    <div class="auto-grid">${tiles}</div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Need a custom ratio or shaft?", "需要非标速比或轴？", "非標準の減速比・シャフトが必要ですか？")}</h2>
      <p>${t("We machine output shafts, hollow bores and custom mounting flanges in-house. Send your drawing — feasibility confirmed within 48 hours.", "我们在厂内加工输出轴、空心轴与定制法兰。发送图纸——48 小时内确认可行性。", "出力シャフト・中空軸・カスタムフランジを自社工場で加工します。図面をお送りください——48時間以内に可否をご回答します。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a></div>
  </div>
</section>
`;

  return { file: "planetary-gearbox.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("planetary gearbox, right angle gearbox, precision gearbox, economy gearbox", "行星减速机, 直角减速机, 精密减速机, 经济型减速机", "プラネタリーギヤ, 直角ギヤ, 精密ギヤ, 経済型ギヤ"), body };
}
