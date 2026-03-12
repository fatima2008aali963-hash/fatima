/**
 * لوفينج هومز — Accessibility Widget
 * أضف هذا الملف في كل صفحة قبل </body>
 * <script src="accessibility.js"></script>
 */
(function(){
'use strict';

// ── STYLES ──
const css = `
  /* ── WIDGET BTN ── */
  #a11y-btn {
    position: fixed;
    bottom: 28px;
    left: 28px; /* RTL: left side */
    z-index: 99998;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3D2910, #5C3D1A);
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(61,41,16,.35);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    transition: all .25s;
    outline: none;
  }
  #a11y-btn:hover { transform: scale(1.08); box-shadow: 0 10px 28px rgba(61,41,16,.45); }
  #a11y-btn:focus-visible { box-shadow: 0 0 0 3px #C9873A, 0 6px 20px rgba(61,41,16,.35); }

  /* ── PANEL ── */
  #a11y-panel {
    position: fixed;
    bottom: 90px;
    left: 28px;
    z-index: 99999;
    width: 300px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 24px 64px rgba(0,0,0,.18);
    border: 1.5px solid #E0D0C0;
    display: none;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Tajawal', sans-serif;
    direction: rtl;
    animation: a11ySlide .25s cubic-bezier(.22,1,.36,1);
  }
  #a11y-panel.open { display: flex; }
  @keyframes a11ySlide {
    from { opacity: 0; transform: translateY(12px) scale(.97); }
    to   { opacity: 1; transform: translateY(0)   scale(1);    }
  }

  /* panel header */
  .a11y-head {
    background: #3D2910;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .a11y-head-title { font-size: 14px; font-weight: 800; color: white; display: flex; align-items: center; gap: 8px; }
  .a11y-close {
    background: rgba(255,255,255,.12); border: none; color: white;
    width: 28px; height: 28px; border-radius: 50%; cursor: pointer;
    font-size: 14px; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
  }
  .a11y-close:hover { background: rgba(255,255,255,.25); }
  .a11y-close:focus-visible { outline: 2px solid #C9873A; }

  /* panel body */
  .a11y-body { padding: 16px; display: flex; flex-direction: column; gap: 8px; max-height: 440px; overflow-y: auto; }

  /* section label */
  .a11y-sec { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; color: #9A8070; text-transform: uppercase; margin: 4px 0 6px; }

  /* toggle row */
  .a11y-row {
    display: flex; align-items: center; justify-content: space-between;
    background: #FAF5EE; border: 1.5px solid #E0D0C0; border-radius: 12px;
    padding: 11px 14px; transition: border-color .2s;
  }
  .a11y-row:hover { border-color: #C9873A; }
  .a11y-row-info { display: flex; align-items: center; gap: 9px; }
  .a11y-row-icon { font-size: 17px; }
  .a11y-row-label { font-size: 13px; font-weight: 700; color: #3D2910; }

  /* toggle switch */
  .a11y-tog { position: relative; width: 42px; height: 23px; flex-shrink: 0; cursor: pointer; }
  .a11y-tog input { opacity: 0; width: 0; height: 0; position: absolute; }
  .a11y-tog-sl {
    position: absolute; inset: 0;
    background: #D5C8BC; border-radius: 23px;
    transition: background .3s; cursor: pointer;
  }
  .a11y-tog-sl::after {
    content: ''; position: absolute;
    width: 17px; height: 17px;
    background: white; border-radius: 50%;
    top: 3px; right: 3px;
    transition: transform .3s;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
  }
  .a11y-tog input:checked + .a11y-tog-sl { background: #C9873A; }
  .a11y-tog input:checked + .a11y-tog-sl::after { transform: translateX(-19px); }
  .a11y-tog input:focus-visible + .a11y-tog-sl { box-shadow: 0 0 0 3px rgba(201,135,58,.4); }

  /* font size row */
  .a11y-fs-row {
    display: flex; align-items: center; justify-content: space-between;
    background: #FAF5EE; border: 1.5px solid #E0D0C0; border-radius: 12px;
    padding: 11px 14px;
  }
  .a11y-fs-btns { display: flex; align-items: center; gap: 6px; }
  .a11y-fs-btn {
    width: 30px; height: 30px; border-radius: 8px;
    border: 1.5px solid #E0D0C0; background: white;
    font-family: 'Tajawal', sans-serif; font-size: 14px; font-weight: 800;
    cursor: pointer; color: #3D2910; transition: all .2s;
    display: flex; align-items: center; justify-content: center;
  }
  .a11y-fs-btn:hover { border-color: #C9873A; color: #C9873A; }
  .a11y-fs-btn:focus-visible { outline: 2px solid #C9873A; }
  .a11y-fs-val {
    min-width: 34px; text-align: center;
    font-size: 13px; font-weight: 800; color: #C9873A;
  }

  /* reset btn */
  .a11y-reset {
    margin: 4px 0 0;
    width: 100%; padding: 10px;
    background: #F2E8D9; border: 1.5px solid #E0D0C0;
    border-radius: 10px; font-family: 'Tajawal', sans-serif;
    font-size: 13px; font-weight: 700; color: #9A8070;
    cursor: pointer; transition: all .2s;
  }
  .a11y-reset:hover { border-color: #C9873A; color: #3D2910; }
  .a11y-reset:focus-visible { outline: 2px solid #C9873A; }

  /* ── APPLIED STATES ── */

  /* high contrast */
  body.a11y-contrast {
    filter: contrast(1.5) !important;
  }

  /* large cursor */
  body.a11y-cursor, body.a11y-cursor * {
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 4l16 12-7 1-4 9z' fill='%233D2910' stroke='white' stroke-width='2'/%3E%3C/svg%3E") 8 4, auto !important;
  }

  /* highlight links */
  body.a11y-links a {
    outline: 2px solid #C9873A !important;
    outline-offset: 2px !important;
    border-radius: 3px !important;
  }

  /* reading guide */
  #a11y-guide {
    display: none;
    position: fixed;
    left: 0; right: 0;
    height: 36px;
    background: rgba(201,135,58,.18);
    border-top: 2px solid rgba(201,135,58,.5);
    border-bottom: 2px solid rgba(201,135,58,.5);
    pointer-events: none;
    z-index: 99997;
    transition: top .05s;
  }
  body.a11y-guide-on #a11y-guide { display: block; }

  /* focus outline enhanced */
  body.a11y-focus *:focus {
    outline: 3px solid #C9873A !important;
    outline-offset: 3px !important;
  }

  /* reduce motion */
  body.a11y-motion *, body.a11y-motion *::before, body.a11y-motion *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }

  /* dyslexia font */
  body.a11y-dyslexia, body.a11y-dyslexia * {
    font-family: 'Tajawal', sans-serif !important;
    letter-spacing: .04em !important;
    word-spacing: .1em !important;
    line-height: 1.9 !important;
  }

  /* ── SKIP LINK (if not already present) ── */
  .a11y-skip {
    position: absolute; top: -60px; right: 0; z-index: 99999;
    background: #C9873A; color: white; padding: 10px 20px;
    border-radius: 0 0 12px 12px; font-weight: 800;
    text-decoration: none; font-family: 'Tajawal', sans-serif;
    font-size: 14px; transition: top .2s;
  }
  .a11y-skip:focus { top: 0; }
`;

// ── INJECT CSS ──
const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

// ── READING GUIDE ──
const guide = document.createElement('div');
guide.id = 'a11y-guide';
guide.setAttribute('aria-hidden', 'true');
document.body.appendChild(guide);
document.addEventListener('mousemove', e => {
  if (document.body.classList.contains('a11y-guide-on')) {
    guide.style.top = (e.clientY - 18) + 'px';
  }
});

// ── SKIP LINK (inject if none exists) ──
if (!document.querySelector('.skip-link, .skip, [href="#main"], [href="#content"]')) {
  const skip = document.createElement('a');
  skip.className = 'a11y-skip';
  skip.href = '#';
  skip.textContent = 'تخطى إلى المحتوى الرئيسي';
  skip.addEventListener('click', e => {
    e.preventDefault();
    const main = document.querySelector('main, #main, #content, .main');
    if (main) { main.setAttribute('tabindex', '-1'); main.focus(); }
  });
  document.body.insertBefore(skip, document.body.firstChild);
}

// ── STATE ──
const DEFAULTS = { fontSize: 100 };
let state = Object.assign({}, DEFAULTS);

// load saved prefs
try {
  const saved = JSON.parse(localStorage.getItem('lh_a11y') || '{}');
  Object.assign(state, saved);
} catch(e){}

// ── BUILD WIDGET HTML ──
const btnEl = document.createElement('button');
btnEl.id = 'a11y-btn';
btnEl.setAttribute('aria-label', 'إمكانيات الوصول');
btnEl.setAttribute('aria-expanded', 'false');
btnEl.setAttribute('aria-controls', 'a11y-panel');
btnEl.textContent = '♿';

const panelEl = document.createElement('div');
panelEl.id = 'a11y-panel';
panelEl.setAttribute('role', 'dialog');
panelEl.setAttribute('aria-label', 'إعدادات إمكانيات الوصول');
panelEl.innerHTML = `
  <div class="a11y-head">
    <div class="a11y-head-title">♿ إمكانيات الوصول</div>
    <button class="a11y-close" aria-label="إغلاق" id="a11y-close">✕</button>
  </div>
  <div class="a11y-body">

    <div class="a11y-sec">👁 الرؤية</div>

    <div class="a11y-fs-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🔤</span>
        <span class="a11y-row-label">حجم الخط</span>
      </div>
      <div class="a11y-fs-btns">
        <button class="a11y-fs-btn" id="fs-down" aria-label="تصغير الخط">−</button>
        <div class="a11y-fs-val" id="fs-val" aria-live="polite">100%</div>
        <button class="a11y-fs-btn" id="fs-up" aria-label="تكبير الخط">+</button>
      </div>
    </div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🌗</span>
        <span class="a11y-row-label" id="lbl-contrast">تباين عالي</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-contrast">
        <input type="checkbox" id="tog-contrast" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-sec">🖱 التفاعل</div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🔲</span>
        <span class="a11y-row-label" id="lbl-focus">إبراز التركيز</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-focus">
        <input type="checkbox" id="tog-focus" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🔗</span>
        <span class="a11y-row-label" id="lbl-links">إبراز الروابط</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-links">
        <input type="checkbox" id="tog-links" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🖱️</span>
        <span class="a11y-row-label" id="lbl-cursor">مؤشر كبير</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-cursor">
        <input type="checkbox" id="tog-cursor" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-sec">📖 القراءة</div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">📏</span>
        <span class="a11y-row-label" id="lbl-guide">دليل القراءة</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-guide">
        <input type="checkbox" id="tog-guide" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🅰️</span>
        <span class="a11y-row-label" id="lbl-dyslexia">خط عسر القراءة</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-dyslexia">
        <input type="checkbox" id="tog-dyslexia" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <div class="a11y-row">
      <div class="a11y-row-info">
        <span class="a11y-row-icon">🎞️</span>
        <span class="a11y-row-label" id="lbl-motion">تقليل الحركة</span>
      </div>
      <label class="a11y-tog" aria-labelledby="lbl-motion">
        <input type="checkbox" id="tog-motion" role="switch" aria-checked="false">
        <span class="a11y-tog-sl"></span>
      </label>
    </div>

    <button class="a11y-reset" id="a11y-reset">↺ إعادة ضبط كل الإعدادات</button>
  </div>
`;

document.body.appendChild(btnEl);
document.body.appendChild(panelEl);

// ── TOGGLE PANEL ──
function openPanel() {
  panelEl.classList.add('open');
  btnEl.setAttribute('aria-expanded', 'true');
  document.getElementById('a11y-close').focus();
}
function closePanel() {
  panelEl.classList.remove('open');
  btnEl.setAttribute('aria-expanded', 'false');
  btnEl.focus();
}

btnEl.addEventListener('click', () => {
  panelEl.classList.contains('open') ? closePanel() : openPanel();
});
document.getElementById('a11y-close').addEventListener('click', closePanel);

// close on ESC or outside click
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panelEl.classList.contains('open')) closePanel();
});
document.addEventListener('mousedown', e => {
  if (panelEl.classList.contains('open') && !panelEl.contains(e.target) && e.target !== btnEl) closePanel();
});

