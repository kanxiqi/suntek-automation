/* Stepper motor categories — shared data + frame-list detail renderer (build tool) */
import { str, augment } from "./i18n.mjs";
import { FRAME_DATA } from "./stepper-frames.mjs";

export const CATEGORIES = [
  { id: "standard", file: "stepper-standard.html", thumb: "../img/products/stepper-motor/stepper.webp", en: "Standard Stepper Motor", zh: "标准步进电机", ja: "標準ステッピングモーター", d: { en: "2-phase NEMA frames, economical and widely used.", zh: "两相 NEMA 机座，经济实用。", ja: "2相NEMAフレーム。経済的で幅広く使用。" } },
  { id: "high-precision", file: "stepper-high-precision.html", thumb: "../img/products/stepper-motor/precision.webp", en: "High-Precision Stepper Motor", zh: "高精度步进电机", ja: "高精度ステッピングモーター", d: { en: "0.9° step angle for finer positioning.", zh: "0.9° 步距角，定位更精细。", ja: "0.9°ステップ角で、より精密な位置決め。" } },
  { id: "closed-loop", file: "stepper-closed-loop.html", thumb: "../img/products/stepper-motor/closeloop.webp", en: "Closed-Loop Stepper Motor", zh: "闭环步进电机", ja: "クローズドループステッピングモーター", d: { en: "Encoder feedback prevents step loss.", zh: "带编码器反馈，杜绝失步。", ja: "エンコーダフィードバックで脱調を防止。" } },
  { id: "hollow-shaft", file: "stepper-hollow-shaft.html", thumb: "../img/products/stepper-motor/hollowmotor.webp", en: "Hollow-Shaft Stepper Motor", zh: "中空轴步进电机", ja: "中空軸ステッピングモーター", d: { en: "Hollow shaft for wiring or piping through.", zh: "空心轴，便于穿线或穿管。", ja: "中空軸で配線・配管を通せます。" } },
  { id: "geared", file: "stepper-geared.html", thumb: "../img/products/stepper-motor/geared-stepper.webp", en: "Geared Stepper Motor", zh: "减速步进电机", ja: "ギヤードステッピングモーター", d: { en: "Integrated planetary gearbox for high torque.", zh: "集成行星减速，输出高扭矩。", ja: "遊星ギヤ一体で高トルクを実現。" } },
  { id: "high-precision-geared", file: "stepper-high-precision-geared.html", thumb: "../img/products/stepper-motor/precisiongeared.webp", en: "High-Precision Geared Stepper Motor", zh: "高精密减速步进电机", ja: "高精度ギヤードステッピングモーター", d: { en: "Low-backlash precision reduction.", zh: "低背隙精密减速。", ja: "低バックラッシの精密減速。" } },
  { id: "external-leadscrew", file: "stepper-external-leadscrew.html", thumb: "../img/products/stepper-motor/waiqudong.webp", en: "External-Drive Lead Screw Stepper Motor", zh: "外驱丝杆步进电机", ja: "外部駆動リードスクリューステッピングモーター", d: { en: "External lead screw drive for linear motion.", zh: "外驱式丝杆，线性运动。", ja: "外部駆動式リードスクリューで直線運動。" } },
  { id: "through-leadscrew", file: "stepper-through-leadscrew.html", thumb: "../img/products/stepper-motor/sigan.webp", en: "Through Lead Screw Stepper Motor", zh: "贯通丝杆步进电机", ja: "貫通リードスクリューステッピングモーター", d: { en: "Through-type lead screw for long travel.", zh: "贯通式丝杆，适合长行程。", ja: "貫通式リードスクリューで長ストロークに対応。" } },
  { id: "fixed-leadscrew", file: "stepper-fixed-leadscrew.html", thumb: "../img/products/stepper-motor/sigan.webp", en: "Fixed-Shaft Lead Screw Stepper Motor", zh: "固定轴丝杆步进电机", ja: "固定軸リードスクリューステッピングモーター", d: { en: "Fixed-shaft lead screw, compact and rigid.", zh: "固定轴式丝杆，紧凑稳固。", ja: "固定軸式リードスクリュー。コンパクトで高剛性。" } },
  { id: "electric-cylinder", file: "stepper-electric-cylinder.html", thumb: "../img/products/stepper-motor/gudingzhoudiangang.webp", en: "Fixed-Shaft Electric Cylinder", zh: "固定轴式步进电机（电缸）", ja: "固定軸式ステッピングモーター（電動シリンダー）", d: { en: "Integrated motor and leadscrew in a cylinder housing for linear push-pull motion.", zh: "电机与丝杆集成于缸体内，输出直线推拉运动。", ja: "モーターとリードスクリューをシリンダー内に一体化し、直線の押し引き動作を実現。" } },
  { id: "integrated-drive", file: "stepper-integrated-drive.html", thumb: "../img/products/stepper-motor/idmotor.webp", en: "Integrated Drive Closed-Loop Stepper Motor", zh: "集成驱动闭环步进电机", ja: "一体型ドライブクローズドループステッピングモーター", d: { en: "Motor with built-in driver and encoder, ready to connect.", zh: "电机内置驱动器与编码器，即插即用。", ja: "ドライバとエンコーダを内蔵し、すぐに接続可能。" } },
];

