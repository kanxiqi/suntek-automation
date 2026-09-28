/* Blog / selection guide — trilingual body */
import { str, augment } from "../i18n.mjs";

const POSTS = [
  { cat: { en: "Gearboxes", zh: "减速机", ja: "ギヤボックス" }, date: "2026-09-25",
    t: { en: "Planetary gearbox rated output torque explained", zh: "行星减速机额定输出扭矩参数说明", ja: "プラネタリーギヤボックスの定格出力トルクとは" },
    d: { en: "What rated output torque means, how it differs from peak torque, and how to apply a safety factor when sizing.", zh: "额定输出扭矩的含义、与峰值扭矩的区别，以及选型时如何留安全系数。", ja: "定格出力トルクの意味、ピークトルクとの違い、選定時の安全率の取り方。" } },
  { cat: { en: "Selection", zh: "选型", ja: "選定" }, date: "2026-09-12",
    t: { en: "How to size a planetary gearbox for your stepper motor", zh: "如何为步进电机选配行星减速机", ja: "ステッピングモーター用プラネタリーギヤの選定方法" },
    d: { en: "Torque, speed and inertia — the three numbers that decide your ratio, and how to check the load against them.", zh: "扭矩、转速与惯量——决定速比的三个关键数字，以及如何校核负载。", ja: "トルク・回転数・慣性——減速比を決める3つの数字と、負荷の照合方法。" } },
  { cat: { en: "Stepper motors", zh: "步进电机", ja: "ステッピング" }, date: "2026-08-28",
    t: { en: "2-phase vs 3-phase vs closed-loop: which stepper?", zh: "两相 vs 三相 vs 闭环：选哪种步进电机？", ja: "2相 vs 3相 vs クローズドループ：どれを選ぶ？" },
    d: { en: "A plain-language comparison of step smoothness, torque and cost across the three common types.", zh: "用直白语言对比三种常见类型的步进平稳性、扭矩与成本。", ja: "3タイプのステップ滑らかさ・トルク・コストを平易に比較。" } },
  { cat: { en: "Gearboxes", zh: "减速机", ja: "ギヤボックス" }, date: "2026-08-14",
    t: { en: "Backlash explained: what an arcmin really means", zh: "背隙解析：arcmin 到底意味着什么", ja: "バックラッシ解説：arcminの本当の意味" },
    d: { en: "How lost motion at the output shaft translates into positioning error, and when ≤ 3 arcmin is worth it.", zh: "输出轴的空回如何转化为定位误差，以及何时值得选择 ≤ 3 arcmin。", ja: "出力軸のロストモーションが位置決め誤差にどう影響するか、≤3arcminが価値を持つ場面。" } },
  { cat: { en: "Drives", zh: "驱动", ja: "駆動" }, date: "2026-07-30",
    t: { en: "Closed-loop stepper vs servo: when to upgrade", zh: "闭环步进 vs 伺服：何时升级", ja: "クローズドループステッピング vs サーボ：切り替えの判断" },
    d: { en: "Where a closed-loop hybrid closes the gap with a servo — and where a servo still wins.", zh: "闭环混合式在哪些场合逼近伺服，而伺服又在哪些场合仍占优。", ja: "クローズドループがサーボに迫る場面と、サーボがなお勝る場面。" } },
  { cat: { en: "Selection", zh: "选型", ja: "選定" }, date: "2026-07-16",
    t: { en: "Choosing the right gear ratio: torque vs speed", zh: "选择合适速比：扭矩与转速的权衡", ja: "適切な減速比の選び方：トルクと回転数のバランス" },
    d: { en: "Why 10:1 isn't always the answer, and how to balance output speed against available torque.", zh: "为什么 10:1 并不总是答案，以及如何权衡输出转速与可用扭矩。", ja: "10:1が常に正解ではない理由と、出力回転数とトルクのバランスの取り方。" } },
  { cat: { en: "Maintenance", zh: "维护", ja: "メンテナンス" }, date: "2026-06-30",
    t: { en: "Extending service life: lubrication and mounting", zh: "延长寿命：润滑与安装", ja: "寿命を延ばす：潤滑と取付" },
    d: { en: "The two things that most affect gearbox life — and how to get them right from day one.", zh: "最影响减速机寿命的两件事——以及如何从第一天就做对。", ja: "ギヤボックスの寿命に最も影響する2点と、最初から正しく行う方法。" } },
];

export function page(lang) {
  augment(POSTS);
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Selection Guide & Articles — Stepper & Gearbox Sizing | PLTBR", "选型指南与文章 — 步进与减速机选型 | 普兰特", "選定ガイド＆記事 — ステッピング・ギヤ選定 | PLTBR");
  const desc = t("Practical engineering guides for sizing planetary gearboxes and stepper motors — written by our application engineers.", "由应用工程师撰写的行星减速机与步进电机选型实用指南。", "アプリケーションエンジニアが執筆した、プラネタリーギヤ＆ステッピングモーター選定の実践ガイド。");

  const cards = POSTS.map((p) => `
    <article class="post-card">
      <div class="post-body">
        <div class="post-meta"><span>${p.cat[lang]}</span><span>${p.date}</span></div>
        <h3>${p.t[lang]}</h3>
        <p class="small muted">${p.d[lang]}</p>
      </div>
    </article>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Selection Guide", "选型指南", "選定ガイド")}</span></nav>
    <h1 class="h1">${t("Practical guides for choosing motion.", "选择运动组件的实用指南。", "モーション選定の実践ガイド。")}</h1>
    <p class="lede">${t("Short, technical articles on sizing gearboxes and stepper motors — written by our application engineers, not a marketing team.", "关于减速机与步进电机选型的短篇技术文章——由应用工程师撰写，而非营销团队。", "ギヤボックスとステッピングモーターの選定に関する短い技術記事——マーケティングではなく、アプリケーションエンジニアが執筆。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="catalog-grid">${cards}</div>
  </div>
</section>

<section class="cta-band">
  <div class="container cta-inner">
    <div>
      <h2>${t("Prefer to just ask?", "更想直接咨询？", "直接相談したいですか？")}</h2>
      <p>${t("Send your load data and an engineer will size the drivetrain for you — free, with a recommendation and price within one business day.", "发送负载数据，工程师将免费为你选型——一个工作日内给出建议与报价。", "負荷データをお送りいただければ、エンジニアが無料で選定し、1営業日以内に提案と価格をご返信します。")}</p>
    </div>
    <div class="btn-row"><a class="btn btn--light" href="contact.html">${t("Ask an Engineer", "咨询工程师", "エンジニアに相談")}</a></div>
  </div>
</section>
`;

  return { file: "blog.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("stepper motor selection guide, gearbox sizing, backlash explained, gear ratio", "步进电机选型指南, 减速机选型, 背隙解析, 速比", "ステッピングモーター選定, ギヤ選定, バックラッシ, 減速比"), body };
}