// ── FONT SIZE ──
function applyFontSize(val) {
  document.documentElement.style.fontSize = val + '%';
  document.getElementById('fs-val').textContent = val + '%';
}
document.getElementById('fs-up').addEventListener('click', () => {
  state.fontSize = Math.min(state.fontSize + 10, 150);
  applyFontSize(state.fontSize);
  save();
});
document.getElementById('fs-down').addEventListener('click', () => {
  state.fontSize = Math.max(state.fontSize - 10, 80);
  applyFontSize(state.fontSize);
  save();
});

// ── TOGGLES ──
const toggles = [
  { id: 'tog-contrast',  cls: 'a11y-contrast',  key: 'contrast' },
  { id: 'tog-focus',     cls: 'a11y-focus',      key: 'focus'    },
  { id: 'tog-links',     cls: 'a11y-links',      key: 'links'    },
  { id: 'tog-cursor',    cls: 'a11y-cursor',     key: 'cursor'   },
  { id: 'tog-guide',     cls: 'a11y-guide-on',   key: 'guide'    },
  { id: 'tog-dyslexia',  cls: 'a11y-dyslexia',   key: 'dyslexia' },
  { id: 'tog-motion',    cls: 'a11y-motion',     key: 'motion'   },
];

toggles.forEach(t => {
  const el = document.getElementById(t.id);
  el.addEventListener('change', () => {
    document.body.classList.toggle(t.cls, el.checked);
    el.setAttribute('aria-checked', el.checked ? 'true' : 'false');
    state[t.key] = el.checked;
    save();
  });
});

// ── RESET ──
document.getElementById('a11y-reset').addEventListener('click', () => {
  state = Object.assign({}, DEFAULTS);
  toggles.forEach(t => {
    const el = document.getElementById(t.id);
    el.checked = false;
    el.setAttribute('aria-checked', 'false');
    document.body.classList.remove(t.cls);
  });
  applyFontSize(100);
  save();
});

// ── SAVE / LOAD ──
function save() {
  try { localStorage.setItem('lh_a11y', JSON.stringify(state)); } catch(e){}
}

function applyState() {
  applyFontSize(state.fontSize || 100);
  toggles.forEach(t => {
    if (state[t.key]) {
      document.body.classList.add(t.cls);
      const el = document.getElementById(t.id);
      if (el) { el.checked = true; el.setAttribute('aria-checked', 'true'); }
    }
  });
}

// ── INIT ──
applyState();

// respect OS preference for reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('a11y-motion');
  const el = document.getElementById('tog-motion');
  if (el) { el.checked = true; el.setAttribute('aria-checked', 'true'); }
  state.motion = true;
}

})();