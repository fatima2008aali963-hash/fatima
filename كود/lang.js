/**
 * لوفينج هومز — Language Switcher (AR / EN)
 * أضف قبل </body> في كل صفحة:
 * <script src="lang.js"></script>
 */
(function(){
'use strict';

// ══════════════════════════════════════════
//  TRANSLATIONS
// ══════════════════════════════════════════
const T = {
  ar: {
    // NAV
    'nav.logo':       'لوفينج هومز',
    'nav.services':   'خدماتنا',
    'nav.packages':   'الحزم',
    'nav.gallery':    'معرض الصور',
    'nav.reviews':    'آراء العملاء',
    'nav.contact':    'تواصل',
    'nav.booking':    'الحجز',
    'nav.book_btn':   'احجز الآن',

    // FOOTER
    'footer.tagline': 'فندق الحيوانات الأليفة – هونج كونج',
    'footer.copy':    'جميع الحقوق محفوظة',

    // INDEX — hero
    'hero.eyebrow':   'فندق حيوانات أليفة فاخر',
    'hero.title':     'بيتهم الثاني',
    'hero.sub':       'رعاية احترافية لحيوانك الأليف في هونج كونج',
    'hero.cta':       'احجز الآن',
    'hero.cta2':      'اكتشف خدماتنا',

    // SERVICES
    'svc.title':      'خدماتنا',
    'svc.groom':      'تزيين وحلاقة',
    'svc.room':       'غرف مريحة',
    'svc.health':     'رعاية صحية',
    'svc.deliver':    'خدمة التوصيل',

    // PACKAGES
    'pkg.title':      'الحزم',
    'pkg.basic':      'الأساسية',
    'pkg.premium':    'المميزة',
    'pkg.royal':      'الملكية',
    'pkg.per_night':  '/ليلة',
    'pkg.book':       'احجز هذه الحزمة',
    'pkg.popular':    'الأكثر طلباً',

    // BOOKING
    'bk.title':       'احجز الآن',
    'bk.name':        'الاسم الكامل',
    'bk.contact':     'رقم الهاتف / الإيميل',
    'bk.pet_type':    'نوع الحيوان',
    'bk.pet_name':    'اسم الحيوان',
    'bk.breed':       'السلالة',
    'bk.checkin':     'تاريخ الدخول',
    'bk.checkout':    'تاريخ الخروج',
    'bk.pkg_type':    'نوع الحجز',
    'bk.total':       'المبلغ الإجمالي',
    'bk.submit':      '🎉 تأكيد الحجز',
    'bk.nights':      'ليالي',
    'bk.free':        'مجاني',
    'bk.new':         'حجز جديد 🐾',
    'bk.print':       '🖨 طباعة',
    'bk.ref':         'رقم الحجز',
    'bk.copy':        '📋 نسخ الرقم',
    'bk.success_h':   'تم تأكيد حجزك!',
    'bk.success_p':   'شكراً لثقتك بلوفينج هومز 🐾\nسنتواصل معك قريباً.',

    // CONTACT
    'ct.title':       'تواصل معنا',
    'ct.name':        'الاسم الكامل',
    'ct.email':       'البريد الإلكتروني',
    'ct.phone':       'رقم الهاتف',
    'ct.subject':     'الموضوع',
    'ct.msg':         'رسالتك',
    'ct.send':        'إرسال الرسالة',

    // REVIEWS
    'rv.title':       'آراء العملاء',
    'rv.rating':      '٤.٩ من ٥',

    // GALLERY
    'gl.title':       'معرض الصور',

    // COMMON
    'com.more':       'اقرأ المزيد',
    'com.back':       'رجوع',
    'com.next':       'التالي',
    'com.required':   'مطلوب',
    'com.per_night':  '/ليلة',
    'com.hkd':        'دولار هونج كونج',
  },

  en: {
    // NAV
    'nav.logo':       'Loving Homes',
    'nav.services':   'Services',
    'nav.packages':   'Packages',
    'nav.gallery':    'Gallery',
    'nav.reviews':    'Reviews',
    'nav.contact':    'Contact',
    'nav.booking':    'Booking',
    'nav.book_btn':   'Book Now',

    // FOOTER
    'footer.tagline': 'Pet Hotel — Hong Kong',
    'footer.copy':    'All rights reserved',

    // INDEX — hero
    'hero.eyebrow':   'Luxury Pet Hotel',
    'hero.title':     'Their Second Home',
    'hero.sub':       'Professional pet care in Hong Kong',
    'hero.cta':       'Book Now',
    'hero.cta2':      'Explore Services',

    // SERVICES
    'svc.title':      'Our Services',
    'svc.groom':      'Grooming',
    'svc.room':       'Comfortable Rooms',
    'svc.health':     'Health Care',
    'svc.deliver':    'Delivery Service',

    // PACKAGES
    'pkg.title':      'Packages',
    'pkg.basic':      'Basic',
    'pkg.premium':    'Premium',
    'pkg.royal':      'Royal',
    'pkg.per_night':  '/night',
    'pkg.book':       'Book This Package',
    'pkg.popular':    'Most Popular',

    // BOOKING
    'bk.title':       'Book Now',
    'bk.name':        'Full Name',
    'bk.contact':     'Phone / Email',
    'bk.pet_type':    'Pet Type',
    'bk.pet_name':    'Pet Name',
    'bk.breed':       'Breed',
    'bk.checkin':     'Check-in Date',
    'bk.checkout':    'Check-out Date',
    'bk.pkg_type':    'Package Type',
    'bk.total':       'Total Amount',
    'bk.submit':      '🎉 Confirm Booking',
    'bk.nights':      'nights',
    'bk.free':        'Free',
    'bk.new':         'New Booking 🐾',
    'bk.print':       '🖨 Print',
    'bk.ref':         'Booking Reference',
    'bk.copy':        '📋 Copy',
    'bk.success_h':   'Booking Confirmed!',
    'bk.success_p':   'Thank you for choosing Loving Homes 🐾\nWe will contact you shortly.',

    // CONTACT
    'ct.title':       'Contact Us',
    'ct.name':        'Full Name',
    'ct.email':       'Email Address',
    'ct.phone':       'Phone Number',
    'ct.subject':     'Subject',
    'ct.msg':         'Your Message',
    'ct.send':        'Send Message',

    // REVIEWS
    'rv.title':       'Customer Reviews',
    'rv.rating':      '4.9 out of 5',

    // GALLERY
    'gl.title':       'Photo Gallery',

    // COMMON
    'com.more':       'Read More',
    'com.back':       'Back',
    'com.next':       'Next',
    'com.required':   'Required',
    'com.per_night':  '/night',
    'com.hkd':        'HKD',
  }
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let lang = 'ar';
try { lang = localStorage.getItem('lh_lang') || 'ar'; } catch(e){}

// ══════════════════════════════════════════
//  INJECT STYLES
// ══════════════════════════════════════════
const style = document.createElement('style');
style.textContent = `
  /* Lang btn in nav */
  #lang-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 20px;
    border: 1.5px solid rgba(201,135,58,.4);
    background: transparent;
    color: var(--amber, #C9873A);
    font-family: 'Tajawal', sans-serif;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition: all .2s;
    white-space: nowrap;
    letter-spacing: .3px;
  }
  #lang-btn:hover {
    background: rgba(201,135,58,.1);
    border-color: var(--amber, #C9873A);
  }
  #lang-btn:focus-visible {
    outline: 2px solid var(--amber, #C9873A);
    outline-offset: 2px;
  }
  #lang-btn .lb-flag { font-size: 16px; }
  #lang-btn .lb-text { font-size: 12px; }

  /* smooth direction switch */
  html { transition: none; }

  /* translated elements fade */
  [data-t] { transition: opacity .15s ease; }
`;
document.head.appendChild(style);

// ══════════════════════════════════════════
//  BUILD BUTTON & INJECT INTO NAV
// ══════════════════════════════════════════
function buildBtn() {
  const btn = document.createElement('button');
  btn.id = 'lang-btn';
  btn.setAttribute('aria-label', 'Switch language / تغيير اللغة');
  btn.innerHTML = `<span class="lb-flag"></span><span class="lb-text"></span>`;
  btn.addEventListener('click', toggleLang);
  return btn;
}

function updateBtn() {
  const btn = document.getElementById('lang-btn');
  if (!btn) return;
  const flag = btn.querySelector('.lb-flag');
  const text = btn.querySelector('.lb-text');
  if (lang === 'ar') {
    flag.textContent = '🇬🇧';
    text.textContent = 'English';
  } else {
    flag.textContent = '🇸🇦';
    text.textContent = 'عربي';
  }
}

function injectBtn() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  // remove old btn if exists
  const old = document.getElementById('lang-btn');
  if (old) old.remove();
  const btn = buildBtn();
  // insert before nav-btn (book now) or at end
  const navBtn = nav.querySelector('.nav-btn');
  if (navBtn) nav.insertBefore(btn, navBtn);
  else nav.appendChild(btn);
  updateBtn();
}

// ══════════════════════════════════════════
//  TRANSLATE PAGE
// ══════════════════════════════════════════
function t(key) {
  return (T[lang] && T[lang][key]) || (T['ar'][key]) || key;
}

function applyTranslations() {
  // translate all [data-t] elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const attr = el.getAttribute('data-t-attr'); // optional: translate an attribute
    if (attr) {
      el.setAttribute(attr, t(key));
    } else {
      el.textContent = t(key);
    }
  });

  // translate placeholders
  document.querySelectorAll('[data-t-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-t-ph'));
  });
}

