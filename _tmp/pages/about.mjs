/* About us — trilingual body */
import { str, BRAND, CONTACT, augment } from "../i18n.mjs";

const EQUIP = [
  { en: "CNC turning centres", zh: "数控车削中心", ja: "CNC旋盤" },
  { en: "Gear hobbing & grinding", zh: "齿轮滚齿与磨齿", ja: "ホブ切り・歯車研削" },
  { en: "CNC machining centres", zh: "加工中心", ja: "マシニングセンタ" },
  { en: "Automatic winding lines", zh: "自动绕线产线", ja: "自動巻線ライン" },
  { en: "Vacuum impregnation", zh: "真空浸漆", ja: "真空含浸" },
  { en: "Semi-auto assembly lines", zh: "半自动装配线", ja: "半自動組立ライン" },
];

const EXHIBITIONS = [
  ["Hannover Messe", "Hannover, Germany", "March"],
  ["SPS", "Nuremberg, Germany", "November"],
  ["Automate", "Chicago, USA", "May"],
  ["ITES Shenzhen", "Shenzhen, China", "March"],
];

export function page(lang) {
  augment(EQUIP);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("About Us — Gearbox & Stepper Motor Factory in China | PLTBR", "关于我们 — 中国减速机与步进电机工厂 | 普兰特", "会社概要 — 中国のギヤ＆ステッピングモーター工場 | PLTBR");
  const desc = t("Founded in 2009, PLTBR Precision Motion designs, machines, assembles and tests planetary gearboxes and stepper motors under one roof in Chongqing, China.", "普兰特精密传动成立于 2009 年，在中国重庆一站式完成行星减速机与步进电机的设计、加工、装配与检测。", "2009年設立のPLTBRプレシジョンモーションは、中国・重慶でプラネタリーギヤボックスとステッピングモーターの設計・加工・組立・検査を一貫して行います。");

  const equips = EQUIP.map((e) => `<li>${e[lang]}</li>`).join("\n");
  const shows = EXHIBITIONS.map((x) => `<div class="card"><div class="card-body"><h3 class="h4">${x[0]}</h3><p class="small muted">${x[1]} · ${x[2]}</p></div></div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("About Us", "关于我们", "会社概要")}</span></nav>
    <span class="crossline">${t("About us", "关于我们", "会社概要")}</span>
    <h1 class="h1">${t("A precision motion manufacturer, built for OEMs.", "面向 OEM 的精密传动制造商。", "OEMのために作られた精密モーションメーカー。")}</h1>
    <p class="lede">${t("Founded in 2009, we design, machine, assemble and test planetary gearboxes and stepper motors under one roof — so lead times stay short and quality stays consistent from sample to production.", "成立于 2009 年，我们在一厂之内完成行星减速机与步进电机的设计、加工、装配与检测——交期更短，质量从样机到量产保持一致。", "2009年設立。プラネタリーギヤボックスとステッピングモーターの設計・加工・組立・検査を一貫して行い、納期を短く、サンプルから量産まで品質を一定に保ちます。")}</p>
  </div>
</div>

<section class="section section--steel">
  <div class="container">
    <div class="stat-grid">
      <div class="stat"><strong>2009</strong><span>${t("Year founded", "成立年份", "設立年")}</span></div>
      <div class="stat"><strong>15,000 m²</strong><span>${t("Production area", "生产面积", "生産面積")}</span></div>
      <div class="stat"><strong>260+</strong><span>${t("Employees", "员工", "従業員")}</span></div>
      <div class="stat"><strong>100k+</strong><span>${t("Units per month", "月产量", "月産台数")}</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <div class="section-head"><span class="crossline">${t("Equipment", "设备", "設備")}</span><h2 class="h2">${t("Machined in-house.", "厂内加工。", "自社工場で加工。")}</h2></div>
        <p class="muted">${t("Keeping gear cutting, shaft machining and winding in-house means we control tolerances directly and can turn custom parts quickly.", "齿轮加工、轴加工与绕线均在厂内完成，意味着我们直接掌控公差，并能快速交付定制件。", "歯切り・シャフト加工・巻線を自社で行うことで公差を直接管理し、カスタム部品を迅速に製作できます。")}</p>
        <ul class="feature-ticks" style="margin-top:20px;">${EQUIP.map((e) => `<li>${e[lang]}</li>`).join("\n")}</ul>
      </div>
      <div class="media-frame media-frame--4x3"><img src="../img/placeholders/factory-3x2.webp" alt="${t("Factory", "工厂", "工場")}" loading="lazy" decoding="async"></div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Quality control", "质量控制", "品質管理")}</span><h2 class="h2">${t("Every unit, tested.", "每台必检。", "全数検査。")}</h2></div>
    <div class="grid-4">
      <div class="card"><div class="card-body"><h3 class="h4">${t("Incoming inspection", "来料检验", "受入検査")}</h3><p class="small muted">${t("Steel, magnets, bearings — every lot.", "钢材、磁钢、轴承——每批必检。", "鋼材・磁石・ベアリング——全ロット。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("In-process", "过程控制", "工程内管理")}</h3><p class="small muted">${t("Gear runout and tooth profile checks.", "齿轮跳动与齿形检测。", "歯車の振れ・歯形検査。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("100% final test", "100% 出厂检测", "100% 出荷検査")}</h3><p class="small muted">${t("Noise, backlash, torque, runout.", "噪音、背隙、扭矩、跳动。", "騒音・バックラッシ・トルク・振れ。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Life testing", "寿命测试", "寿命試験")}</h3><p class="small muted">${t("Accelerated endurance on new designs.", "新设计加速耐久测试。", "新設計の加速耐久試験。")}</p></div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--wide">
      <div>
        <div class="section-head"><span class="crossline">${t("Team", "团队", "チーム")}</span><h2 class="h2">${t("Engineers, not order-takers.", "工程师，而非接单员。", "受注係ではなくエンジニア。")}</h2></div>
        <div class="metric-row">
          <div><strong>40</strong><span>${t("R&D & application engineers", "研发与应用工程师", "研究開発・アプリケーションエンジニア")}</span></div>
          <div><strong>48 h</strong><span>${t("Feasibility reply on custom drawings", "定制图纸可行性答复", "カスタム図面の可否回答")}</span></div>
          <div><strong>1 ${t("day", "天", "日")}</strong><span>${t("Engineering reply to every inquiry", "每次询价工程答复", "全お問い合わせに技術回答")}</span></div>
        </div>
      </div>
      <div>
        <div class="section-head"><span class="crossline">${t("Exhibitions", "展会", "展示会")}</span><h2 class="h2">${t("Meet us at the shows.", "来展会与我们见面。", "展示会でお会いしましょう。")}</h2></div>
        <div class="grid-2">${shows}</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Want to visit or audit the factory?", "想来访或审核工厂？", "工場の見学・監査をご希望ですか？")}</h2>
      <p>${t("We welcome customer audits and virtual tours. Schedule a visit or a video walkthrough with our sales team — " + CONTACT.city[lang] + ".", "我们欢迎客户审核与视频参观。可联系销售团队安排实地到访或视频连线——" + CONTACT.city[lang] + "。", "顧客監査・バーチャルツアーを歓迎します。営業チームまで実地訪問またはビデオ見学をご予約ください——" + CONTACT.city[lang] + "。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Contact Us", "联系我们", "お問い合わせ")}</a></div>
  </div>
</section>
`;

  return { file: "about.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("gearbox factory China, stepper motor factory, motion manufacturer, OEM gearbox", "中国减速机工厂, 步进电机工厂, 传动制造商, OEM减速机", "ギヤ工場, ステッピングモーター工場, モーションメーカー, OEM"), body };
}
