/* Products catalog (products) — trilingual body with live filters */
import { str, augment } from "../i18n.mjs";
import { gearIcon } from "../drawings.mjs";
import { GEAR_SERIES, CATEGORIES } from "../stepper-cat.mjs";

export function page(lang) {
  augment(GEAR_SERIES);
  augment(CATEGORIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Products — Planetary Gearboxes & Stepper Motors | PLTBR", "产品中心 — 行星减速机与步进电机 | 普兰特", "製品 — プラネタリーギヤ＆ステッピングモーター | PLTBR");
  const desc = t("Browse 15 planetary gearbox series and 11 stepper motor families. Filter by product family.", "浏览 15 个行星减速机系列与 11 个步进电机分类。按产品系列筛选。", "15シリーズのプラネタリーギヤと11ファミリーのステッピングモーター。製品系列で絞り込み。");

  const gearCards = GEAR_SERIES.map((s) => `
    <article class="product-card reveal" data-product-card data-family="planetary" data-name="${s.code}" data-keywords="${s.code} ${s.en} ${s.zh} ${s.ja}">
      ${s.img ? '<div class="media-frame media-frame--4x3"><img src="' + s.img + '" alt="' + s.code + '" loading="lazy" decoding="async"></div>' : '<div class="media-frame media-frame--4x3 media-frame--drawing">' + gearIcon + '</div>'}
      <div class="pc-body">
        <span class="pc-series">${s[lang]}</span>
        <h3><a href="${s.file}">${s.code}</a></h3>
        <div class="pc-footer"><a class="text-link" href="${s.file}">${t("Details", "详情", "詳細")} <span aria-hidden="true">→</span></a></div>
      </div>
    </article>`).join("\n");

  const motorCards = CATEGORIES.map((c) => `
    <article class="product-card reveal" data-product-card data-family="stepper" data-name="${c.en}" data-keywords="${c.en} ${c.zh} ${c.ja} ${c.d.en} ${c.d.zh} ${c.d.ja}">
      <div class="media-frame media-frame--4x3"><img src="${c.thumb}" alt="${c[lang]}" loading="lazy" decoding="async"></div>
      <div class="pc-body">
        <span class="pc-series">${c.d[lang]}</span>
        <h3><a href="${c.file}">${c[lang]}</a></h3>
        <div class="pc-footer"><a class="text-link" href="${c.file}">${t("Details", "详情", "詳細")} <span aria-hidden="true">→</span></a></div>
      </div>
    </article>`).join("\n");

  const cards = gearCards + "\n" + motorCards;

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Products", "产品中心", "製品")}</span></nav>
    <h1 class="h1">${t("Planetary gearboxes & stepper motors.", "行星减速机与步进电机。", "プラネタリーギヤ＆ステッピングモーター。")}</h1>
    <p class="lede">${t("15 planetary gearbox series and 11 stepper motor families. Filter by product family to find the right series.", "15 个行星减速机系列与 11 个步进电机分类，按产品系列筛选合适的系列。", "15シリーズのプラネタリーギヤと11ファミリーのステッピングモーター。製品系列で絞り込んでください。")}</p>
  </div>
</div>

<section class="section section--tight" data-catalog>
  <div class="container">
    <div class="catalog-bar">
      <div class="filter-group" role="group" aria-label="${t("Filter by product family", "按产品系列筛选", "製品系列で絞り込み")}">
        <span class="filter-label">${t("Family", "系列", "系列")}</span>
        <button class="chip" type="button" data-filter-family="all" aria-pressed="true">${t("All", "全部", "すべて")}</button>
        <button class="chip" type="button" data-filter-family="planetary" aria-pressed="false">${t("Gearboxes", "减速机", "ギヤボックス")}</button>
        <button class="chip" type="button" data-filter-family="stepper" aria-pressed="false">${t("Motors", "电机", "モーター")}</button>
      </div>
      <div class="filter-group">
        <input type="search" data-catalog-input placeholder="${t("Search series code or keyword…", "搜索系列代码或关键词…", "シリーズコードまたはキーワードを検索…")}" aria-label="${t("Search catalog", "搜索产品", "製品を検索")}">
        <button class="chip" type="button" data-catalog-clear>${t("Reset", "重置", "リセット")}</button>
      </div>
    </div>
    <p class="catalog-count" data-catalog-count style="margin-top:14px;"></p>
    <div class="catalog-grid" data-catalog-grid>${cards}</div>
    <p class="catalog-empty" data-catalog-empty hidden>${t("No model matched your filter. Send your drawing to our engineers instead.", "没有匹配的型号。可将图纸发给我们的工程师。", "条件に合うモデルがありません。図面をエンジニアにお送りください。")}</p>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="split">
      <div>
        <span class="crossline">${t("Custom configuration", "定制配置", "カスタム構成")}</span>
        <h2 class="h2">${t("Don't see your exact model?", "没找到完全匹配的型号？", "お探しのモデルが見つかりませんか？")}</h2>
        <p class="muted">${t("We machine shafts, flanges and hollow bores in-house and wind motors to your voltage. Send your drawing — feasibility answer within 48 hours.", "我们在厂内加工轴、法兰与空心轴，并按你的电压绕线。发送图纸——48 小时内答复可行性。", "シャフト・フランジ・中空軸を自社で加工し、ご指定の電圧で巻線します。図面をお送りいただければ48時間以内に可否をご回答します。")}</p>
      </div>
      <div class="btn-row" style="justify-content:flex-end;">
        <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
        <a class="btn btn--ghost" href="resources.html">${t("Download CAD", "下载 CAD", "CADをダウンロード")}</a>
      </div>
    </div>
  </div>
</section>
`;

  return { file: "products.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("planetary gearbox series, stepper motor families, right angle gearbox, precision gearbox", "行星减速机系列, 步进电机分类, 直角减速机, 精密减速机", "プラネタリーギヤ, ステッピングモーター, 直角ギヤ, 精密ギヤ"), body };
}
