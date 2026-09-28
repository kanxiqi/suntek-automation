/* Reusable inline SVG technical drawings (build tool) */

export const gearIcon = `<svg viewBox="0 0 220 180" role="img" aria-label="Planetary gear">
  <g fill="none" stroke="#28658f" stroke-width="3">
    <circle cx="110" cy="90" r="70"/><circle cx="110" cy="90" r="70" stroke-dasharray="4 8"/>
    <circle cx="110" cy="90" r="36"/><circle cx="110" cy="90" r="10" fill="#176da6"/>
    <circle cx="110" cy="45" r="14"/><circle cx="149" cy="112" r="14"/><circle cx="71" cy="112" r="14"/>
  </g>
</svg>`;

export const motorIcon = `<svg viewBox="0 0 220 180" role="img" aria-label="Stepper motor">
  <g fill="none" stroke="#28658f" stroke-width="3">
    <path d="M58 45h104v88H58z"/><path d="M70 36h80v9M70 133v10h80v-10"/>
    <circle cx="110" cy="88" r="28"/><circle cx="110" cy="88" r="9" fill="#176da6"/>
    <path d="M110 60V29h39v16M72 66h15M72 88h10M72 110h15M143 66h10M138 88h10M143 110h10"/>
    <circle cx="149" cy="29" r="5" fill="#176da6"/>
  </g>
</svg>`;

export const setIcon = `<svg viewBox="0 0 220 180" role="img" aria-label="Motor plus gearbox set">
  <g fill="none" stroke="#28658f" stroke-width="3">
    <rect x="42" y="66" width="72" height="48"/><circle cx="114" cy="90" r="34"/>
    <circle cx="114" cy="90" r="34" stroke-dasharray="4 8"/><circle cx="114" cy="90" r="8" fill="#176da6"/>
    <circle cx="114" cy="70" r="7"/><circle cx="131" cy="103" r="7"/><circle cx="97" cy="103" r="7"/>
    <line x1="42" y1="90" x2="20" y2="90"/><circle cx="16" cy="90" r="4" fill="#176da6"/>
  </g>
</svg>`;

export const driverIcon = `<svg viewBox="0 0 220 180" role="img" aria-label="Stepper driver">
  <g fill="none" stroke="#28658f" stroke-width="3">
    <rect x="45" y="42" width="130" height="96"/><rect x="57" y="56" width="44" height="28" fill="#e9f3f8"/>
    <circle cx="148" cy="72" r="10"/><circle cx="168" cy="72" r="10"/><circle cx="148" cy="110" r="10"/><circle cx="168" cy="110" r="10"/>
    <path d="M78 138h20M118 138h20"/><path d="M60 42v-12h30v12"/>
  </g>
</svg>`;

export const gearDrawingLarge = `<svg viewBox="0 0 520 440" role="img" aria-label="Planetary gearbox technical drawing">
  <g fill="none" stroke="#b7ccd9" stroke-width="1"><path d="M42 220h436M260 22v396" stroke-dasharray="3 8"/><circle cx="260" cy="220" r="186" stroke-dasharray="2 9"/></g>
  <circle cx="260" cy="220" r="151" fill="#f8fbfd" stroke="#739bb5" stroke-width="3"/>
  <circle cx="260" cy="220" r="138" fill="none" stroke="#28658f" stroke-width="9" stroke-dasharray="5 11"/>
  <circle cx="260" cy="220" r="113" fill="none" stroke="#a9c0ce" stroke-width="2"/>
  <g fill="#e9f3f8" stroke="#3b769d" stroke-width="3"><circle cx="260" cy="107" r="38"/><circle cx="358" cy="276" r="38"/><circle cx="162" cy="276" r="38"/></g>
  <g fill="none" stroke="#6c9bb8" stroke-width="7" stroke-dasharray="4 8"><circle cx="260" cy="107" r="28"/><circle cx="358" cy="276" r="28"/><circle cx="162" cy="276" r="28"/></g>
  <circle cx="260" cy="220" r="46" fill="#f8fbfd" stroke="#2d729e" stroke-width="9" stroke-dasharray="6 8"/>
  <circle cx="260" cy="220" r="17" fill="#176da6"/>
</svg>`;

