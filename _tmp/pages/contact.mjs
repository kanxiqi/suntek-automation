/* Contact — trilingual body */
import { str, CONTACT } from "../i18n.mjs";

export function page(lang) {
  const t = (en, zh, ja) => str(lang, en, zh, ja);
  const title = t("Contact Us — Request a Gearbox & Stepper Motor Quote | PLTBR", "联系我们 — 索取减速机与步进电机报价 | 普兰特", "お問い合わせ — ギヤ＆ステッピングモーターのお見積もり | PLTBR");
  const desc = t("Contact PLTBR Precision Motion in Chongqing, China. Email yong.zhao@live.cn, WhatsApp +86 138 8358 2185, tel 023-62869785. We reply within one business day.", "联系位于中国重庆的普兰特精密传动。邮箱 yong.zhao@live.cn，WhatsApp +86 138 8358 2185，座机 023-62869785。一个工作日内回复。", "中国・重慶のPLTBRプレシジョンモーションへお問い合わせ。メールyong.zhao@live.cn、WhatsApp +86 138 8358 2185、TEL 023-62869785。1営業日以内に返信します。");

  const body = `
<div class="page-head">
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">${t("Home", "首页", "ホーム")}</a><span>/</span><span aria-current="page">${t("Contact", "联系我们", "お問い合わせ")}</span></nav>
    <h1 class="h1">${t("Tell us what you're building.", "告诉我们你在造什么。", "何を製作されているか教えてください。")}</h1>
    <p class="lede">${t("Send your requirements and an engineer will reply within one business day with a recommendation and price. For urgent requests, use WhatsApp.", "发送需求，工程师将在一个工作日内回复选型建议与报价。紧急需求请使用 WhatsApp。", "要件をお送りいただければ、エンジニアが1営業日以内に選定案と価格をご返信します。お急ぎの場合はWhatsAppをご利用ください。")}</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-card">
        <h3>${t("Email", "邮箱", "メール")}</h3>
        <div class="kv"><span>${t("Sales & support", "销售与支持", "営業・サポート")}</span><strong><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></strong></div>
        <div class="kv"><span>${t("Response", "响应", "返信")}</span><strong>${t("Within one business day", "一个工作日内", "1営業日以内")}</strong></div>
      </div>
      <div class="contact-card">
        <h3>${t("Phone & WhatsApp", "电话与 WhatsApp", "電話・WhatsApp")}</h3>
        <div class="kv"><span>${t("Mobile / WhatsApp", "手机 / WhatsApp", "携帯 / WhatsApp")}</span><strong><a href="${CONTACT.whatsapp}" target="_blank" rel="noopener">${CONTACT.mobileDisplay}</a></strong></div>
        <div class="kv"><span>${t("Tel", "座机", "TEL")}</span><strong><a href="${CONTACT.telHref}">${CONTACT.tel}</a></strong></div>
      </div>
      <div class="contact-card">
        <h3>${t("WeChat", "微信", "WeChat")}</h3>
        <div class="kv"><span>${t("WeChat ID", "微信号", "WeChat ID")}</span><strong class="mono">${CONTACT.wechat}</strong></div>
        <p style="margin-top:10px;"><button class="btn btn--ghost btn--sm" type="button" data-copy="${CONTACT.wechat}">${t("Copy WeChat ID", "复制微信号", "IDをコピー")}</button></p>
      </div>
      <div class="contact-card">
        <h3>${t("Factory address", "工厂地址", "工場住所")}</h3>
        <div class="kv"><span>${t("Address", "地址", "住所")}</span><strong>${CONTACT.address[lang]}</strong></div>
      </div>
      <div class="contact-card">
        <h3>${t("Business hours", "营业时间", "営業時間")}</h3>
        <div class="kv"><span>${t("Hours", "时间", "時間")}</span><strong>${CONTACT.hours[lang]}</strong></div>
        <div class="kv"><span>${t("Location", "所在地", "所在地")}</span><strong>${CONTACT.city[lang]}</strong></div>
      </div>
      <div class="contact-card">
        <h3>${t("Terms", "交易条款", "取引条件")}</h3>
        <div class="kv"><span>${t("Payment", "付款", "支払い")}</span><strong>T/T · L/C · PayPal</strong></div>
        <div class="kv"><span>${t("Shipping", "运输", "配送")}</span><strong>FOB · CIF · DDP · EXW</strong></div>
      </div>
    </div>

    <div class="map-frame" style="margin-top:24px;">
      <img src="../img/placeholders/map-16x9.webp" alt="${t("Map of factory location", "工厂位置地图", "工場所在地の地図")}" loading="lazy" decoding="async">
      <div class="map-pin-card">
        <strong>${t("PLTBR Precision Motion", "普兰特精密传动", "PLTBRプレシジョンモーション")}</strong>
        ${CONTACT.address[lang]}
      </div>
    </div>
  </div>
</section>

<section class="section section--paper" id="quote">
  <div class="container">
    <div class="split split--start">
      <div>
        <span class="crossline">${t("Request a quote", "获取报价", "お見積もり")}</span>
        <h2 class="h2">${t("Send your requirements.", "发送你的需求。", "要件をお送りください。")}</h2>
        <p class="muted">${t("The more detail you share — model, torque, speed, quantity — the faster we can quote accurately.", "你提供的细节越多——型号、扭矩、转速、数量——我们就能越快给出准确报价。", "モデル・トルク・回転数・数量など詳細が多いほど、正確なお見積もりを迅速にご返信できます。")}</p>
      </div>
      <div class="form-card">
        <form data-inquiry data-mailto="${CONTACT.email}" data-subject="RFQ from stepgearbox.com" novalidate>
          <div class="form-grid">
            <div class="field"><label for="c-name">${t("Name", "姓名", "お名前")} <span class="req">*</span></label><input id="c-name" name="name" required autocomplete="name"></div>
            <div class="field"><label for="c-email">${t("Email", "邮箱", "メール")} <span class="req">*</span></label><input id="c-email" name="email" type="email" required autocomplete="email"></div>
            <div class="field"><label for="c-company">${t("Company", "公司", "会社名")}</label><input id="c-company" name="company" autocomplete="organization"></div>
            <div class="field"><label for="c-country">${t("Country", "国家/地区", "国・地域")} <span class="req">*</span></label><input id="c-country" name="country" required autocomplete="country-name"></div>
            <div class="field"><label for="c-app">${t("Application", "应用", "用途")}</label><input id="c-app" name="application" placeholder="${t("e.g. CNC axis", "如 CNC 轴", "例：CNC軸")}"></div>
            <div class="field"><label for="c-qty">${t("Quantity", "数量", "数量")}</label><input id="c-qty" name="quantity" type="number" min="1"></div>
            <div class="field full"><label for="c-model">${t("Model / parameters", "型号/参数", "モデル・仕様")}</label><input id="c-model" name="model" placeholder="${t("e.g. PG42, 10:1, NEMA 23", "如 PG42、10:1、NEMA 23", "例：PG42、10:1、NEMA 23")}"></div>
            <div class="field full"><label for="c-msg">${t("Message", "留言", "メッセージ")} <span class="req">*</span></label><textarea id="c-msg" name="message" required></textarea></div>
          </div>
          <button class="btn btn--accent btn--block" type="submit" style="margin-top:16px;">${t("Send Inquiry", "提交询价", "送信する")}</button>
          <p class="form-status" role="status"></p>
        </form>
      </div>
    </div>
  </div>
</section>
`;

  return { file: "contact.html", title, desc, crumb: [{ name: t("Home", "首页", "ホーム"), to: "index.html" }], keywords: t("contact gearbox factory, request gearbox quote, stepper motor quote, Chongqing motion supplier", "联系减速机工厂, 索取减速机报价, 步进电机报价, 重庆传动供应商", "お問い合わせ, ギヤ見積もり, ステッピングモーター見積もり, 重慶"), body };
}