export const GEAR_SERIES = [
  { code: "AB", ra: false, img: "../img/products/planetary-gearbox/AB.webp", en: "Circular flange, straight planetary gearbox", zh: "圆形法兰直齿行星减速机", ja: "丸フランジ・平行軸プラネタリーギヤ" },
  { code: "ABR", ra: true, img: "../img/products/planetary-gearbox/ABR.webp", en: "Circular flange, right-angle gearbox", zh: "圆形法兰直角行星减速机", ja: "丸フランジ・直角ギヤ" },
  { code: "AD", ra: false, img: "../img/products/planetary-gearbox/AD.webp", en: "Circular flange planetary gearbox", zh: "圆形法兰行星减速机", ja: "丸フランジプラネタリーギヤ" },
  { code: "ADR", ra: true, img: "../img/products/planetary-gearbox/ADR.webp", en: "Circular flange right-angle gearbox", zh: "圆形法兰直角行星减速机", ja: "丸フランジ直角ギヤ" },
  { code: "AF", ra: false, img: "../img/products/planetary-gearbox/AF.webp", en: "Square flange, straight gearbox", zh: "方形法兰直齿行星减速机", ja: "角フランジ・平行軸ギヤ" },
  { code: "AFR", ra: true, img: "../img/products/planetary-gearbox/AFR.webp", en: "Square flange, right-angle gearbox", zh: "方形法兰直角行星减速机", ja: "角フランジ・直角ギヤ" },
  { code: "AE", ra: false, img: "../img/products/planetary-gearbox/AE.webp", en: "Circular flange, economy gearbox", zh: "圆形法兰经济型行星减速机", ja: "丸フランジ・経済型ギヤ" },
  { code: "AER", ra: true, img: "../img/products/planetary-gearbox/AER.webp", en: "Circular flange, economy right-angle", zh: "圆形法兰经济型直角减速机", ja: "丸フランジ・経済型直角ギヤ" },
  { code: "AG", ra: false, img: "../img/products/planetary-gearbox/AG.webp", en: "Circular flange, high-precision gearbox", zh: "圆形法兰高精度行星减速机", ja: "丸フランジ・高精度ギヤ" },
  { code: "AGR", ra: true, img: "../img/products/planetary-gearbox/AGR.webp", en: "Circular flange, high-precision right-angle", zh: "圆形法兰高精度直角减速机", ja: "丸フランジ・高精度直角ギヤ" },
  { code: "AT", ra: false, img: "../img/products/planetary-gearbox/AT.webp", en: "AT series planetary gearbox", zh: "AT系列行星减速机", ja: "ATシリーズプラネタリーギヤ" },
  { code: "VL", ra: false, img: "../img/products/planetary-gearbox/VL.webp", en: "Compact planetary gearbox", zh: "紧凑型行星减速机", ja: "コンパクトプラネタリーギヤ" },
  { code: "VLR", ra: true, img: "../img/products/planetary-gearbox/VLR.webp", en: "Compact right-angle gearbox", zh: "紧凑型直角行星减速机", ja: "コンパクト直角ギヤ" },
  { code: "PB", ra: false, img: "../img/products/planetary-gearbox/PB.webp", en: "Precision planetary gearbox", zh: "精密型行星减速机", ja: "精密プラネタリーギヤ" },
  { code: "PE", ra: false, img: "../img/products/planetary-gearbox/PE.webp", en: "Economy planetary gearbox", zh: "经济型行星减速机", ja: "経済型プラネタリーギヤ" },
  { code: "PR", ra: true, img: "../img/products/planetary-gearbox/PR.webp", en: "Precision right-angle gearbox", zh: "精密直角行星减速机", ja: "精密直角ギヤ" },
];

/* Assign detail-page file names and frame-size ranges to each gear series. */
GEAR_SERIES.forEach(function (s) {
  s.file = "planetary-" + s.code.toLowerCase() + ".html";
  s.frames = ["42", "60", "90", "115", "142", "180", "220"];
});
GEAR_SERIES.find(function (s) { return s.code === "PB"; }).models = ["PB28", "PB42", "PBR28", "PBR42"];

