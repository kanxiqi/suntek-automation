/* Homepage (index) — trilingual body */
import { str, BRAND, CONTACT } from "../i18n.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);

  const title = t(
    "Planetary Gearbox Manufacturer & Stepper Motor Factory | PLTBR",
    "行星减速机厂家 & 步进电机工厂 | 普兰特精密传动",
    "プラネタリーギヤボックス＆ステッピングモーターメーカー | PLTBR"
  );
  const desc = t(
    "China planetary gearbox and stepper motor factory. Low-backlash PG gearboxes & NEMA steppers, ISO 9001 / CE / RoHS certified. 48h samples, OEM & ODM, 2-year warranty.",
    "中国行星减速机与步进电机工厂。低背隙 PG 减速机与 NEMA 步进电机，ISO 9001 / CE / RoHS 认证。48 小时打样，OEM & ODM，2 年质保。",
    "中国のプラネタリーギヤボックス＆ステッピングモーター工場。低バックラッシPGギヤとNEMAステッピング、ISO 9001 / CE / RoHS認証。48時間サンプル、OEM・ODM、2年保証。"
  );

  const bannerSlides = [
    { img: "../img/placeholders/banner-home.webp", title: t("Motion components, built around your machine.", "围绕你的设备，打造精密传动组件。", "お客様の装置に合わせた精密モーション部品。"), cta: t("Explore Products", "浏览产品", "製品を見る"), href: "products.html" },
    { img: "../img/placeholders/banner-gearbox.webp", title: t("Low-backlash planetary gearboxes.", "低背隙行星减速机。", "低バックラッシのプラネタリーギヤ。"), cta: t("Explore gearbox series", "查看减速机系列", "ギヤボックスシリーズへ"), href: "planetary-gearbox.html" },
    { img: "../img/placeholders/banner-motor.webp", title: t("Stepper motors, NEMA 8 to 42.", "步进电机，NEMA 8 至 42。", "ステッピングモーター、NEMA 8〜42。"), cta: t("Explore motor series", "查看电机系列", "モーターシリーズへ"), href: "stepper-motor.html" },
    { img: "../img/placeholders/banner-custom.webp", title: t("Built to your drawing.", "按你的图纸定制。", "御社の図面通りに。"), cta: t("Learn about customization", "了解定制服务", "カスタムについて見る"), href: "customization.html" },
  ];

  const bannerSlidesHtml = bannerSlides.map((s, i) => `
  <div class="banner-slide${i === 0 ? " is-active" : ""}">
    <img class="banner-bg" src="${s.img}" alt="" aria-hidden="true" decoding="async">
    <div class="container banner-inner">
      <div>
        <h2 class="h2">${s.title}</h2>
        <div class="btn-row">
          <a class="btn btn--accent btn--sm" href="${s.href}">${s.cta}</a>
          <a class="btn btn--outline-light btn--sm" href="contact.html">${t("Request a Quote", "获取报价", "お見積もり")}</a>
        </div>
      </div>
    </div>
  </div>`).join("\n");

  const bannerDotsHtml = bannerSlides.map((s, i) => `<button class="banner-dot${i === 0 ? " is-active" : ""}" type="button" data-banner-dot="${i}" aria-label="${i + 1}"></button>`).join("");

  const body = `
<section class="banner" data-banner>
  ${bannerSlidesHtml}
  <div class="banner-dots">${bannerDotsHtml}</div>
  <button class="banner-arrow banner-arrow--prev" type="button" data-banner-prev aria-label="${t("Previous", "上一张", "前へ")}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 3 5 8l5 5"/></svg></button>
  <button class="banner-arrow banner-arrow--next" type="button" data-banner-next aria-label="${t("Next", "下一张", "次へ")}"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg></button>
</section>

<section class="trust-strip">
  <div class="container trust-row">
    <span class="trust-label">${t("Built for production programs", "面向批量生产", "量産プログラム向け")}</span>
    <span class="trust-item">${t("ISO 9001:2015", "ISO 9001:2015", "ISO 9001:2015")}</span>
    <span class="trust-item">CE · RoHS · REACH</span>
    <span class="trust-item">${t("40+ export markets", "40+ 出口市场", "40以上の輸出国・地域")}</span>
    <span class="trust-item">${t("100% final testing", "100% 出厂检测", "100% 出荷検査")}</span>
    <span class="trust-item">${t("48-hour samples", "48 小时打样", "48時間サンプル")}</span>
    <span class="trust-item">${t("2 years", "2 年", "2年")} ${t("Warranty", "质保", "保証")}</span>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Product range", "产品系列", "製品ラインナップ")}</span>
      <h2 class="h2">${t("Start with the motion component.", "从传动组件开始。", "モーション部品から始める。")}</h2>
      <p>${t("Choose a standalone component, or combine a motor and gearbox into a matched drive package.", "选择独立组件，或将电机与减速机组合成匹配的驱动套装。", "単体部品を選ぶか、モーターとギヤボックスを組み合わせたドライブセットをご選択ください。")}</p>
    </div>
    <div class="grid-2">
      <a class="card card--media card--accent reveal card-link" href="planetary-gearbox.html">
        <div class="media-frame media-frame--3x2"><img src="../img/products/planetary-gearbox/planetary-gearbox.webp" alt="${t("Planetary gearbox", "行星减速机", "プラネタリーギヤボックス")}" loading="lazy" decoding="async"></div>
        <div class="card-body">
          <span class="card-num">01 / ${t("GEARBOXES", "减速机", "ギヤボックス")}</span>
          <h3 class="h3" style="margin-top:10px;">${t("Planetary Gearboxes", "行星减速机", "プラネタリーギヤボックス")}</h3>
          <p>${t("15 series from AB to PR — straight and right-angle, economy and precision, for every axis.", "从 AB 到 PR 共 15 个系列——直齿与直角、经济型与精密型，覆盖各类轴应用。", "ABからPRまで15シリーズ——平行軸・直角、経済型・精密型、あらゆる軸用途に対応。")}</p>
          <div class="spec-chips">
            <div><dt>${t("Series", "系列", "シリーズ")}</dt><strong>15</strong></div>
            <div><dt>${t("Frame", "机座", "フレーム")}</dt><strong>42 – 220 mm</strong></div>
            <div><dt>${t("Backlash", "背隙", "バックラッシ")}</dt><strong>≤ 3 arcmin</strong></div>
          </div>
          <div class="card-tags" style="margin-top:8px;">
            <span class="tag">AB</span><span class="tag">ABR</span><span class="tag">AF</span><span class="tag">AG</span><span class="tag">VL</span><span class="tag">PB</span>
          </div>
        </div>
      </a>
      <a class="card card--media card--accent reveal reveal-d1 card-link" href="stepper-motor.html">
        <div class="media-frame media-frame--3x2"><img src="../img/products/stepper-motor/stepmotor.webp" alt="${t("Stepper motor", "步进电机", "ステッピングモーター")}" loading="lazy" decoding="async"></div>
        <div class="card-body">
          <span class="card-num">02 / ${t("MOTORS", "电机", "モーター")}</span>
          <h3 class="h3" style="margin-top:10px;">${t("Stepper Motors", "步进电机", "ステッピングモーター")}</h3>
          <p>${t("11 families — standard, high-precision, closed-loop, hollow-shaft, geared and lead-screw stepper motors.", "11 大系列——标准、高精度、闭环、中空轴、减速与丝杆步进电机。", "11ファミリー——標準・高精度・クローズドループ・中空軸・ギヤード・リードスクリューのステッピングモーター。")}</p>
          <div class="spec-chips">
            <div><dt>${t("Series", "系列", "シリーズ")}</dt><strong>11</strong></div>
            <div><dt>${t("Frame", "机座", "フレーム")}</dt><strong>20 – 86 mm</strong></div>
            <div><dt>${t("Step angle", "步距角", "ステップ角")}</dt><strong>1.8° / 0.9°</strong></div>
          </div>
          <div class="card-tags" style="margin-top:8px;">
            <span class="tag">${t("Standard", "标准", "標準")}</span><span class="tag">${t("Closed-loop", "闭环", "クローズドループ")}</span><span class="tag">${t("Hollow shaft", "中空轴", "中空軸")}</span><span class="tag">${t("Geared", "减速", "ギヤード")}</span><span class="tag">${t("Lead screw", "丝杆", "リードスクリュー")}</span><span class="tag">${t("Electric cylinder", "电缸", "電動シリンダー")}</span>
          </div>
        </div>
      </a>
    </div>
    <div class="note note--steel" style="margin-top:22px;">
      <strong>${t("Building a complete axis?", "在搭建完整轴？", "完全な軸を構築中ですか？")}</strong> ${t(
        "Pair a PB28 gearbox with a NEMA 11 motor for a compact, high-torque drive.",
        "用 PB28 减速机搭配 NEMA 11 电机，获得紧凑、高扭矩的驱动方案。",
        "PB28ギヤボックスとNEMA 11モーターを組み合わせて、コンパクトで高トルクなドライブを。"
      )} <a class="text-link" href="planetary-pb.html">${t("See the PB28 pairing", "查看 PB28 搭配", "PB28の組み合わせを見る")} <span aria-hidden="true">→</span></a>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head section-head--row">
      <div><span class="crossline">${t("Application fit", "应用匹配", "用途")}</span><h2 class="h2">${t("Motion for demanding machines.", "为严苛设备提供动力。", "要求の厳しい装置のためのモーション。")}</h2></div>
      <a class="text-link" href="industries.html">${t("View all industries", "查看全部行业", "すべての業界を見る")} <span aria-hidden="true">→</span></a>
    </div>
    <div class="application-grid">
      <a href="industries.html"><span class="application-number">01</span><strong>${t("Robotics & AGV", "机器人与 AGV", "ロボット・AGV")}</strong><span>${t("Compact joints and wheel drives", "紧凑关节与轮驱", "コンパクトな関節・車輪駆動")}</span></a>
      <a href="industries.html"><span class="application-number">02</span><strong>${t("CNC & laser", "CNC 与激光", "CNC・レーザー")}</strong><span>${t("Repeatable axis positioning", "可重复的轴定位", "再現性の高い軸位置決め")}</span></a>
      <a href="industries.html"><span class="application-number">03</span><strong>${t("Packaging", "包装", "包装")}</strong><span>${t("Indexing and synchronized motion", "分度与同步运动", "間欠・同期動作")}</span></a>
      <a href="industries.html"><span class="application-number">04</span><strong>${t("Medical & lab", "医疗与实验室", "医療・ラボ")}</strong><span>${t("Quiet, controlled movement", "安静、可控的运动", "静かで制御された動作")}</span></a>
    </div>
  </div>
</section>

<section class="section section--steel">
  <div class="container">
    <div class="split split--wide">
      <div>
        <span class="crossline eyebrow--light">${t("Manufacturing & quality", "制造与质量", "製造・品質")}</span>
        <h2 class="h2">${t("Engineering support from prototype to production.", "从样机到量产的全流程工程支持。", "試作から量産まで一貫したエンジニアリング支援。")}</h2>
        <p>${t("Gear cutting, motor winding, assembly and final testing are coordinated in one factory — so lead times stay short and quality stays consistent from sample to production.", "齿轮加工、电机绕线、装配与出厂检测在同一工厂完成——交期更短，质量从样机到量产保持一致。", "歯切り・巻線・組立・最終検査を一つの工場で一貫管理。納期を短く保ち、サンプルから量産まで品質を一定に保ちます。")}</p>
        <div class="btn-row" style="margin-top:24px;">
          <a class="btn btn--light" href="about.html">${t("Inside the factory", "走进工厂", "工場を見る")}</a>
          <a class="text-link text-link--light" href="quality.html">${t("Quality process", "质量流程", "品質プロセス")} <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat"><strong>2009</strong><span>${t("Founded", "成立", "設立")}</span></div>
        <div class="stat"><strong>15,000 m²</strong><span>${t("Production area", "生产面积", "生産面積")}</span></div>
        <div class="stat"><strong>260+</strong><span>${t("Team members", "团队成员", "従業員")}</span></div>
        <div class="stat"><strong>100k+</strong><span>${t("Monthly capacity", "月产能", "月産能力")}</span></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Why PLTBR", "为什么选择普兰特", "PLTBRが選ばれる理由")}</span>
      <h2 class="h2">${t("A supplier that answers within one working day.", "一个工作日内响应的供应商。", "1営業日以内に回答するサプライヤー。")}</h2>
    </div>
    <div class="grid-3">
      <div class="card"><div class="card-body">
        <h3 class="h3">${t("48-hour samples", "48 小时打样", "48時間サンプル")}</h3>
        <p class="small muted">${t("1–5 piece prototypes ship within 48 hours; production lead times of 15–25 days.", "1–5 件样机 48 小时内发货；量产交期 15–25 天。", "1〜5個の試作は48時間以内に出荷。量産納期は15〜25日。")}</p>
      </div></div>
      <div class="card"><div class="card-body">
        <h3 class="h3">${t("100% final testing", "100% 出厂检测", "100% 出荷検査")}</h3>
        <p class="small muted">${t("No batch sampling — every gearbox and motor runs noise, backlash, torque and runout checks.", "不做抽检——每台减速机与电机都经过噪音、背隙、扭矩与跳动检测。", "抜き取り検査ではなく、全数で騒音・バックラッシ・トルク・振れを検査します。")}</p>
      </div></div>
      <div class="card"><div class="card-body">
        <h3 class="h3">${t("OEM & ODM welcome", "欢迎 OEM / ODM", "OEM・ODM歓迎")}</h3>
        <p class="small muted">${t("Custom shafts, windings, cables, flanges and private-label packaging — no minimum for prototyping.", "定制轴、绕组、线缆、法兰与贴牌包装——打样无起订量。", "シャフト・巻線・ケーブル・フランジ・プライベートラベルのカスタムに対応。試作の最低数量なし。")}</p>
      </div></div>
    </div>
  </div>
</section>

<section class="section section--paper">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("For your engineering team", "给你的工程团队", "エンジニアリングチームへ")}</span>
      <h2 class="h2">${t("Useful files, without the search.", "有用的文件，无需到处找。", "必要な資料がすぐ見つかる。")}</h2>
    </div>
    <div class="grid-2">
      <a class="card-link" href="resources.html"><div class="card"><div class="card-body"><h3 class="h3">${t("CAD & datasheets", "CAD 与数据手册", "CAD・データシート")}</h3><p class="small muted">${t("STEP and IGES models plus PDF datasheets for every series.", "各系列的 STEP / IGES 模型与 PDF 数据手册。", "全シリーズのSTEP・IGESモデルとPDFデータシート。")}</p></div></div></a>
      <a class="card-link" href="blog.html"><div class="card"><div class="card-body"><h3 class="h3">${t("Selection guides", "选型指南", "選定ガイド")}</h3><p class="small muted">${t("Step-by-step sizing for torque, speed and ratio.", "扭矩、转速与速比的逐步选型方法。", "トルク・回転数・減速比を段階的に選定する方法。")}</p></div></div></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="crossline">${t("Common questions", "常见问题", "よくあるご質問")}</span>
      <h2 class="h2">${t("The details that help you decide.", "帮你做决定的细节。", "判断に役立つポイント。")}</h2>
    </div>
    <div class="faq">
      <details class="faq-item">
        <summary>${t("What are the sample and production lead times?", "打样与量产交期是多久？", "サンプルと量産の納期は？")}</summary>
        <div class="faq-body">${t("Prototype samples in 1–5 pieces ship within 48 hours. Production orders typically take 15–25 days, depending on configuration.", "1–5 件样机 48 小时内发货；量产订单通常 15–25 天，视配置而定。", "試作1〜5個は48時間以内に出荷。量産は構成により通常15〜25日です。")}</div>
      </details>
      <details class="faq-item">
        <summary>${t("Can you customize shafts, windings and flanges?", "可以定制轴、绕组和法兰吗？", "シャフト・巻線・フランジのカスタムは可能ですか？")}</summary>
        <div class="faq-body">${t("Yes. OEM options include custom shafts, flanges, motor windings, cables and private-label packaging.", "可以。OEM 选项包括定制轴、法兰、绕组、线缆与贴牌包装。", "可能です。シャフト・フランジ・巻線・ケーブル・プライベートラベル包装のOEMカスタムに対応しています。")}</div>
      </details>
      <details class="faq-item">
        <summary>${t("How do I choose a motor and gearbox combination?", "如何选择电机与减速机的组合？", "モーターとギヤボックスの組み合わせはどう選ぶ？")}</summary>
        <div class="faq-body">${t("Share your load, speed, duty cycle, available space and positioning needs — an application engineer will help narrow down the frame and ratio.", "提供负载、转速、工况、空间与定位需求——应用工程师会帮你确定机座与速比。", "負荷・回転数・使用条件・スペース・位置決め要件をお知らせください。アプリケーションエンジニアがフレームと減速比を絞り込みます。")}</div>
      </details>
      <details class="faq-item">
        <summary>${t("What are your payment and shipping terms?", "付款与运输条款是什么？", "支払い・配送条件は？")}</summary>
        <div class="faq-body">${t("We accept T/T, L/C and PayPal, and ship FOB, CIF, DDP or EXW. MOQ is 1 piece for samples and 100 pieces for OEM production.", "支持 T/T、L/C 与 PayPal，运输支持 FOB / CIF / DDP / EXW。样机起订 1 件，OEM 量产起订 100 件。", "T/T・L/C・PayPalに対応。配送はFOB・CIF・DDP・EXW。サンプルは1個から、OEM量産は100個からです。")}</div>
      </details>
    </div>
  </div>
</section>

<section class="section section--paper" id="inquiry">
  <div class="container">
    <div class="split split--start">
      <div>
        <span class="crossline">${t("Start a project", "启动项目", "プロジェクトを始める")}</span>
        <h2 class="h2">${t("Let's size the right drive for your application.", "为你的应用匹配合适的驱动。", "用途に合ったドライブを選定します。")}</h2>
        <p class="muted">${t("Send the basic requirements and our team will follow up with a recommendation and quotation within one business day.", "发送基本需求，我们的团队会在一个工作日内回复选型建议与报价。", "基本要件をお送りいただければ、1営業日以内に選定案とお見積もりをご返信します。")}</p>
        <ul class="checklist" style="margin-top:20px;">
          <li>${t("Email", "邮箱", "メール")}: <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
          <li>${t("Response", "响应", "返信")}: ${t("Within one business day", "一个工作日内", "1営業日以内")}</li>
          <li>${t("Location", "所在地", "所在地")}: ${CONTACT.city[lang]}</li>
        </ul>
      </div>
      <div class="form-card">
        <h3 class="h3">${t("Request a quote", "获取报价", "お見積もり")}</h3>
        <form data-inquiry data-mailto="${CONTACT.email}" data-subject="RFQ from stepgearbox.com" novalidate>
          <div class="form-grid">
            <div class="field"><label for="h-name">${t("Name", "姓名", "お名前")} <span class="req">*</span></label><input id="h-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="h-email">${t("Work email", "工作邮箱", "勤務先メール")} <span class="req">*</span></label><input id="h-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="h-company">${t("Company", "公司", "会社名")}</label><input id="h-company" name="company" autocomplete="organization"></div>
            <div class="field"><label for="h-country">${t("Country", "国家/地区", "国・地域")} <span class="req">*</span></label><input id="h-country" name="country" required autocomplete="country-name"></div>
            <div class="field full"><label for="h-model">${t("Product or parameters", "产品型号或参数", "製品・仕様")}</label><input id="h-model" name="model" placeholder="${t("e.g. PB28, 10:1, NEMA 11", "如 PB28、10:1、NEMA 11", "例：PB28、10:1、NEMA 11")}"></div>
            <div class="field full"><label for="h-msg">${t("Requirements", "需求", "要件")} <span class="req">*</span></label><textarea id="h-msg" name="message" required></textarea></div>
          </div>
          <button class="btn btn--accent btn--block" type="submit" style="margin-top:16px;">${t("Prepare inquiry", "提交询价", "送信する")}</button>
          <p class="form-status" role="status"></p>
        </form>
      </div>
    </div>
  </div>
</section>
`;

  return { file: "index.html", title, desc, keywords: t("planetary gearbox manufacturer, stepper motor factory, low backlash planetary gearbox, NEMA stepper motor, OEM planetary gearbox, China gearbox supplier", "行星减速机厂家, 步进电机工厂, 低背隙行星减速机, NEMA步进电机, OEM行星减速机, 中国减速机供应商", "プラネタリーギヤボックス, ステッピングモーター, メーカー, 中国"), body };
}
