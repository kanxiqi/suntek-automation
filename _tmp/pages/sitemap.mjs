/* Sitemap (human-readable) — trilingual body */
import { str, augment } from "../i18n.mjs";
import { CATEGORIES } from "../stepper-cat.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  augment(CATEGORIES);
  const stepperItems = CATEGORIES.map((c) => [c.file, c[lang]]);
  const title = t("Sitemap | PLTBR Precision Motion", "站点地图 | 普兰特精密传动", "サイトマップ | PLTBRプレシジョンモーション");
  const desc = t("Sitemap for stepgearbox.com — all pages across the PLTBR Precision Motion website.", "stepgearbox.com 站点地图——普兰特精密传动网站的全部页面。", "stepgearbox.comのサイトマップ——PLTBRプレシジョンモーションの全ページ。");

  const groups = [
    { h: t("Products", "产品", "製品"), items: [
      ["index.html", t("Home", "首页", "ホーム")],
      ["products.html", t("All Products", "产品中心", "全製品")],
      ["planetary-gearbox.html", t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス")],
      ["stepper-motor.html", t("Stepper Motors", "步进电机", "ステッピングモーター")],
      ...stepperItems,
      ["pg42-planetary-gearbox.html", "PG42"],
      ["nema-23-stepper-motor.html", "NEMA 23"],
    ]},
    { h: t("Company", "公司", "企業情報"), items: [
      ["about.html", t("About Us", "关于我们", "会社概要")],
      ["quality.html", t("Quality & Certification", "质量认证", "品質・認証")],
      ["industries.html", t("Industries", "应用行业", "業界・用途")],
      ["news.html", t("News", "最新动态", "お知らせ")],
      ["contact.html", t("Contact", "联系我们", "お問い合わせ")],
    ]},
    { h: t("Support", "支持", "サポート"), items: [
      ["resources.html", t("Resources", "资源下载", "資料ダウンロード")],
      ["blog.html", t("Articles", "技术文章", "技術記事")],
      ["software.html", t("Software & Tools", "软件及工具", "ソフトウェア・ツール")],
      ["customization.html", t("Customization", "客户定制", "カスタマイズ")],
    ]},
  ];

  const cols = groups.map((g) => `
    <div class="card">
      <div class="card-body">
        <h3 class="h4">${g.h}</h3>
        <ul class="mini-list" style="margin-top:10px;">
          ${g.items.map((it) => `<li><a href="${it[0]}">${it[1]}</a></li>`).join("\n")}
        </ul>
      </div>
    </div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Sitemap", "站点地图", "サイトマップ")}</span></nav>
    <h1 class="h1">${t("Sitemap", "站点地图", "サイトマップ")}</h1>
    <p class="lede">${t("Every page on the PLTBR Precision Motion website.", "普兰特精密传动网站的全部页面。", "PLTBRプレシジョンモーションの全ページ。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="grid-3">${cols}</div>
  </div>
</section>
`;

  return { file: "sitemap.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], body };
}
