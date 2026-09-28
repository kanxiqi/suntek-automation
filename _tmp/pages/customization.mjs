/* Customization / OEM & ODM — trilingual body */
import { str, CONTACT, augment } from "../i18n.mjs";

const CAPABILITIES = [
  { t: { en: "Custom shafts", zh: "定制轴", ja: "カスタムシャフト" }, d: { en: "Solid, keyed or hollow output shafts machined to your drawing.", zh: "按图纸加工实心轴、带键轴或空心轴。", ja: "図面通りに中実・キー付き・中空シャフトを加工。" } },
  { t: { en: "Custom windings", zh: "定制绕组", ja: "カスタム巻線" }, d: { en: "Wound to your voltage, current and torque point.", zh: "按你的电压、电流与扭矩点绕线。", ja: "ご指定の電圧・電流・トルク点で巻線。" } },
  { t: { en: "Mounting flanges", zh: "安装法兰", ja: "取付フランジ" }, d: { en: "Custom input/output flanges for direct motor or machine mounting.", zh: "定制输入/输出法兰，便于直装电机或设备。", ja: "モーター・装置への直付けに対応するカスタム入出力フランジ。" } },
  { t: { en: "Cables & connectors", zh: "线缆与接插件", ja: "ケーブル・コネクタ" }, d: { en: "Custom lengths, sleeving and connector types.", zh: "定制长度、护套与接插件类型。", ja: "長さ・保護チューブ・コネクタタイプをカスタム。" } },
  { t: { en: "Matched sets", zh: "匹配套装", ja: "マッチングセット" }, d: { en: "Motor + gearbox assemblies tested as one unit.", zh: "电机+减速机一体装配，作为整机测试。", ja: "モーター＋ギヤを一体で組み立て、1台としてテスト。" } },
  { t: { en: "Private label", zh: "贴牌定制", ja: "プライベートラベル" }, d: { en: "Your brand, packaging and documentation.", zh: "使用你的品牌、包装与文档。", ja: "御社ブランド・包装・ドキュメントに対応。" } },
];

const STEPS = [
  { n: "01", t: { en: "Send your drawing or spec", zh: "发送图纸或规格", ja: "図面・仕様を送る" }, d: { en: "Share a drawing, datasheet or even a photo of the requirement.", zh: "提供图纸、数据手册或需求照片。", ja: "図面・データシート・要件の写真をお送りください。" } },
  { n: "02", t: { en: "Feasibility & quotation", zh: "可行性评估与报价", ja: "可否判断と見積もり" }, d: { en: "An engineer confirms feasibility within 48 hours and quotes the configuration.", zh: "工程师 48 小时内确认可行性并报价。", ja: "エンジニアが48時間以内に可否を判断し、構成を提示します。" } },
  { n: "03", t: { en: "Prototype & approval", zh: "打样与确认", ja: "試作・承認" }, d: { en: "1–5 piece samples ship for your approval before production.", zh: "量产前先寄 1–5 件样机供你确认。", ja: "量産前に1〜5個の試作を出荷し、ご承認いただきます。" } },
  { n: "04", t: { en: "Production & QC", zh: "量产与质检", ja: "量産・品質管理" }, d: { en: "Full production with 100% final testing and the same tolerance discipline.", zh: "正式量产，每台 100% 出厂检测，公差一致。", ja: "全数出荷検査と一貫した公差管理による量産。" } },
];

export function page(lang) {
  augment(CAPABILITIES); augment(STEPS);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Customization & OEM/ODM — Gearbox & Stepper Motors | PLTBR", "客户定制 & OEM/ODM — 减速机与步进电机 | 普兰特", "カスタマイズ & OEM/ODM — ギヤ＆ステッピングモーター | PLTBR");
  const desc = t("Custom planetary gearboxes and stepper motors: shafts, windings, flanges, cables, matched sets and private label. 48h feasibility, 1–5 pc prototypes.", "定制行星减速机与步进电机：轴、绕组、法兰、线缆、匹配套装与贴牌。48 小时可行性评估，1–5 件打样。", "プラネタリーギヤ＆ステッピングモーターのカスタム：シャフト・巻線・フランジ・ケーブル・セット・プライベートラベル。48時間で可否判断、試作1〜5個。");

  const caps = CAPABILITIES.map((c) => `
    <div class="card reveal">
      <div class="card-body">
        <h3 class="h4">${c.t[lang]}</h3>
        <p class="small muted" style="margin-top:8px;">${c.d[lang]}</p>
      </div>
    </div>`).join("\n");

  const steps = STEPS.map((s) => `<li class="step"><span class="card-num">${s.n}</span><h3>${s.t[lang]}</h3><p>${s.d[lang]}</p></li>`).join("\n");

  const body = `
<div class="page-head page-head--steel">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="resources.html">${t("Resources", "资源中心", "資料センター")}</a><span>/</span><span aria-current="page">${t("Customization", "客户定制", "カスタマイズ")}</span></nav>
    <h1 class="h1">${t("Built to your drawing, not our catalog.", "按你的图纸，而非我们的目录。", "当社のカタログではなく、御社の図面通りに。")}</h1>
    <p class="lede">${t("From a custom shaft to a fully private-label motor-gearbox assembly — we machine, wind, assemble and test in-house, with no minimum for prototyping.", "从一根定制轴到完整贴牌的电机减速机组合——厂内加工、绕线、装配与测试，打样无起订量。", "カスタムシャフトから完全プライベートラベルのモーター＋ギヤ一体まで、自社工場で加工・巻線・組立・テスト。試作の最低数量はありません。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("What we customize", "定制内容", "カスタム内容")}</span><h2 class="h2">${t("Capabilities, in-house.", "厂内能力一览。", "自社で対応できること。")}</h2></div>
    <div class="auto-grid">${caps}</div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("The process", "定制流程", "プロセス")}</span><h2 class="h2">${t("From drawing to delivery in four steps.", "从图纸到交付，四步完成。", "図面から納品まで4ステップ。")}</h2></div>
    <ol class="steps">${steps}</ol>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <h2 class="h2">${t("No minimum for prototyping.", "打样无起订量。", "試作に最低数量はありません。")}</h2>
        <p class="muted" style="margin-top:12px;">${t("Prototype samples in 1–5 pieces ship within 48 hours; production MOQ is 100 pieces with a 15–25 day lead time.", "1–5 件样机 48 小时内发货；量产起订 100 件，交期 15–25 天。", "試作1〜5個は48時間以内に出荷。量産MOQは100個、納期15〜25日。")}</p>
        <ul class="checklist" style="margin-top:20px;">
          <li>${t("Email", "邮箱", "メール")}: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li>${t("WhatsApp", "WhatsApp", "WhatsApp")}: ${CONTACT.mobileDisplay}</li>
          <li>${t("Tel", "座机", "TEL")}: ${CONTACT.tel}</li>
        </ul>
      </div>
      <div class="btn-row" style="justify-content:flex-end;">
        <a class="btn btn--accent" href="contact.html">${t("Start a Custom Project", "发起定制项目", "カスタムを依頼")}</a>
      </div>
    </div>
  </div>
</section>
`;

  return { file: "customization.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Resources", "资源中心", "資料センター"), to: "resources.html" }], keywords: t("custom gearbox, OEM gearbox, ODM stepper motor, custom shaft, private label motor", "定制减速机, OEM减速机, ODM步进电机, 定制轴, 贴牌电机", "カスタムギヤ, OEMギヤ, ODMステッピング, カスタムシャフト, プライベートラベル"), body };
}
