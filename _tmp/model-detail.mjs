/* Stepper motor frame-size detail pages — renderer (build tool) */
import { str, augment } from "./i18n.mjs";
import { FRAME_DATA } from "./stepper-frames.mjs";
import { CATEGORIES } from "./stepper-cat.mjs";

export function allFrames() {
  const list = [];
  for (const catId of Object.keys(FRAME_DATA)) {
    for (const g of FRAME_DATA[catId].groups) {
      list.push({ catId, frame: g.frame, nema: FRAME_DATA[catId].nema[g.frame], models: g.models });
    }
  }
  return list;
}

export function fileForFrame(catId, frame) {
  return "stepper-" + catId + "-" + frame + ".html";
}

function gearboxFor(frame) {
  const n = parseInt(frame, 10);
  if (n <= 28) return ["PG28", "planetary-gearbox.html#pg28"];
  if (n <= 42) return ["PG42", "planetary-gearbox.html#pg42"];
  if (n <= 60) return ["PG52", "planetary-gearbox.html#pg52"];
  return ["PG62", "planetary-gearbox.html#pg62"];
}

function motorIllustration() {
  return `<svg viewBox="0 0 400 400" role="img" aria-label="Stepper motor product image">
  <g fill="none" stroke="#d8dcdf" stroke-width="1"><line x1="200" y1="16" x2="200" y2="384" stroke-dasharray="5 9"/><line x1="16" y1="200" x2="384" y2="200" stroke-dasharray="5 9"/></g>
  <rect x="96" y="96" width="208" height="208" fill="#eef0f2" stroke="#1e2226" stroke-width="3"/>
  <circle cx="200" cy="200" r="46" fill="none" stroke="#1e2226" stroke-width="3"/>
  <circle cx="200" cy="200" r="17" fill="#1679b8"/>
  <line x1="200" y1="96" x2="200" y2="66" stroke="#1679b8" stroke-width="4"/>
  <circle cx="200" cy="62" r="7" fill="#1679b8"/>
  <g fill="#1e2226"><circle cx="118" cy="118" r="7"/><circle cx="282" cy="118" r="7"/><circle cx="118" cy="282" r="7"/><circle cx="282" cy="282" r="7"/></g>
  <path d="M118 304v-16h164v16" fill="none" stroke="#1e2226" stroke-width="3"/>
  <path d="M150 304v10h24v-10M230 304v10h24v-10" fill="none" stroke="#1679b8" stroke-width="2"/>
</svg>`;
}

