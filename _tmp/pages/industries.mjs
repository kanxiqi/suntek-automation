/* Industries / applications — trilingual body */
import { str, augment } from "../i18n.mjs";

const INDUSTRIES = [
  { num: "01", img: "https://loremflickr.com/400/300/robot", name: { en: "Robotics & AGV", zh: "机器人与 AGV", ja: "ロボット・AGV" },
    d: { en: "Joint and axis drives where positioning repeatability is everything. Precision AG series gearboxes hold backlash to ≤ 3 arcmin for servo-like stiffness.",
         zh: "对定位重复性要求极高的关节与轴驱动。精密级 AG 系列减速机背隙 ≤ 3 arcmin，提供类伺服刚度。",
         ja: "位置決めの再現性がすべての関節・軸駆動。精密級AGシリーズギヤはバックラッシ≤3arcminでサーボ並みの剛性を実現。" },
    gear: "AG / AGR", motor: "NEMA 23" },
  { num: "02", img: "https://loremflickr.com/400/300/cnc", name: { en: "CNC & Laser Cutting", zh: "CNC 与激光切割", ja: "CNC・レーザー切断" },
    d: { en: "Rigid, low-inertia motion for tool positioning under cutting loads. High-torque NEMA 23/34 motors with matched AF/AFR gearboxes.",
         zh: "切削负载下的刀具定位需要刚性、低惯量的运动。高扭矩 NEMA 23/34 电机搭配 AF/AFR 减速机。",
         ja: "切削負荷下のツール位置決めには剛性・低慣性のモーションが必要。高トルクNEMA 23/34とAF/AFRギヤの組合せ。" },
    gear: "AF / AFR", motor: "NEMA 23 / 34" },
  { num: "03", img: "https://loremflickr.com/400/300/laboratory", name: { en: "Medical & Lab", zh: "医疗与实验室", ja: "医療・ラボ" },
    d: { en: "Silent, clean and precise actuation for diagnostic and laboratory equipment. Low-noise 3-phase options and smooth 0.9° microstepping.",
         zh: "诊断与实验室设备需要安静、洁净、精确的驱动。可选低噪三相电机与平滑 0.9° 细分。",
         ja: "診断・ラボ装置向けに静かでクリーン、精密な動作。低騒音3相オプションと滑らかな0.9°マイクロステップ。" },
    gear: "VL / VLR", motor: "NEMA 14 / 17" },
  { num: "04", img: "https://loremflickr.com/400/300/packaging", name: { en: "Packaging Machinery", zh: "包装机械", ja: "包装機械" },
    d: { en: "High-cycle indexing for fill, seal and label lines. Reinforced output bearings handle continuous start-stop duty.",
         zh: "灌装、封口与贴标线的高节拍分度。加强输出轴承承受连续启停工况。",
         ja: "充填・シール・ラベルラインの高サイクル間欠。強化出力ベアリングが連続発停に対応。" },
    gear: "PB / PE", motor: "NEMA 23" },
  { num: "05", img: "https://loremflickr.com/400/300/3dprinter", name: { en: "3D Printing", zh: "3D 打印", ja: "3Dプリンティング" },
    d: { en: "Precision extruder and gantry drives with quiet operation and consistent torque across long prints.",
         zh: "精密挤出与龙门驱动，安静运行，长时间打印扭矩稳定。",
         ja: "精密押出・ガントリー駆動。静かな動作と長時間印刷での安定トルクを実現。" },
    gear: "PE / VL", motor: "NEMA 17" },
  { num: "06", img: "https://loremflickr.com/400/300/warehouse", name: { en: "AGV & AMR", zh: "AGV 与 AMR", ja: "AGV・AMR" },
    d: { en: "Compact wheel and steering drives for autonomous vehicles. AB series direct-mount units keep the drivetrain short and robust.",
         zh: "自主移动设备的紧凑轮驱与转向驱动。AB 系列直装单元让动力链更短、更可靠。",
         ja: "自律走行車向けのコンパクトな車輪・操舵駆動。ABシリーズ直付けユニットでドライブトレインを短く堅牢に。" },
    gear: "AB / ABR", motor: "NEMA 23" },
  { num: "07", img: "https://loremflickr.com/400/300/semiconductor", name: { en: "Semiconductor", zh: "半导体", ja: "半導体" },
    d: { en: "Low-particle, cleanroom-compatible drives for wafer handling and inspection stages.",
         zh: "晶圆搬运与检测台的洁净室兼容低颗粒驱动。",
         ja: "ウェハ搬送・検査ステージ向けのクリーンルーム対応低発塵駆動。" },
    gear: "AG / AGR", motor: "Closed-loop" },
  { num: "08", img: "https://loremflickr.com/400/300/solar", name: { en: "Solar Tracking", zh: "光伏跟踪", ja: "ソーラートラッキング" },
    d: { en: "Weatherproof slew drives for single-axis trackers, built for years of outdoor duty with minimal maintenance.",
         zh: "单轴跟踪器的耐候回转驱动，多年户外运行、少维护。",
         ja: "1軸トラッカーの耐候旋回駆動。長年の屋外使用とメンテナンス最小化を実現。" },
    gear: "AF / AFR", motor: "NEMA 34" },
];

