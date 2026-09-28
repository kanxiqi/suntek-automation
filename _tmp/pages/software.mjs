/* Software & tools — trilingual body */
import { str, CONTACT, augment } from "../i18n.mjs";

const TOOLS = [
  { n: "01", t: { en: "Gearbox selection tool", zh: "减速机选型工具", ja: "ギヤボックス選定ツール" },
    d: { en: "Enter load, speed and ratio to get a shortlist of PG series frames.", zh: "输入负载、转速与速比，快速筛选出合适的 PG 系列机座。", ja: "負荷・回転数・減速比を入力すると、PGシリーズの候補を絞り込みます。" } },
  { n: "02", t: { en: "Torque & ratio calculator", zh: "扭矩与速比计算器", ja: "トルク・減速比計算ツール" },
    d: { en: "Convert between motor speed, output speed and required torque with safety margin.", zh: "在电机转速、输出转速与所需扭矩之间换算，并预留安全系数。", ja: "モーター回転数・出力回転数・必要トルクを安全率込みで換算します。" } },
  { n: "03", t: { en: "Load inertia calculator", zh: "负载惯量计算器", ja: "負荷イナーシャ計算ツール" },
    d: { en: "Check reflected inertia against the motor to avoid oversizing or missed steps.", zh: "校核折算惯量，避免选型过大或失步。", ja: "モーターに対する換算イナーシャを照合し、過大選定や脱調を防ぎます。" } },
  { n: "04", t: { en: "CAD / STEP viewer", zh: "CAD / STEP 在线预览", ja: "CAD / STEP ビューア" },
    d: { en: "Inspect 3D models of every series before downloading the full CAD package.", zh: "下载完整 CAD 前，可先在线预览各系列 3D 模型。", ja: "CAD一式をダウンロードする前に、全シリーズの3Dモデルを確認できます。" } },
  { n: "05", t: { en: "Product configurator", zh: "产品配置器", ja: "製品コンフィギュレーター" },
    d: { en: "Build a part number by selecting frame, ratio, backlash class and shaft type.", zh: "按机座、速比、背隙等级与轴型生成型号。", ja: "フレーム・減速比・バックラッシ・シャフトを選んで型番を生成します。" } },
  { n: "06", t: { en: "Selection guide PDF", zh: "选型指南 PDF", ja: "選定ガイド PDF" },
    d: { en: "A step-by-step sizing reference you can keep offline for your design reviews.", zh: "可离线保存的逐步选型参考，适合设计评审。", ja: "設計レビューに使える、オフラインでも参照できるステップ式選定資料。" } },
];

export function page(lang) {
  augment(TOOLS);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Software & Tools — Gearbox & Stepper Selection | PLTBR", "软件及工具 — 减速机与步进选型 | 普兰特", "ソフトウェア・ツール — ギヤ＆ステッピング選定 | PLTBR");
  const desc = t("PLTBR selection tools: gearbox selector, torque & ratio calculator, inertia calculator, CAD viewer and product configurator for planetary gearboxes and stepper motors.", "普兰特选型工具：减速机选型、扭矩/速比计算、惯量计算、CAD 预览与产品配置器，服务行星减速机与步进电机。", "PLTBRの選定ツール：ギヤ選定・トルク/減速比計算・イナーシャ計算・CADビューア・コンフィギュレーター。プラネタリーギヤ＆ステッピングモーターに対応。");

  const cards = TOOLS.map((x) => `
    <div class="card reveal">
      <div class="card-body">
        <span class="card-num">${x.n}</span>
        <h3 class="h4" style="margin-top:8px;">${x.t[lang]}</h3>
        <p class="small muted" style="margin-top:8px;">${x.d[lang]}</p>
      </div>
    </div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="resources.html">${t("Resources", "资源中心", "資料センター")}</a><span>/</span><span aria-current="page">${t("Software & Tools", "软件及工具", "ソフトウェア・ツール")}</span></nav>
    <h1 class="h1">${t("Tools to size the right drive.", "选对驱动的实用工具。", "最適なドライブを選定するためのツール。")}</h1>
    <p class="lede">${t("Free selection tools to help your engineering team choose frames, ratios and torque ratings — built around our standard catalog.", "免费的选型工具，帮助工程团队确定机座、速比与扭矩等级——基于我们的标准产品目录。", "標準カタログに基づく無料の選定ツール。フレーム・減速比・トルクの選定をサポートします。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="auto-grid">${cards}</div>
    <div class="note" style="margin-top:28px;">
      <strong>${t("Interactive tools are being finalized.", "交互式工具正在上线中。", "インタラクティブツールは準備中です。")}</strong> ${t(
        "In the meantime, send your load data and an application engineer will run the sizing for you and return a recommendation within one business day.",
        "在此之前，可发送负载数据，应用工程师将为你完成选型，并在一个工作日内回复建议。",
        "準備が整うまでの間は、負荷データをお送りいただければアプリケーションエンジニアが選定し、1営業日以内に提案をご返信します。"
      )}
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Need the full datasheet set?", "需要完整数据手册？", "全データシートが必要ですか？")}</h2>
      <p>${t("Download the complete catalog and CAD files from the resources center.", "前往资源中心下载完整样本与 CAD 文件。", "資料センターから完全版カタログとCADファイルをダウンロードできます。")}</p>
    </div>
    <div class="btn-row">
      <a class="btn btn--light" href="resources.html">${t("Resources", "资源下载", "資料ダウンロード")}</a>
      <a class="btn btn--outline-light" href="contact.html">${t("Ask an Engineer", "咨询工程师", "エンジニアに相談")}</a>
    </div>
  </div>
</section>
`;

  return { file: "software.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Resources", "资源中心", "資料センター"), to: "resources.html" }], keywords: t("gearbox selection tool, torque calculator, inertia calculator, stepper motor configurator", "减速机选型工具, 扭矩计算器, 惯量计算器, 步进电机配置器", "ギヤ選定ツール, トルク計算, イナーシャ計算, コンフィギュレーター"), body };
}
