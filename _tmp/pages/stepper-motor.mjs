/* Stepper motor family overview — trilingual body */
import { str, augment } from "../i18n.mjs";
import { CATEGORIES } from "../stepper-cat.mjs";

const TABLE = [
  ["NEMA 8", "20 × 20", "0.02", "1.8°", "0.6", "2-phase"],
  ["NEMA 11", "28 × 28", "0.07", "1.8°", "0.7", "2-phase"],
  ["NEMA 14", "35 × 35", "0.12", "1.8°", "1.0", "2-phase"],
  ["NEMA 17", "42 × 42", "0.22–0.65", "1.8°", "0.4–2.0", "2-phase"],
  ["NEMA 23", "57 × 57", "0.6–3.0", "1.8° / 0.9°", "2.0–5.6", "2/3-phase, closed-loop"],
  ["NEMA 24", "60 × 60", "1.2–3.5", "1.8°", "3.0–5.0", "2-phase"],
  ["NEMA 34", "86 × 86", "2.8–12", "1.8°", "4.0–7.0", "2-phase, closed-loop"],
  ["NEMA 42", "110 × 110", "≤ 12", "1.8°", "5.0–8.0", "2-phase"],
];

export function page(lang) {
  augment(CATEGORIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Stepper Motors — Standard, Precision & Closed-Loop Factory | PLTBR", "步进电机 — 标准、精密、闭环、丝杆系列工厂 | 普兰特", "ステッピングモーター — 標準・精密・クローズドループ・リードスクリュー工場 | PLTBR");
  const desc = t("Stepper motor factory: standard, high-precision, closed-loop, hollow-shaft, geared and lead-screw stepper motors. NEMA 8–42, 1.8°/0.9°, custom windings, OEM/ODM.", "步进电机工厂：标准、高精度、闭环、中空轴、减速与丝杆步进电机。NEMA 8–42，1.8°/0.9°，定制绕组，OEM/ODM。", "ステッピングモーター工場：標準・高精度・クローズドループ・中空軸・ギヤード・リードスクリュー。NEMA 8〜42、1.8°/0.9°、カスタム巻線、OEM/ODM。");

  const tiles = CATEGORIES.map((c) => `
    <a class="card-link reveal" href="${c.file}">
      <div class="card card--media">
        <div class="media-frame media-frame--4x3"><img src="${c.thumb}" alt="${c[lang]}" loading="lazy" decoding="async"></div>
        <div class="card-body">
          <h3 class="h4">${c[lang]}</h3>
          <p class="small muted">${c.d[lang]}</p>
        </div>
      </div>
    </a>`).join("\n");

  const tableRows = TABLE.map((r) => `<tr><td class="code">${r[0]}</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td>${r[5]}</td></tr>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Stepper Motors", "步进电机", "ステッピングモーター")}</span></nav>
    <h1 class="h1">${t("Stepper motors, from standard to precision.", "步进电机，从标准到精密。", "ステッピングモーター、標準から精密まで。")}</h1>
    <p class="lede">${t("Standard, high-precision, closed-loop, hollow-shaft, geared and lead-screw stepper motors — nine families from one factory.", "标准、高精度、闭环、中空轴、减速与丝杆步进电机——九大系列，一站式供货。", "標準・高精度・クローズドループ・中空軸・ギヤード・リードスクリューのステッピングモーター——9つのファミリーをワンストップで供給。")}</p>
    <div class="btn-row" style="margin-top:22px;">
      <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
      <a class="btn btn--ghost" href="resources.html">${t("Download Datasheets", "下载数据手册", "データシートをダウンロード")}</a>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Product categories", "产品分类", "製品カテゴリ")}</span>
      <h2 class="h2">${t("Nine product families.", "九大产品系列。", "9つの製品ファミリー。")}</h2>
    </div>
    <div class="auto-grid">${tiles}</div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Selection reference", "选型参考", "選定リファレンス")}</span>
      <h2 class="h2">${t("Holding torque at rated current.", "额定电流下的保持扭矩。", "定格電流での保持トルク。")}</h2>
      <p>${t("2-phase ratings; 3-phase and closed-loop ratings available on request.", "两相额定值；三相与闭环额定值可索取。", "2相の定格。3相・クローズドループの定格はお問い合わせください。")}</p>
    </div>
    <div class="table-scroll">
      <table class="data">
        <thead><tr><th>${t("Frame", "机座", "フレーム")}</th><th class="num">${t("Size (mm)", "尺寸 (mm)", "サイズ(mm)")}</th><th class="num">${t("Holding torque (N·m)", "保持扭矩 (N·m)", "保持トルク(N·m)")}</th><th class="num">${t("Step angle", "步距角", "ステップ角")}</th><th class="num">${t("Current (A)", "电流 (A)", "電流(A)")}</th><th>${t("Types", "类型", "タイプ")}</th></tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Custom windings and shafts", "定制绕组与轴", "カスタム巻線・シャフト")}</h2>
      <p>${t("We wind to your voltage and current, machine shafts to drawing, and build integrated motor-plus-gearbox assemblies tested as one unit.", "我们按你的电压与电流绕线、按图纸加工轴，并组装成一体化电机+减速机，作为整机测试。", "ご指定の電圧・電流で巻線し、図面通りにシャフトを加工。モーター＋ギヤの一体アセンブリを1台としてテストします。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a></div>
  </div>
</section>
`;

  return { file: "stepper-motor.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("stepper motor manufacturer, NEMA 23 stepper motor, closed loop stepper, hollow shaft stepper, lead screw stepper", "步进电机厂家, NEMA 23步进电机, 闭环步进电机, 中空轴步进电机, 丝杆步进电机", "ステッピングモーター, NEMA 23, クローズドループ, 中空軸, リードスクリュー"), body };
}