export function page(lang) {
  augment(INDUSTRIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Industries & Applications — Gearbox & Stepper Solutions | PLTBR", "应用行业 — 减速机与步进解决方案 | 普兰特", "業界・用途 — ギヤ＆ステッピングソリューション | PLTBR");
  const desc = t("Planetary gearbox and stepper motor solutions by industry: robotics, CNC, medical, packaging, 3D printing, AGV, semiconductor and solar tracking.", "按行业分类的行星减速机与步进电机方案：机器人、CNC、医疗、包装、3D 打印、AGV、半导体与光伏跟踪。", "業界別のプラネタリーギヤ＆ステッピングモーターソリューション：ロボット、CNC、医療、包装、3Dプリント、AGV、半導体、ソーラートラッキング。");

  const cards = INDUSTRIES.map((ind) => `
    <div class="card card--media reveal">
      <div class="media-frame media-frame--4x3"><img src="${ind.img}" alt="${ind.name[lang]}" width="400" height="300" loading="lazy" decoding="async" referrerpolicy="no-referrer"></div>
      <div class="card-body">
        <span class="application-number">${ind.num}</span>
        <h3 class="h3" style="margin-top:8px;">${ind.name[lang]}</h3>
        <p class="small muted" style="margin-top:8px;">${ind.d[lang]}</p>
        <div class="card-tags" style="margin-top:14px;">
          <span class="tag tag--accent">${ind.gear}</span>
          <span class="tag">${ind.motor}</span>
        </div>
      </div>
    </div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Industries", "应用行业", "業界・用途")}</span></nav>
    <h1 class="h1">${t("Motion modules for demanding applications.", "为严苛应用提供运动模块。", "要求の厳しい用途のためのモーションモジュール。")}</h1>
    <p class="lede">${t("Each industry has its own tolerance, noise and duty-cycle requirements. We match the gearbox and motor to the application, not the other way around.", "每个行业都有各自的精度、噪音与工况要求。我们让减速机与电机去匹配应用，而不是反过来。", "業界ごとに精度・騒音・使用条件の要件は異なります。アプリケーションにギヤとモーターを合わせます。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="auto-grid">${cards}</div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Don't see your industry?", "没看到你的行业？", "該当する業界が見つかりませんか？")}</h2>
      <p>${t("If your application moves, we can drive it. Send your torque, speed and duty-cycle requirements and an engineer will recommend a matched solution.", "只要你的应用有运动，我们就能驱动它。发送扭矩、转速与工况需求，工程师会推荐匹配方案。", "動きがある用途なら対応できます。トルク・回転数・使用条件をお送りいただければ、エンジニアが最適な構成を提案します。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Talk to an Engineer", "联系工程师", "エンジニアに相談")}</a></div>
  </div>
</section>
`;

  return { file: "industries.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("planetary gearbox applications, AB gearbox, AF gearbox, AG gearbox, precision gearbox", "行星减速机应用, AB减速机, AF减速机, AG减速机, 精密减速机", "プラネタリーギヤ用途, ABギヤ, AFギヤ, AGギヤ, 精密ギヤ"), body };
}