export const motorDrawingLarge = `<svg viewBox="0 0 220 180" role="img" aria-label="Stepper motor technical drawing">
  <g fill="none" stroke="#28658f" stroke-width="3"><path d="M58 45h104v88H58z"/><path d="M70 36h80v9M70 133v10h80v-10"/><circle cx="110" cy="88" r="28"/><circle cx="110" cy="88" r="9" fill="#176da6"/><path d="M110 60V29h39v16M72 66h15M72 88h10M72 110h15M143 66h10M138 88h10M143 110h10"/><circle cx="149" cy="29" r="5" fill="#176da6"/></g>
</svg>`;

export const pg42Drawing = `<svg viewBox="0 0 400 400" role="img" aria-label="PG42 planetary gearbox illustration">
  <g fill="none" stroke="#d8dcdf"><line x1="200" y1="20" x2="200" y2="380" stroke-dasharray="5 9"/><line x1="20" y1="200" x2="380" y2="200" stroke-dasharray="5 9"/></g>
  <circle cx="200" cy="200" r="150" fill="#eef0f2" stroke="#1e2226" stroke-width="3"/>
  <circle cx="200" cy="200" r="150" fill="none" stroke="#1e2226" stroke-width="11" stroke-dasharray="6 11"/>
  <circle cx="200" cy="200" r="128" fill="none" stroke="#1e2226" stroke-width="2"/>
  <circle cx="200" cy="200" r="94" fill="none" stroke="#d8dcdf" stroke-width="1.5" stroke-dasharray="4 6"/>
  <g fill="none" stroke="#1e2226" stroke-width="2"><circle cx="200" cy="106" r="36"/><circle cx="281" cy="247" r="36"/><circle cx="119" cy="247" r="36"/></g>
  <g fill="none" stroke="#1e2226" stroke-width="6" stroke-dasharray="4 7"><circle cx="200" cy="106" r="29"/><circle cx="281" cy="247" r="29"/><circle cx="119" cy="247" r="29"/></g>
  <circle cx="200" cy="200" r="42" fill="none" stroke="#1679b8" stroke-width="2"/>
  <circle cx="200" cy="200" r="35" fill="none" stroke="#1e2226" stroke-width="7" stroke-dasharray="4 8"/>
  <circle cx="200" cy="200" r="10" fill="#1e2226"/>
</svg>`;

export const nema23Drawing = `<svg viewBox="0 0 400 400" role="img" aria-label="NEMA 23 stepper motor illustration">
  <g fill="none" stroke="#d8dcdf"><line x1="200" y1="20" x2="200" y2="380" stroke-dasharray="5 9"/><line x1="20" y1="200" x2="380" y2="200" stroke-dasharray="5 9"/></g>
  <rect x="110" y="110" width="180" height="180" fill="#eef0f2" stroke="#1e2226" stroke-width="3"/>
  <circle cx="200" cy="200" r="34" fill="none" stroke="#1e2226" stroke-width="3"/>
  <line x1="200" y1="110" x2="200" y2="70" stroke="#1679b8" stroke-width="3"/>
  <line x1="166" y1="200" x2="234" y2="200" stroke="#1e2226" stroke-width="3"/>
  <line x1="200" y1="166" x2="200" y2="234" stroke="#1e2226" stroke-width="3"/>
  <circle cx="200" cy="70" r="8" fill="#1679b8"/>
  <g fill="#1e2226"><circle cx="130" cy="130" r="6"/><circle cx="270" cy="130" r="6"/><circle cx="130" cy="270" r="6"/><circle cx="270" cy="270" r="6"/></g>
</svg>`;
