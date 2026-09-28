/* News / latest updates — trilingual body */
import { str } from "../i18n.mjs";

const NEWS = [
  ["2026-09-20", "PLTBR exhibits at ITES Shenzhen 2026", "普兰特亮相 2026 深圳 ITES 工业展", "PLTBRがITES深圳2026に出展"],
  ["2026-09-05", "PG42 precision gearboxes shipped to an AGV customer", "PG42 精密级减速机批量交付 AGV 客户", "PG42精密ギヤをAGV顧客へ納入"],
  ["2026-08-18", "New NEMA 34 closed-loop stepper line launched", "NEMA 34 闭环步进电机新产线投产", "NEMA 34クローズドループステッパー新ライン稼働"],
  ["2026-08-01", "ISO 9001:2015 surveillance audit passed", "通过 ISO 9001:2015 年度监督审核", "ISO 9001:2015サーベイランス審査に合格"],
  ["2026-07-12", "Website relaunched in five languages", "官网全新改版，五语上线", "ウェブサイトを5言語でリニューアル"],
];

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("News — PLTBR Precision Motion", "最新动态 — 普兰特精密传动", "お知らせ — PLTBRプレシジョンモーション");
  const desc = t("Company news and updates from PLTBR Precision Motion.", "普兰特精密传动的公司新闻与最新动态。", "PLTBRプレシジョンモーションの会社ニュース・最新情報。");

  const items = NEWS.map((n) => `<div><span>${n[0]}</span><strong>${t(n[1], n[2], n[3])}</strong></div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("News", "最新动态", "お知らせ")}</span></nav>
    <h1 class="h1">${t("Latest news", "最新动态", "最新情報")}</h1>
    <p class="lede">${t("Company news, exhibitions and product updates from PLTBR Precision Motion.", "普兰特精密传动的公司新闻、展会与产品动态。", "PLTBRプレシジョンモーションの会社ニュース・展示会・製品情報。")}</p>
  </div>
</div>

<section class="section">
  <div class="container" style="max-width:880px;">
    <div class="kv-list">${items}</div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Follow our updates or get in touch.", "关注我们的动态，或直接联系我们。", "最新情報をフォロー、またはお問い合わせください。")}</h2>
      <p>${t("For product news, sample requests or a quotation, our team replies within one business day.", "产品动态、打样或报价需求，我们团队一个工作日内回复。", "製品情報・サンプル・お見積もりは、チームが1営業日以内にご返信します。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Contact Us", "联系我们", "お問い合わせ")}</a></div>
  </div>
</section>
`;

  return { file: "news.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("PLTBR news, gearbox factory news, stepper motor news", "普兰特新闻, 减速机工厂新闻, 步进电机新闻", "PLTBRニュース, ギヤ工場, ステッピングモーター"), body };
}
