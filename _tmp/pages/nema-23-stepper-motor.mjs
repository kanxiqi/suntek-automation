/* NEMA 23 stepper motor product detail — trilingual body */
import { str, CONTACT, DOMAIN } from "../i18n.mjs";
import { nema23Drawing } from "../drawings.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("NEMA 23 Stepper Motor — 57 mm, 1.8° Factory | PLTBR", "NEMA 23 步进电机 — 57 mm，1.8° 工厂 | 普兰特", "NEMA 23ステッピングモーター — 57mm、1.8° 工場 | PLTBR");
  const desc = t("NEMA 23 stepper motor (57 mm). 0.6–3.0 N·m holding torque, 2-phase/3-phase/closed-loop. Custom shafts, windings and cables. CAD files available.", "NEMA 23 步进电机（57 mm）。0.6–3.0 N·m 保持扭矩，两相/三相/闭环。可定制轴、绕组与线缆。提供 CAD 文件。", "NEMA 23ステッピングモーター（57mm）。0.6〜3.0N·m保持トルク、2相/3相/クローズドループ。シャフト・巻線・ケーブルをカスタム可能。CAD提供。");

  const faqs = [
    [t("What is the difference between 2-phase and 3-phase NEMA 23 motors?", "两相与三相 NEMA 23 有何区别？", "2相と3相のNEMA 23の違いは？"),
     t("2-phase motors (1.8° step) are the most common and easiest to drive. 3-phase motors (1.2° step) run smoother and quieter with less resonance, better for high-speed or low-vibration applications.", "两相（1.8° 步距）最常见、最易驱动；三相（1.2° 步距）运行更平稳安静、共振更小，适合高速或低振动场合。", "2相（1.8°ステップ）は最も一般的で駆動が簡単。3相（1.2°ステップ）は共振が少なく滑らかで静か、高速・低振動の用途に適します。")],
    [t("Do you offer a closed-loop NEMA 23 with an encoder?", "提供带编码器的闭环 NEMA 23 吗？", "エンコーダ付きクローズドループNEMA 23はありますか？"),
     t("Yes. Our closed-loop hybrids pair a 1000-line incremental encoder with the motor so the drive can detect and correct lost steps, eliminating stalling under overload.", "可以。闭环混合式将 1000 线增量编码器与电机集成，驱动器可检测并纠正失步，杜绝过载堵转。", "可能です。クローズドループは1000パルスインクリメンタルエンコーダを搭載し、ドライバが脱調を検知・補正。過負荷での停止を防ぎます。")],
    [t("Which planetary gearbox pairs with a NEMA 23?", "NEMA 23 可搭配哪些行星减速机？", "NEMA 23に合うプラネタリーギヤは？"),
     t("Our PG42 and PG52 series mount directly to NEMA 23. Typical ratios are 5:1, 10:1 and 20:1.", "PG42 与 PG52 系列可直装 NEMA 23。常用速比 5:1、10:1、20:1。", "PG42・PG52シリーズがNEMA 23に直付けできます。代表的な減速比は5:1、10:1、20:1。")],
    [t("Can I get a custom shaft, winding or cable?", "可以定制轴、绕组或线缆吗？", "シャフト・巻線・ケーブルのカスタムは可能ですか？"),
     t("Yes. We machine shafts to drawing, wind to your voltage and current, and build custom cable lengths with your connector — no minimum for prototyping.", "可以。按图纸加工轴、按电压电流绕线，并按你的接插件定制线缆长度——打样无起订量。", "可能です。図面通りにシャフトを加工し、ご指定の電圧・電流で巻線、コネクタ付きのケーブル長をカスタム——試作の最低数量なし。")],
    [t("What is the MOQ and lead time?", "起订量与交期如何？", "MOQと納期は？"),
     t("Prototype samples in 1–5 pieces ship within 48 hours. Production MOQ is 100 pieces with a 15–25 day lead time.", "1–5 件样机 48 小时内发货；量产起订 100 件，交期 15–25 天。", "試作1〜5個は48時間以内に出荷。量産MOQは100個、納期15〜25日。")],
  ];

  const faqLd = { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f[0], acceptedAnswer: { "@type": "Answer", text: f[1] } })) };
  const faqHtml = faqs.map((f) => `<details class="faq-item"><summary>${f[0]}</summary><div class="faq-body">${f[1]}</div></details>`).join("\n");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><a href="stepper-motor.html">${t("Stepper Motors", "步进电机", "ステッピングモーター")}</a><span>/</span><span aria-current="page">NEMA 23</span></nav>
    <span class="crossline">${t("Stepper motor · 57 × 57 mm", "步进电机 · 57 × 57 mm", "ステッピングモーター · 57×57mm")}</span>
    <h1 class="h1">${t("NEMA 23 stepper motor, holding torque up to 3.0 N·m.", "NEMA 23 步进电机，保持扭矩最高 3.0 N·m。", "NEMA 23ステッピングモーター、保持トルク3.0N·mまで。")}</h1>
    <p class="lede">${t("The workhorse frame for CNC, robotics and packaging. Choose 2-phase, 3-phase or closed-loop hybrid — all with high-torque rotor design and custom options.", "CNC、机器人与包装的主力机座。可选两相、三相或闭环混合式——均采用高扭矩转子设计并支持定制。", "CNC・ロボット・包装の主力フレーム。2相・3相・クローズドループから選択でき、すべて高トルクロータ設計でカスタムに対応。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="detail-grid">
      <div class="detail-main">
        <h2 class="h3" style="margin-bottom:14px;">${t("Key specifications", "主要参数", "主要仕様")}</h2>
        <div class="kv-list">
          <div><span>${t("Frame size", "机座尺寸", "フレームサイズ")}</span><strong>57 × 57 mm</strong></div>
          <div><span>${t("Step angle", "步距角", "ステップ角")}</span><strong>1.8° / 0.9°</strong></div>
          <div><span>${t("Holding torque", "保持扭矩", "保持トルク")}</span><strong>0.6 – 3.0 N·m</strong></div>
          <div><span>${t("Rated current", "额定电流", "定格電流")}</span><strong>2.0 – 5.6 A</strong></div>
          <div><span>${t("Shaft", "轴", "シャフト")}</span><strong>Ø 6.35 / 8 mm</strong></div>
          <div><span>${t("Winding options", "绕组选项", "巻線オプション")}</span><strong>${t("Bipolar / unipolar", "双极 / 单极", "バイポーラ / ユニポーラ")}</strong></div>
        </div>
        <div class="btn-row" style="margin-top:20px;">
          <a class="btn btn--accent" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
          <a class="btn btn--ghost" href="resources.html">${t("Download CAD", "下载 CAD", "CADをダウンロード")}</a>
        </div>
      </div>
      <div class="detail-aside">
        <div class="media-frame media-frame--1x1 media-frame--drawing">${nema23Drawing}</div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Specifications", "技术参数", "仕様")}</span><h2 class="h2">${t("Electrical and mechanical ratings.", "电气与机械额定值。", "電気・機械定格。")}</h2></div>
    <div class="table-scroll">
      <table class="data">
        <thead><tr><th>${t("Model", "型号", "モデル")}</th><th class="num">${t("Holding torque (N·m)", "保持扭矩 (N·m)", "保持トルク(N·m)")}</th><th class="num">${t("Current (A)", "电流 (A)", "電流(A)")}</th><th class="num">${t("Resistance (Ω)", "电阻 (Ω)", "抵抗(Ω)")}</th><th class="num">${t("Inertia (g·cm²)", "惯量 (g·cm²)", "慣性(g·cm²)")}</th><th class="num">${t("Length (mm)", "长度 (mm)", "長さ(mm)")}</th></tr></thead>
        <tbody>
          <tr><td class="code">SM57-41</td><td class="num">0.6</td><td class="num">2.0</td><td class="num">1.8</td><td class="num">120</td><td class="num">41</td></tr>
          <tr><td class="code">SM57-51</td><td class="num">1.0</td><td class="num">2.8</td><td class="num">1.6</td><td class="num">190</td><td class="num">51</td></tr>
          <tr><td class="code">SM57-56</td><td class="num">1.5</td><td class="num">3.0</td><td class="num">1.2</td><td class="num">260</td><td class="num">56</td></tr>
          <tr><td class="code">SM57-76</td><td class="num">2.2</td><td class="num">4.0</td><td class="num">0.9</td><td class="num">480</td><td class="num">76</td></tr>
          <tr><td class="code">SM57-112</td><td class="num">3.0</td><td class="num">5.6</td><td class="num">0.7</td><td class="num">820</td><td class="num">112</td></tr>
        </tbody>
      </table>
    </div>
    <p class="table-note">${t("Custom shaft diameters and lengths available on request.", "轴径与轴长可按需定制。", "シャフト径・長さはご要望に応じてカスタム可能です。")}</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Compatibility", "兼容性", "互換性")}</span><h2 class="h2">${t("Pairs with our planetary gearboxes.", "可搭配我们的行星减速机。", "当社プラネタリーギヤと組み合わせ可能。")}</h2></div>
    <div class="grid-2">
      <a class="card-link" href="pg42-planetary-gearbox.html"><div class="card"><div class="card-body">
        <h3>PG42 ${t("planetary gearbox", "行星减速机", "プラネタリーギヤボックス")}</h3><p class="small muted">${t("Direct-mount, ratios 3.6:1 to 100:1, backlash ≤ 7 / 3 arcmin. Output torque to 30 N·m.", "直装，速比 3.6:1 至 100:1，背隙 ≤ 7 / 3 arcmin。输出扭矩至 30 N·m。", "直付け、減速比3.6:1〜100:1、バックラッシ≤7/3arcmin。出力トルク30N·mまで。")}</p>
        <div class="card-tags"><span class="tag">${t("Recommended pairing", "推荐搭配", "推奨の組み合わせ")}</span></div>
      </div></div></a>
      <a class="card-link" href="planetary-gearbox.html"><div class="card"><div class="card-body">
        <h3>PG52 ${t("planetary gearbox", "行星减速机", "プラネタリーギヤボックス")}</h3><p class="small muted">${t("Higher-torque stage for NEMA 23, output to 60 N·m with reinforced output bearing.", "NEMA 23 的高扭矩级，输出至 60 N·m，加强输出轴承。", "NEMA 23向け高トルク段。出力60N·m、強化出力ベアリング。")}</p>
        <div class="card-tags"><span class="tag">${t("Higher torque", "更高扭矩", "高トルク")}</span></div>
      </div></div></a>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head"><span class="crossline">${t("Applications", "应用", "用途")}</span><h2 class="h2">${t("Where the NEMA 23 is specified.", "NEMA 23 的应用场景。", "NEMA 23が採用される用途。")}</h2></div>
    <div class="grid-4">
      <div class="card"><div class="card-body"><h3 class="h4">${t("CNC routers", "CNC 雕刻机", "CNCルーター")}</h3><p class="small muted">${t("X/Y axis and Z-axis drives.", "X/Y 轴与 Z 轴驱动。", "X/Y軸・Z軸駆動。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Robotics", "机器人", "ロボット")}</h3><p class="small muted">${t("Joint and end-effector positioning.", "关节与末端定位。", "関節・エンドエフェクタの位置決め。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("Packaging", "包装", "包装")}</h3><p class="small muted">${t("Indexing and feed mechanisms.", "分度与送料机构。", "間欠・送り機構。")}</p></div></div>
      <div class="card"><div class="card-body"><h3 class="h4">${t("3D printing", "3D 打印", "3Dプリンティング")}</h3><p class="small muted">${t("High-torque extruder drives.", "高扭矩挤出驱动。", "高トルク押出駆動。")}</p></div></div>
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
        <h2 class="h2">${t("Request pricing for the NEMA 23.", "索取 NEMA 23 报价。", "NEMA 23のお見積もりを依頼。")}</h2>
        <p class="muted">${t("Tell us your holding torque, voltage and shaft requirement, and we'll recommend a model from the SM57 range.", "告知保持扭矩、电压与轴要求，我们将从 SM57 系列中推荐型号。", "保持トルク・電圧・シャフト要件をお知らせください。SM57シリーズからモデルを提案します。")}</p>
      </div>
      <div class="form-card">
        <form data-inquiry data-mailto="${CONTACT.email}" data-subject="RFQ NEMA 23" novalidate>
          <div class="form-grid">
            <div class="field"><label for="d-name">${t("Name", "姓名", "お名前")} <span class="req">*</span></label><input id="d-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="d-email">${t("Email", "邮箱", "メール")} <span class="req">*</span></label><input id="d-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="d-company">${t("Company", "公司", "会社名")}</label><input id="d-company" name="company" autocomplete="organization"></div>
            <div class="field"><label for="d-country">${t("Country", "国家/地区", "国・地域")} <span class="req">*</span></label><input id="d-country" name="country" required autocomplete="country-name"></div>
            <div class="field full"><label for="d-model">${t("Model / parameters", "型号/参数", "モデル・仕様")}</label><input id="d-model" name="model" value="NEMA 23 — "></div>
            <div class="field full"><label for="d-msg">${t("Message", "留言", "メッセージ")} <span class="req">*</span></label><textarea id="d-msg" name="message" required></textarea></div>
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
      name: t("NEMA 23 Stepper Motor (57 mm)", "NEMA 23 步进电机（57 mm）", "NEMA 23ステッピングモーター（57mm）"),
      image: DOMAIN + "/img/products/stepper-motor/nema-23.webp",
      description: desc,
      brand: { "@type": "Brand", name: "PLTBR Precision Motion" },
      sku: "SM57-23",
    },
    faqLd,
  ];

  return { file: "nema-23-stepper-motor.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }, { name: t("Stepper Motors", "步进电机", "ステッピングモーター"), to: "stepper-motor.html" }], keywords: t("NEMA 23 stepper motor, 57mm stepper, closed loop stepper, 3 phase stepper motor", "NEMA 23步进电机, 57mm步进电机, 闭环步进电机, 三相步进电机", "NEMA 23, ステッピングモーター, 57mm, クローズドループ"), body, extraLd };
}