export function renderGearSeries(lang, s) {
  augment(GEAR_SERIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const name = s.code;
  const desc = s[lang];
  const title = name + " " + t("planetary gearbox", "行星减速机", "プラネタリーギヤボックス") + " | PLTBR";
  const items = s.models || s.frames;
  const itemsHtml = items.map(function (f) {
    return '<span class="tag tag--outline">' + f + (s.models ? "" : " mm") + "</span>";
  }).join("\n");

  const headClass = s.img ? "page-head page-head--media" : "page-head";
  const headStyle = s.img ? ' style="background-image:url(\'' + s.img + '\')"' : "";

  const body = `
<div class="${headClass}"${headStyle}>
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="planetary-gearbox.html">${t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス")}</a><span>/</span><span aria-current="page">${name}</span></nav>
    <h1 class="h1">${name} ${t("planetary gearbox", "行星减速机", "プラネタリーギヤボックス")}</h1>
    <p class="lede">${desc}</p>
    <div class="btn-row" style="margin-top:22px;">
      <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
      <a class="btn btn--ghost" href="resources.html">${t("Download CAD", "下载 CAD", "CADをダウンロード")}</a>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Frame sizes", "机座尺寸", "フレームサイズ")}</span>
      <h2 class="h2">${t("Available frame sizes.", "可选机座尺寸。", "対応フレームサイズ。")}</h2>
    </div>
    <div class="flex-wrap">${itemsHtml}</div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Selection guide", "选型样册", "選定カタログ")}</span>
      <h2 class="h2">${t("Dimensions and ratios.", "尺寸与速比。", "寸法と減速比。")}</h2>
    </div>
    <figure class="dim-figure">
      <img src="../img/placeholders/selection-guide.webp" alt="${t("Selection guide", "选型样册", "選定カタログ")}" loading="lazy" decoding="async">
    </figure>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Request pricing for this series.", "索取本系列报价。", "このシリーズの価格を問い合わせる。")}</h2>
      <p>${t("Tell us your frame size, ratio and torque, and we'll recommend a model.", "告知机座、速比与扭矩，我们将推荐型号。", "フレームサイズ・減速比・トルクをお知らせいただければ、モデルをご提案します。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a></div>
  </div>
</section>
`;

  return { file: s.file, title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス"), to: "planetary-gearbox.html" }], body };
}

/* Render a frame-size grouped model-list detail page for one category. */
export function renderFrameList(lang, id) {
  augment(CATEGORIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const c = CATEGORIES.find((x) => x.id === id);
  const data = FRAME_DATA[id];
  const name = c[lang];
  const lede = c.d[lang];
  const title = name + " | PLTBR";

  const headClass = c.thumb ? "page-head page-head--media" : "page-head";
  const headStyle = c.thumb ? ' style="background-image:url(\'' + c.thumb + '\')"' : "";

  const groupsHtml = data.groups.map((g) => {
    const rows = g.models.map((m) => `
      <tr>
        <td class="code"><a href="stepper-${id}-${g.frame}.html">${m[0]}</a></td>
        <td class="num">${m[1]}</td>
        <td class="num">${m[2]}</td>
        <td class="num">${m[3]}</td>
        <td class="num">${m[4]}</td>
        <td class="num">${m[5]}</td>
        <td class="num">${m[6]}</td>
      </tr>`).join("\n");
    return `
  <div class="frame-block reveal" id="frame-${g.frame}" style="margin-bottom:30px;">
    <h3 class="h3">${g.frame} mm · ${data.nema[g.frame]} <span class="small muted" style="font-weight:400;">— ${g.models.length} ${t("models", "个型号", "モデル")}</span></h3>
    <div class="table-scroll" style="margin-top:12px;">
      <table class="data data--tight">
        <thead><tr>
          <th>${t("Model", "型号", "型番")}</th>
          <th class="num">${t("Phase", "相数", "相数")}</th>
          <th class="num">${t("Length (mm)", "长度 (mm)", "長さ(mm)")}</th>
          <th class="num">${t("Current (A)", "额定电流 (A)", "定格電流(A)")}</th>
          <th class="num">${t("Holding torque (N·m)", "保持力矩 (N·m)", "保持トルク(N·m)")}</th>
          <th class="num">${t("Rotor inertia (g·cm²)", "转子惯量 (g·cm²)", "ロータ慣性(g·cm²)")}</th>
          <th class="num">${t("Weight (g)", "重量 (g)", "質量(g)")}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
  }).join("\n");

  const body = `
<div class="${headClass}"${headStyle}>
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="stepper-motor.html">${t("Stepper Motors", "步进电机", "ステッピングモーター")}</a><span>/</span><span aria-current="page">${name}</span></nav>
    <h1 class="h1">${name}</h1>
    <p class="lede">${lede}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    ${groupsHtml}
    <p class="table-note">${t("Specifications are typical values; custom windings, shafts and connectors available on request.", "参数为典型值；可按需定制绕组、轴与接插件。", "仕様は代表値です。巻線・シャフト・コネクタのカスタムに対応します。")}</p>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Request pricing for a specific model.", "索取具体型号报价。", "特定モデルの価格を問い合わせる。")}</h2>
      <p>${t("Tell us the model number, quantity and voltage, and we'll quote within one business day.", "告知型号、数量与电压，我们一个工作日内报价。", "型番・数量・電圧をお知らせいただければ、1営業日以内にお見積もりします。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a></div>
  </div>
</section>
`;

  return { file: c.file, title, desc: lede, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Stepper Motors", "步进电机", "ステッピングモーター"), to: "stepper-motor.html" }], body };
}