export function renderFramePage(lang, { catId, frame, nema, models }) {
  augment(CATEGORIES);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const cat = CATEGORIES.find((c) => c.id === catId);
  const catName = cat[lang];
  const file = fileForFrame(catId, frame);
  const title = frame + " mm · " + nema + " | PLTBR";
  const desc = catName + " · " + frame + " mm · " + nema;
  const gearedLike = ["geared", "high-precision-geared", "external-leadscrew", "through-leadscrew", "fixed-leadscrew", "electric-cylinder"].indexOf(catId) !== -1;
  const gb = gearboxFor(frame);

  const tableRows = models.map((m) => `
      <tr>
        <td class="code">${m[0]}</td>
        <td class="num">${m[1]}</td>
        <td class="num">${m[2]}</td>
        <td class="num">${m[3]}</td>
        <td class="num">${m[4]}</td>
        <td class="num">${m[5]}</td>
        <td class="num">${m[6]}</td>
      </tr>`).join("\n");

  const secondCard = gearedLike
    ? `<a class="card-link" href="contact.html"><div class="card"><div class="card-body"><h3>${t("Custom configuration", "定制配置", "カスタム構成")}</h3><p class="small muted">${t("Custom flanges, leadscrews and mounting options.", "定制法兰、丝杆与安装方式。", "カスタムフランジ・リードスクリュー・取付方法。")}</p><div class="card-tags"><span class="tag">${t("OEM / ODM", "OEM / ODM", "OEM / ODM")}</span></div></div></div></a>`
    : `<a class="card-link" href="${gb[1]}"><div class="card"><div class="card-body"><h3>${gb[0]} ${t("planetary gearbox", "行星减速机", "プラネタリーギヤボックス")}</h3><p class="small muted">${t("Recommended gearbox", "推荐减速机", "推奨ギヤボックス")}</p><div class="card-tags"><span class="tag">${t("Recommended pairing", "推荐搭配", "推奨の組み合わせ")}</span></div></div></div></a>`;

  const body = `
<div class="page-head">
  <div class="container ph-split">
    <div>
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="stepper-motor.html">${t("Stepper Motors", "步进电机", "ステッピングモーター")}</a><span>/</span><a href="${cat.file}">${catName}</a><span>/</span><span aria-current="page">${frame} mm</span></nav>
      <span class="crossline">${catName} · ${nema}</span>
      <h1 class="h1">${frame} mm ${t("stepper motor", "步进电机", "ステッピングモーター")}</h1>
      <p class="lede">${models.length} ${t("models", "个型号", "モデル")}</p>
      <div class="btn-row" style="margin-top:22px;">
        <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
        <a class="btn btn--ghost" href="resources.html">${t("Download CAD", "下载 CAD", "CADをダウンロード")}</a>
      </div>
    </div>
    <div class="ph-media">
      <div class="media-frame media-frame--1x1 media-frame--drawing">${motorIllustration()}</div>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="tabs" data-tabs>
      <div class="tab-list" role="tablist">
        <button role="tab" aria-selected="true">${t("Specifications", "规格参数", "仕様")}</button>
        <button role="tab" aria-selected="false">${t("Speed-torque curve", "速度力矩曲线", "速度-トルク曲線")}</button>
        <button role="tab" aria-selected="false">${t("Mechanical dimensions", "机械尺寸", "機械寸法")}</button>
      </div>
      <div class="tab-panel" role="tabpanel">
        <div class="table-scroll">
          <table class="data data--tight">
            <thead><tr>
              <th>${t("Model", "型号", "型番")}</th>
              <th class="num">${t("Phase", "相数", "相数")}</th>
              <th class="num">${t("Length L (mm)", "长度 L(mm)", "長さ L(mm)")}</th>
              <th class="num">${t("Current (A)", "额定电流 (A)", "定格電流(A)")}</th>
              <th class="num">${t("Holding torque (N·m)", "保持力矩 (N·m)", "保持トルク(N·m)")}</th>
              <th class="num">${t("Rotor inertia (g·cm²)", "转子惯量 (g·cm²)", "ロータ慣性(g·cm²)")}</th>
              <th class="num">${t("Weight (g)", "重量 (g)", "質量(g)")}</th>
            </tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
        <p class="table-note">${t("Specifications are typical values; custom windings, shafts and connectors available on request.", "参数为典型值；可按需定制绕组、轴与接插件。", "仕様は代表値です。巻線・シャフト・コネクタのカスタムに対応します。")}</p>
      </div>
      <div class="tab-panel" role="tabpanel" hidden>
        <figure class="dim-figure">
          <img src="../img/placeholders/speed-torque-curve.webp" alt="${t("Speed-torque curve", "速度力矩曲线", "速度-トルク曲線")}" loading="lazy" decoding="async">
        </figure>
      </div>
      <div class="tab-panel" role="tabpanel" hidden>
        <figure class="dim-figure">
          <img src="../img/placeholders/dimension-drawing.webp" alt="${t("Mechanical dimensions", "机械尺寸", "機械寸法")}" loading="lazy" decoding="async">
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Compatible products", "配套产品", "互換製品")}</span>
      <h2 class="h2">${t("Pair with our drivers and gearboxes.", "可搭配我们的驱动器与减速机。", "当社のドライバ・ギヤボックスと組み合わせ可能。")}</h2>
    </div>
    <div class="grid-2">
      <a class="card-link" href="products.html#drivers"><div class="card"><div class="card-body"><h3>${t("Drivers & controllers", "驱动器与控制器", "ドライバ・コントローラ")}</h3><p class="small muted">${t("Micro-stepping drivers for smooth operation.", "细分驱动器，运行平稳。", "滑らかな動作のためのマイクロステップドライバ。")}</p><div class="card-tags"><span class="tag">${t("Drivers", "驱动器", "ドライバ")}</span></div></div></div></a>
      ${secondCard}
    </div>
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

  return {
    file,
    title,
    desc,
    crumb: [
      { name: t("Home", "首页", "ホーム"), to: "index.html" },
      { name: t("Stepper Motors", "步进电机", "ステッピングモーター"), to: "stepper-motor.html" },
      { name: catName, to: cat.file },
    ],
    body,
  };
}