function applyDir() {
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('lang', lang);

  // flip text-align for ltr
  if (!isAr) {
    if (!document.getElementById('ltr-style')) {
      const s = document.createElement('style');
      s.id = 'ltr-style';
      s.textContent = `
        body { text-align: left; }
        nav { flex-direction: row-reverse; }
        .nav-links { flex-direction: row-reverse; }
        .footer-top { flex-direction: row-reverse; }
        .footer-links { flex-direction: row-reverse; }
        input, select, textarea { direction: ltr; text-align: left; }
        .bk-wrap, .bk-body { direction: ltr; }
      `;
      document.head.appendChild(s);
    }
  } else {
    const s = document.getElementById('ltr-style');
    if (s) s.remove();
  }
}

function applyAll() {
  applyDir();
  applyTranslations();
  updateBtn();
  injectBtn();
}

// ══════════════════════════════════════════
//  AUTO-TAG KNOWN ELEMENTS
// ══════════════════════════════════════════
function autoTag() {
  // NAV links — match by href
  const navMap = {
    'services.html': 'nav.services',
    'packages.html': 'nav.packages',
    'gallery.html':  'nav.gallery',
    'reviews.html':  'nav.reviews',
    'contact.html':  'nav.contact',
    'booking.html':  'nav.booking',
    'index.html':    'nav.logo',
  };
  document.querySelectorAll('nav a:not(.nav-btn):not(.nav-logo)').forEach(a => {
    const href = a.getAttribute('href') || '';
    const key = Object.keys(navMap).find(k => href.includes(k));
    if (key && !a.hasAttribute('data-t')) a.setAttribute('data-t', navMap[key]);
  });

  // Nav logo
  document.querySelectorAll('nav .nav-logo, nav a.nav-logo').forEach(el => {
    if (!el.hasAttribute('data-t')) {
      // preserve paw emoji
      const paw = el.querySelector('.paw');
      if (paw) {
        el.setAttribute('data-t-logo', '1');
      }
    }
  });

  // Nav btn (Book Now)
  document.querySelectorAll('nav .nav-btn').forEach(el => {
    if (!el.hasAttribute('data-t')) el.setAttribute('data-t', 'nav.book_btn');
  });

  // Footer tagline
  document.querySelectorAll('.footer-logo span').forEach(el => {
    if (!el.hasAttribute('data-t')) el.setAttribute('data-t', 'footer.tagline');
  });

  // Footer copyright — find text node with "الحقوق" or "rights"
  document.querySelectorAll('.footer-bottom').forEach(el => {
    if (!el.hasAttribute('data-t-done')) {
      el.setAttribute('data-t-done', '1');
    }
  });
}

// Special: nav logo text (keep emoji)
function translateLogo() {
  document.querySelectorAll('[data-t-logo]').forEach(el => {
    const paw = el.querySelector('.paw');
    const pawHTML = paw ? paw.outerHTML + ' ' : '🐾 ';
    el.innerHTML = pawHTML + t('nav.logo');
  });
}

// ══════════════════════════════════════════
//  TOGGLE
// ══════════════════════════════════════════
function toggleLang() {
  lang = lang === 'ar' ? 'en' : 'ar';
  try { localStorage.setItem('lh_lang', lang); } catch(e){}
  autoTag();
  applyAll();
  translateLogo();
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
function init() {
  autoTag();
  injectBtn();
  if (lang !== 'ar') applyAll(); // only apply if non-default
  else updateBtn(); // just update button label
  translateLogo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// expose globally so pages can add custom keys
window.LH_LANG = { t, T, toggleLang, get current(){ return lang; } };

})();
