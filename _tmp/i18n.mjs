/* PLTBR Precision Motion — i18n constants (build tool, not published) */
import { KO, DE } from "./translations.mjs";

export const DOMAIN = "https://www.stepgearbox.com";

export const LANGS = [
  { code: "en", hreflang: "en", label: "English", short: "EN", htmlLang: "en" },
  { code: "zh", hreflang: "zh-CN", label: "中文", short: "中", htmlLang: "zh-CN" },
  { code: "ja", hreflang: "ja", label: "日本語", short: "日", htmlLang: "ja" },
  { code: "ko", hreflang: "ko", label: "한국어", short: "한", htmlLang: "ko" },
  { code: "de", hreflang: "de", label: "Deutsch", short: "DE", htmlLang: "de" },
];

export const BRAND = {
  name: {
    en: "PLTBR Precision Motion Co., Ltd.",
    zh: "普兰特精密传动有限公司",
    ja: "PLTBRプレシジョンモーション株式会社",
    ko: "PLTBR 프리시전 모션 유한공사",
    de: "PLTBR Precision Motion Co., Ltd.",
  },
  short: {
    en: "PLTBR Precision Motion",
    zh: "普兰特精密传动",
    ja: "PLTBRプレシジョンモーション",
    ko: "PLTBR 프리시전 모션",
    de: "PLTBR Precision Motion",
  },
  mark: { en: "PLTBR", zh: "普兰特", ja: "PLTBR", ko: "PLTBR", de: "PLTBR" },
  sub: {
    en: "Precision Motion Co.",
    zh: "精密传动有限公司",
    ja: "プレシジョンモーション",
    ko: "프리시전 모션",
    de: "Precision Motion Co.",
  },
  tagline: {
    en: "Manufacturer of precision planetary gearboxes and stepper motors for OEM and automation integrators worldwide.",
    zh: "面向全球 OEM 与自动化集成商的行星减速机、步进电机制造商。",
    ja: "世界中のOEM・自動化インテグレーターに向けた、精密プラネタリーギヤボックス＆ステッピングモーターのメーカーです。",
    ko: "전 세계 OEM·자동화 통합업체를 위한 정밀 유성 감속기·스테퍼 모터 제조사입니다.",
    de: "Hersteller präziser Planetengetriebe und Schrittmotoren für OEMs und Automatisierungsintegratoren weltweit.",
  },
  founded: "2009",
};

export const CONTACT = {
  email: "yong.zhao@live.cn",
  mobile: "13883582185",
  mobileDisplay: "+86 138 8358 2185",
  whatsapp: "https://wa.me/8613883582185",
  wechat: "13883582185",
  tel: "023-62869785",
  telHref: "tel:+862362869785",
  address: {
    en: "No. 33, Shanhu Avenue, Jiangjin District, Chongqing, China",
    zh: "中国重庆市江津区珊瑚大道33号",
    ja: "中国重慶市江津区珊瑚大道33号",
    ko: "중국 충칭시 장진구 산후대로 33호",
    de: "Nr. 33, Shanhu Avenue, Jiangjin, Chongqing, China",
  },
  city: { en: "Chongqing, China", zh: "中国·重庆", ja: "中国・重慶", ko: "중국 · 충칭", de: "Chongqing, China" },
  hours: {
    en: "Mon–Sat 08:30–18:00 (GMT+8)",
    zh: "周一至周六 08:30–18:00 (GMT+8)",
    ja: "月〜土 08:30–18:00 (GMT+8)",
    ko: "월~토 08:30–18:00 (GMT+8)",
    de: "Mo–Sa 08:30–18:00 Uhr (GMT+8)",
  },
  geo: { lat: 29.56, lng: 106.55 },
};

export const SEO_KEYWORDS = {
  en: "PLTBR gearbox, PLTBR planetary gearbox, PLTBR stepper motor, planetary gearbox manufacturer, stepper motor manufacturer",
  zh: "普兰特行星减速机, 普兰特步进电机, 杉华步进电机, 行星减速机厂家, 步进电机厂家",
  ja: "PLTBRギヤボックス, PLTBRプラネタリーギヤボックス, PLTBRステッピングモーター, プラネタリーギヤボックスメーカー, ステッピングモーターメーカー",
  ko: "PLTBR 기어박스, PLTBR 유성 감속기, PLTBR 스테퍼 모터, 유성 감속기 제조사, 스테퍼 모터 제조사",
  de: "PLTBR Getriebe, PLTBR Planetengetriebe, PLTBR Schrittmotor, Planetengetriebe Hersteller, Schrittmotor Hersteller",
};

/* str(lang, en, zh, ja) — pick the localized string.
   Korean and German resolve via translation dictionaries keyed by the
   English source string, so untranslated technical terms stay English. */
export function str(lang, en, zh, ja) {
  if (lang === "zh") return zh;
  if (lang === "ja") return ja;
  if (lang === "ko") return KO[en] || en;
  if (lang === "de") return DE[en] || en;
  return en;
}

/* augment(obj) — recursively add ko/de translations to every {en,zh,ja}
   data object so `obj[lang]` works for all five languages. */
export function augment(obj) {
  if (Array.isArray(obj)) { obj.forEach(augment); return obj; }
  if (obj && typeof obj === "object") {
    if ("en" in obj && "zh" in obj && "ja" in obj) {
      obj.ko = KO[obj.en] || obj.en;
      obj.de = DE[obj.en] || obj.en;
    }
    for (const k of Object.keys(obj)) augment(obj[k]);
  }
  return obj;
}
