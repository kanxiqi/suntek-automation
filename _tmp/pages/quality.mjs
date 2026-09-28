/* Quality & certification — trilingual body */
import { str, augment } from "../i18n.mjs";

const CERTS = [
  ["ISO 9001:2015", { en: "Certified quality management system covering design, production and service.", zh: "覆盖设计、生产与服务的认证质量管理体系。", ja: "設計・生産・サービスを対象とした認証品質マネジメントシステム。" }],
  ["CE", { en: "Conformity for the European market, with technical files available on request.", zh: "符合欧洲市场要求，可按需提供技术文件。", ja: "欧州市場向け適合。技術資料はご要望に応じて提供。" }],
  ["RoHS", { en: "Restriction of hazardous substances across all materials and processes.", zh: "所有材料与工艺均符合有害物质限制。", ja: "全材料・工程で有害物質の使用制限に適合。" }],
  ["REACH", { en: "Registered substances and full material disclosure on request.", zh: "注册物质与全材料声明可按需提供。", ja: "登録物質と全材料開示にご要望に応じて対応。" }],
];

const STEPS = [
  { n: "01", t: { en: "Incoming inspection", zh: "来料检验", ja: "受入検査" }, d: { en: "Every lot of steel, magnet and bearing is hardness-tested and dimension-checked before release to production.", zh: "每一批钢材、磁钢与轴承在上线前都做硬度与尺寸检验。", ja: "鋼材・磁石・ベアリングの全ロットを、生産投入前に硬度・寸法検査します。" } },
  { n: "02", t: { en: "In-process control", zh: "过程控制", ja: "工程内管理" }, d: { en: "Gear runout and tooth profile are measured at each machining stage against tolerance bands.", zh: "每个加工阶段都按公差带检测齿轮跳动与齿形。", ja: "各加工段階で歯車の振れ・歯形を公差帯に対して測定します。" } },
  { n: "03", t: { en: "100% final test", zh: "100% 出厂检测", ja: "100% 出荷検査" }, d: { en: "Every unit runs noise, backlash, torque and runout checks on an automated test bench before shipping.", zh: "每台产品发货前都在自动测试台上进行噪音、背隙、扭矩与跳动检测。", ja: "全数が自動試験台で騒音・バックラッシ・トルク・振れを検査してから出荷されます。" } },
  { n: "04", t: { en: "Life & reliability", zh: "寿命与可靠性", ja: "寿命・信頼性" }, d: { en: "New designs pass accelerated endurance testing and thermal cycling before release.", zh: "新设计需通过加速耐久与热循环测试后方可发布。", ja: "新設計は加速耐久試験と温度サイクルを通過してからリリースされます。" } },
];

const EQUIP = [
  { en: "Backlash testers", zh: "背隙测试仪", ja: "バックラッシ試験機" },
  { en: "Torque test rigs", zh: "扭矩测试台", ja: "トルク試験装置" },
  { en: "Noise chambers", zh: "噪音室", ja: "騒音チャンバー" },
  { en: "Runout gauges", zh: "跳动测量仪", ja: "振れ測定器" },
  { en: "CMM", zh: "三坐标测量机", ja: "三次元測定機" },
  { en: "Durability rigs", zh: "耐久测试台", ja: "耐久試験装置" },
];

export function page(lang) {
  augment(CERTS); augment(STEPS); augment(EQUIP);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Quality & Certification — ISO 9001 Gearbox Factory | PLTBR", "质量认证 — ISO 9001 减速机工厂 | 普兰特", "品質・認証 — ISO 9001 ギヤ工場 | PLTBR");
  const desc = t("ISO 9001:2015 certified planetary gearbox and stepper motor factory. CE, RoHS, REACH compliance with 100% final testing on every unit.", "ISO 9001:2015 认证的行星减速机与步进电机工厂。CE、RoHS、REACH 合规，每台 100% 出厂检测。", "ISO 9001:2015認証のプラネタリーギヤ＆ステッピングモーター工場。CE・RoHS・REACH適合、全数出荷検査。");

  const certCards = CERTS.map((c) => `<div class="card"><div class="card-body"><h3 class="h3">${c[0]}</h3><p class="small muted">${c[1][lang]}</p></div></div>`).join("\n");
  const steps = STEPS.map((s) => `<li class="step"><span class="card-num">${s.n}</span><h3>${s.t[lang]}</h3><p>${s.d[lang]}</p></li>`).join("\n");
  const equips = EQUIP.map((e) => `<li>${e[lang]}</li>`).join("\n");

  const body = `
<div class="page-head page-head--steel">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Quality & Certification", "质量认证", "品質・認証")}</span></nav>
    <h1 class="h1">${t("Certified, and then some.", "不仅认证，更胜一筹。", "認証、そしてそれ以上。")}</h1>
    <p class="lede">${t("Certifications prove a baseline. What protects your production line is what we do on top of them: 100% final testing on every unit, not batch sampling.", "认证只是底线。真正守护你产线的是我们在认证之上所做的：每台产品 100% 出厂检测，而非抽检。", "認証は最低基準を証明するもの。生産ラインを守るのは、その上で行う全数出荷検査——抜き取り検査ではありません。")}</p>
  </div>
</div>

<section class="section" id="certifications">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Certifications & compliance", "认证与合规", "認証・コンプライアンス")}</span><h2 class="h2">${t("Standards we hold.", "我们所持的标准。", "当社が保持する規格。")}</h2></div>
    <div class="grid-4">${certCards}</div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("The process", "质量流程", "品質プロセス")}</span><h2 class="h2">${t("Quality is built in four stages.", "质量在四个阶段中建立。", "品質は4段階で作り込まれます。")}</h2></div>
    <ol class="steps">${steps}</ol>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <div class="section-head"><span class="crossline">${t("Test equipment", "检测设备", "試験設備")}</span><h2 class="h2">${t("Measured, not assumed.", "用测量说话，而非假设。", "想定ではなく測定で。")}</h2></div>
        <p class="muted">${t("Our lab equipment covers the full range of what we specify in our datasheets.", "实验室设备覆盖数据手册中列明的全部参数。", "ラボ設備はデータシートに記載した全範囲をカバーします。")}</p>
      </div>
      <div class="kv-list">
        ${EQUIP.map((e, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><strong>${e[lang]}</strong></div>`).join("\n")}
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Request certificates or an audit", "索取证书或安排审核", "証明書・監査のご依頼")}</h2>
      <p>${t("We'll share our ISO certificate, CE technical files and RoHS declarations — or schedule a factory audit with your quality team.", "我们可提供 ISO 证书、CE 技术文件与 RoHS 声明——也可安排贵司质量团队到厂审核。", "ISO証明書・CE技術資料・RoHS宣言を提供します。品質チームによる工場監査のスケジュール調整も可能です。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Request Documents", "索取文件", "資料を請求")}</a></div>
  </div>
</section>
`;

  return { file: "quality.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("ISO 9001 gearbox factory, CE RoHS REACH, quality control, gearbox inspection", "ISO 9001减速机工厂, CE RoHS REACH, 质量控制, 减速机检测", "ISO 9001, CE, RoHS, 品質管理, ギヤ検査"), body };
}
