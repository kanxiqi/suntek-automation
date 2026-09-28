/* PG42 planetary gearbox product detail — trilingual body */
import { str, CONTACT, DOMAIN } from "../i18n.mjs";
import { pg42Drawing } from "../drawings.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("PG42 Planetary Gearbox — 42 mm, Backlash ≤3 arcmin | PLTBR", "PG42 行星减速机 — 42 mm，背隙 ≤3 arcmin | 普兰特", "PG42プラネタリーギヤボックス — 42mm、バックラッシ≤3arcmin | PLTBR");
  const desc = t("PG42 planetary gearbox (42 mm). Ratios 3.6:1–100:1, backlash ≤3 arcmin, torque to 30 N·m. Direct-mount NEMA 17/23. CAD files available.", "PG42 行星减速机（42 mm）。速比 3.6:1–100:1，背隙 ≤3 arcmin，扭矩至 30 N·m。直装 NEMA 17/23。提供 CAD 文件。", "PG42プラネタリーギヤボックス（42mm）。減速比3.6:1〜100:1、バックラッシ≤3arcmin、トルク30N·mまで。NEMA 17/23に直付け。CAD提供。");

  const faqs = [
    [t("What is the difference between the standard and precision PG42?", "标准版与精密版 PG42 有何区别？", "標準タイプと精密タイプのPG42の違いは？"),
     t("The standard PG42 has ≤ 7 arcmin backlash. The precision class uses a hardened helical final stage and preloaded carrier for ≤ 3 arcmin, suited to robotics joints and servo-like positioning.", "标准 PG42 背隙 ≤ 7 arcmin；精密级采用淬硬斜齿轮末级与预紧行星架，背隙 ≤ 3 arcmin，适合机器人关节与类伺服定位。", "標準PG42はバックラッシ≤7arcmin。精密タイプは焼入はすば歯車の最終段と予圧キャリアにより≤3arcminを実現し、ロボット関節やサーボ相当の位置決めに適します。")],
    [t("Which motors mount to the PG42?", "PG42 可安装哪些电机？", "PG42に取り付け可能なモーターは？"),
     t("The PG42 mounts directly to NEMA 17 and NEMA 23 stepper motors, and can be adapted to brushless DC and servo motors with a custom input flange.", "PG42 可直接安装 NEMA 17 与 NEMA 23 步进电机，也可通过定制输入法兰适配无刷直流与伺服电机。", "PG42はNEMA 17・NEMA 23ステッピングモーターに直付けでき、カスタム入力フランジでブラシレスDC・サーボモーターにも対応します。")],
    [t("How do I choose the right ratio?", "如何选择合适的速比？", "適切な減速比の選び方は？"),
     t("Divide your required output speed into the motor's rated speed, then check the resulting output torque stays within the gearbox rating with a safety margin.", "用电机额定转速除以所需输出转速，再确认输出扭矩在减速机额定范围内并留有余量。", "必要な出力回転数をモーターの定格回転数で割り、出力トルクがギヤボックス定格内に収まるか安全率を確認します。")],
    [t("Can I get a hollow output shaft?", "可以提供空心输出轴吗？", "中空出力シャフトは可能ですか？"),
     t("Yes. The PG42 is available with a solid, keyed or hollow output shaft, plus custom mounting flanges machined in-house.", "可以。PG42 可选实心轴、带键轴或空心轴，并可厂内定制安装法兰。", "可能です。PG42は中実・キー付き・中空の出力シャフトに対応し、カスタムフランジも自社で加工します。")],
    [t("What are the efficiency and service life?", "效率与使用寿命如何？", "効率と寿命は？"),
     t("Single-stage efficiency is about 96%. Rated service life is 20,000 hours at rated torque with standard lubrication.", "单级效率约 96%。标准润滑下额定扭矩的额定寿命为 20,000 小时。", "1段の効率は約96%。標準潤滑・定格トルクで定格寿命20,000時間です。")],
  ];

  const faqLd = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f[0], acceptedAnswer: { "@type": "Answer", text: f[1] } })),
  };

  const faqHtml = faqs.map((f) => `<details class="faq-item"><summary>${f[0]}</summary><div class="faq-body">${f[1]}</div></details>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="planetary-gearbox.html">${t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス")}</a><span>/</span><span aria-current="page">PG42</span></nav>
    <span class="crossline">${t("Planetary gearbox · 42 mm", "行星减速机 · 42 mm", "プラネタリーギヤ · 42mm")}</span>
    <h1 class="h1">${t("PG42 planetary gearbox, backlash down to 3 arcmin.", "PG42 行星减速机，背隙低至 3 arcmin。", "PG42プラネタリーギヤ、バックラッシ3arcminまで。")}</h1>
    <p class="lede">${t("Our most-requested frame for AGV wheel drives and robotic joints. Hardened steel gears, one-piece planet carrier, and direct mounting to NEMA 17 and 23 motors.", "AGV 轮驱与机器人关节最常用的机座。淬硬钢齿轮、一体式行星架，可直装 NEMA 17 / 23 电机。", "AGV車輪駆動・ロボット関節で最も採用されるフレーム。焼入鋼歯車・一体型キャリア、NEMA 17/23に直付け可能です。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="detail-grid">
      <div class="detail-main">
        <h2 class="h3" style="margin-bottom:14px;">${t("Key specifications", "主要参数", "主要仕様")}</h2>
        <div class="kv-list">
          <div><span>${t("Frame size", "机座尺寸", "フレームサイズ")}</span><strong>42 mm</strong></div>
          <div><span>${t("Ratios", "速比", "減速比")}</span><strong>3.6:1 – 100:1</strong></div>
          <div><span>${t("Stages", "级数", "段数")}</span><strong>1 / 2 / 3</strong></div>
          <div><span>${t("Backlash", "背隙", "バックラッシ")}</span><strong>≤ 7 / ≤ 3 arcmin</strong></div>
          <div><span>${t("Rated torque", "额定扭矩", "定格トルク")}</span><strong>15 N·m</strong></div>
          <div><span>${t("Max torque", "最大扭矩", "最大トルク")}</span><strong>30 N·m</strong></div>
          <div><span>${t("Efficiency", "效率", "効率")}</span><strong>96% (1-stage)</strong></div>
          <div><span>${t("Motor mount", "电机安装", "モーター取付")}</span><strong>NEMA 17 / 23</strong></div>
        </div>
        <div class="btn-row" style="margin-top:20px;">
          <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
          <a class="btn btn--ghost" href="resources.html">${t("Download CAD", "下载 CAD", "CADをダウンロード")}</a>
        </div>
      </div>
      <div class="detail-aside">
        <div class="media-frame media-frame--1x1 media-frame--drawing">${pg42Drawing}</div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Specifications", "技术参数", "仕様")}</span><h2 class="h2">${t("Ratings by stage and ratio.", "按级数与速比的额定值。", "段数・減速比別の定格。")}</h2></div>
    <div class="table-scroll">
      <table class="data">
        <thead><tr><th>${t("Stage", "级数", "段数")}</th><th class="num">${t("Ratio range", "速比范围", "減速比範囲")}</th><th class="num">${t("Rated torque (N·m)", "额定扭矩 (N·m)", "定格トルク(N·m)")}</th><th class="num">${t("Max torque (N·m)", "最大扭矩 (N·m)", "最大トルク(N·m)")}</th><th class="num">${t("Backlash (arcmin)", "背隙 (arcmin)", "バックラッシ(arcmin)")}</th><th class="num">${t("Efficiency", "效率", "効率")}</th></tr></thead>
        <tbody>
          <tr><td>1</td><td class="num">3.6–10</td><td class="num">15</td><td class="num">30</td><td class="num">≤ 7 / 3</td><td class="num">96%</td></tr>
          <tr><td>2</td><td class="num">15–40</td><td class="num">15</td><td class="num">30</td><td class="num">≤ 10 / 5</td><td class="num">92%</td></tr>
          <tr><td>3</td><td class="num">50–100</td><td class="num">10</td><td class="num">20</td><td class="num">≤ 12 / 7</td><td class="num">89%</td></tr>
        </tbody>
      </table>
    </div>
    <p class="table-note">${t("Solid, keyed and hollow output shafts available; custom flanges machined to order.", "可选实心轴、带键轴与空心轴；法兰可定制加工。", "中実・キー付き・中空出力シャフトに対応。フランジは受注加工。")}</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Compatibility", "兼容性", "互換性")}</span><h2 class="h2">${t("Mounts directly to NEMA 17 and 23.", "可直装 NEMA 17 与 23。", "NEMA 17・23に直付け。")}</h2></div>
    <div class="grid-2">
      <a class="card-link" href="nema-23-stepper-motor.html"><div class="card"><div class="card-body">
        <h3>NEMA 23 ${t("stepper motor", "步进电机", "ステッピングモーター")}</h3><p class="small muted">${t("57 × 57 mm, 0.6–3.0 N·m holding torque. The most common pairing for CNC and robotics.", "57 × 57 mm，0.6–3.0 N·m 保持扭矩。CNC 与机器人最常用搭配。", "57×57mm、0.6〜3.0N·m保持トルク。CNC・ロボットで最も一般的な組み合わせ。")}</p>
        <div class="card-tags"><span class="tag">${t("Recommended pairing", "推荐搭配", "推奨の組み合わせ")}</span></div>
      </div></div></a>
      <a class="card-link" href="stepper-motor.html"><div class="card"><div class="card-body">
        <h3>NEMA 17 ${t("stepper motor", "步进电机", "ステッピングモーター")}</h3><p class="small muted">${t("42 × 42 mm for compact drives. Ideal where space is tighter than torque demand.", "42 × 42 mm 紧凑驱动。适合空间比扭矩更紧张的场合。", "42×42mmのコンパクト駆動。スペースがトルクより厳しい場合に最適。")}</p>
        <div class="card-tags"><span class="tag">${t("Compact build", "紧凑方案", "コンパクト")}</span></div>
      </div></div></a>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Applications", "应用", "用途")}</span><h2 class="h2">${t("Where the PG42 is specified.", "PG42 的应用场景。", "PG42が採用される用途。")}</h2></div>
    <div class="grid-4">
      <div class="card"><div class="card-body"><h3 class="h4">AGV / AMR</h3><p class="small muted">${t("Compact wheel and steering drives.", "紧凑轮驱与转向驱动。", "コンパクトな車輪・操舵駆動。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Robotics", "机器人", "ロボット")}</h3><p class="small muted">${t("Joint drives needing ≤ 3 arcmin.", "需要 ≤ 3 arcmin 的关节驱动。", "≤3arcminが求められる関節駆動。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Medical", "医疗", "医療")}</h3><p class="small muted">${t("Silent, clean actuation.", "安静、洁净的驱动。", "静かでクリーンな動作。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Packaging", "包装", "包装")}</h3><p class="small muted">${t("High-cycle indexing mechanisms.", "高节拍分度机构。", "高サイクルの間欠機構。")}</p></div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:820px;">
    <div class="section-head"><span class="crossline">FAQ</span><h2 class="h2">${t("Common questions.", "常见问题。", "よくあるご質問。")}</h2></div>
    <div class="faq">${faqHtml}</div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="split split--start">
      <div>
        <span class="crossline">${t("Get a quote", "获取报价", "お見積もり")}</span>
        <h2 class="h2">${t("Request pricing for the PG42.", "索取 PG42 报价。", "PG42のお見積もりを依頼。")}</h2>
        <p class="muted">${t("Tell us your ratio, output torque and motor, and we'll quote a matched gearmotor assembly.", "告知速比、输出扭矩与电机，我们将为你报出匹配的减速电机组合。", "減速比・出力トルク・モーターをお知らせください。マッチングしたギヤモーターを提案します。")}</p>
      </div>
      <div class="form-card">
        <form data-inquiry data-mailto="${CONTACT.email}" data-subject="RFQ PG42" novalidate>
          <div class="form-grid">
            <div class="field"><label for="g-name">${t("Name", "姓名", "お名前")} <span class="req">*</span></label><input id="g-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="g-email">${t("Email", "邮箱", "メール")} <span class="req">*</span></label><input id="g-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="g-company">${t("Company", "公司", "会社名")}</label><input id="g-company" name="company" autocomplete="organization"></div>
            <div class="field"><label for="g-country">${t("Country", "国家/地区", "国・地域")} <span class="req">*</span></label><input id="g-country" name="country" required autocomplete="country-name"></div>
            <div class="field full"><label for="g-model">${t("Model / parameters", "型号/参数", "モデル・仕様")}</label><input id="g-model" name="model" value="PG42 — "></div>
            <div class="field full"><label for="g-msg">${t("Message", "留言", "メッセージ")} <span class="req">*</span></label><textarea id="g-msg" name="message" required></textarea></div>
          </div>
          <button class="btn btn--accent btn--block" type="submit" style="margin-top:16px;">${t("Send Inquiry", "提交询价", "送信する")}</button>
          <p class="form-status" role="status"></p>
        </form>
      </div>
    </div>
  </div>
</section>
`;

  const extraLd = (l) => [
    {
      "@type": "Product",
      name: t("PG42 Planetary Gearbox (42 mm)", "PG42 行星减速机（42 mm）", "PG42プラネタリーギヤボックス（42mm）"),
      image: DOMAIN + "/img/products/planetary-gearbox/pg42.webp",
      description: desc,
      brand: { "@type": "Brand", name: "PLTBR Precision Motion" },
      sku: "PG42",
    },
    faqLd,
  ];

  return { file: "pg42-planetary-gearbox.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス"), to: "planetary-gearbox.html" }], keywords: t("PG42 planetary gearbox, 42mm gearbox, low backlash gearbox, NEMA 17 gearbox", "PG42行星减速机, 42mm减速机, 低背隙减速机, NEMA 17减速机", "PG42, プラネタリーギヤ, 42mm, 低バックラッシ"), body, extraLd };
}
