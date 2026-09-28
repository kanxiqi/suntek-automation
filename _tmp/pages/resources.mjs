/* Resources / downloads — trilingual body */
import { str, CONTACT, augment } from "../i18n.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("CAD & Datasheet Downloads — Gearbox & Stepper Files | PLTBR", "CAD 与数据手册下载 — 减速机与电机文件 | 普兰特", "CAD・データシートダウンロード — ギヤ＆ステッピングファイル | PLTBR");
  const desc = t("Download PLTBR product catalog, selection guide, planetary gearbox CAD (STEP/IGES) and stepper motor CAD files. Enter your work email to access.", "下载普兰特产品样本、选型指南、行星减速机 CAD（STEP/IGES）与步进电机 CAD 文件。输入工作邮箱即可获取。", "PLTBRの製品カタログ・選定ガイド・プラネタリーギヤCAD（STEP/IGES）・ステッピングモーターCADをダウンロード。勤務先メールでアクセスできます。");

  const items = [
    { icon: "PDF", title: { en: "Full product catalog", zh: "完整产品样本", ja: "総合製品カタログ" }, meta: { en: "All series, specs and dimension drawings in one PDF.", zh: "全部系列、参数与尺寸图汇总 PDF。", ja: "全シリーズの仕様・寸法図を1つのPDFに。" }, tag: "PDF" },
    { icon: "PDF", title: { en: "Selection guide", zh: "选型指南", ja: "選定ガイド" }, meta: { en: "Step-by-step sizing for torque, speed and ratio.", zh: "扭矩、转速与速比的逐步选型方法。", ja: "トルク・回転数・減速比の段階的選定。" }, tag: "PDF" },
    { icon: "CAD", title: { en: "Planetary gearbox CAD", zh: "行星减速机 CAD", ja: "プラネタリーギヤCAD" }, meta: { en: "STEP and IGES for PG28–PG62, all ratios.", zh: "PG28–PG62 全速比的 STEP 与 IGES。", ja: "PG28〜PG62・全減速比のSTEP/IGES。" }, tag: "STEP / IGES" },
    { icon: "CAD", title: { en: "Stepper motor CAD", zh: "步进电机 CAD", ja: "ステッピングモーターCAD" }, meta: { en: "STEP and IGES for NEMA 8–42 frames.", zh: "NEMA 8–42 机座的 STEP 与 IGES。", ja: "NEMA 8〜42フレームのSTEP/IGES。" }, tag: "STEP / IGES" },
  ];

  augment(items);
  const list = items.map((it) => `
    <div class="resource-item">
      <span class="icon-badge">${it.icon}</span>
      <div><strong>${it.title[lang]}</strong><small>${it.meta[lang]}</small></div>
      <span class="tag tag--outline">${it.tag}</span>
    </div>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Resources", "资源下载", "資料ダウンロード")}</span></nav>
    <h1 class="h1">${t("CAD files, catalog and selection guide.", "CAD 文件、样本与选型指南。", "CADファイル・カタログ・選定ガイド。")}</h1>
    <p class="lede">${t("STEP and IGES models for every series, the full PDF catalog, and a step-by-step selection guide. Enter your work email to access the downloads.", "各系列的 STEP / IGES 模型、完整 PDF 样本，以及逐步选型指南。输入工作邮箱即可获取。", "全シリーズのSTEP/IGESモデル、完全版PDFカタログ、ステップ式選定ガイド。勤務先メールでダウンロードできます。")}</p>
  </div>
</div>

<section class="section section--paper">
  <div class="container" style="max-width:820px;">
    <div class="form-card" data-gate="#downloads">
      <h3 class="h3">${t("Unlock downloads", "解锁下载", "ダウンロードを解除")}</h3>
      <p class="small muted" style="margin-top:8px;">${t("Enter your work email to access the PDF catalog, CAD files and selection guide.", "输入工作邮箱即可获取 PDF 样本、CAD 文件与选型指南。", "勤務先メールを入力すると、PDFカタログ・CAD・選定ガイドにアクセスできます。")}</p>
      <div class="inline-form" style="margin-top:16px;">
        <div class="field"><label for="dl-email">${t("Work email", "工作邮箱", "勤務先メール")}</label><input id="dl-email" type="email" placeholder="name@company.com" autocomplete="email"></div>
        <button class="btn btn--accent" type="button">${t("Access Downloads", "获取下载", "ダウンロードへ")}</button>
      </div>
    </div>

    <div id="downloads" hidden style="margin-top:24px;">
      <div class="resource-list">${list}</div>
      <p class="table-note" style="margin-top:14px;">${t("Files are provided in this build as placeholders — drop your real PDFs and CAD archives into the files/ folder.", "本版本中的文件为占位——请将真实 PDF 与 CAD 压缩包放入 files/ 目录。", "このビルドのファイルはプレースホルダーです。実際のPDF・CADアーカイブはfiles/フォルダへ配置してください。")}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px;">
    <div class="split">
      <div>
        <h2 class="h2">${t("Need a file that isn't listed?", "需要未列出的文件？", "一覧にないファイルが必要ですか？")}</h2>
        <p class="muted">${t("Custom formats, native CAD, or a 3D model of a custom configuration — request it and we'll generate it within 48 hours.", "定制格式、原生 CAD 或定制配置的 3D 模型——提出需求，我们 48 小时内生成。", "カスタム形式・ネイティブCAD・カスタム構成の3Dモデル——ご依頼いただければ48時間以内に作成します。")}</p>
      </div>
      <div class="btn-row" style="justify-content:flex-end;"><a class="btn btn--accent" href="contact.html">${t("Request a File", "索取文件", "ファイルを請求")}</a></div>
    </div>
  </div>
</section>
`;

  return { file: "resources.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("gearbox CAD download, stepper motor CAD, datasheet PDF, selection guide", "减速机CAD下载, 步进电机CAD, 数据手册PDF, 选型指南", "ギヤCAD, ステッピングモーターCAD, データシート, 選定ガイド"), body };
}
