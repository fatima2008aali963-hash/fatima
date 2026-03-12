let groomCurrent=0, roomCurrent=0, healthCurrent=0, delCurrent=0, lbCurrent=0;
window._lbMode = 'gallery';

function _openLb(src, counter) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-counter').textContent = counter;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openGroom(i) { groomCurrent=i; window._lbMode='groom'; _openLb(groomImgs[i], (i+1)+' / '+groomImgs.length+' — العناية والتجميل'); }
function openRoom(i)  { roomCurrent=i;  window._lbMode='room';  _openLb(roomImgs[i],  (i+1)+' / '+roomImgs.length+' — الغرف والإقامة'); }
function openHealth(i){ healthCurrent=i;window._lbMode='health';_openLb(healthImgs[i],(i+1)+' / '+healthImgs.length+' — الرعاية الصحية'); }
function openDel(i)   { delCurrent=i;   window._lbMode='del';   _openLb(delImgs[i],   (i+1)+' / '+delImgs.length+' — خدمة التوصيل'); }
function openLb(i)    { lbCurrent=i;    window._lbMode='gallery';_openLb(lbImgs[i],   (i+1)+' / '+lbImgs.length); }

function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLbOutside(e) {
  if(e.target===document.getElementById('lightbox')) closeLb();
}

function shiftLb(dir) {
  const modes = {
    groom:   [groomImgs,  () => groomCurrent,  v => groomCurrent=v,  '— العناية والتجميل'],
    room:    [roomImgs,   () => roomCurrent,   v => roomCurrent=v,   '— الغرف والإقامة'],
    health:  [healthImgs, () => healthCurrent, v => healthCurrent=v, '— الرعاية الصحية'],
    del:     [delImgs,    () => delCurrent,    v => delCurrent=v,    '— خدمة التوصيل'],
    gallery: [lbImgs,     () => lbCurrent,     v => lbCurrent=v,     ''],
  };
  const [arr, get, set, label] = modes[window._lbMode] || modes.gallery;
  const next = (get() + dir + arr.length) % arr.length;
  set(next);
  document.getElementById('lb-img').src = arr[next];
  document.getElementById('lb-counter').textContent = (next+1)+' / '+arr.length+' '+label;
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key==='Escape') closeLb();
  if (e.key==='ArrowLeft') shiftLb(-1);
  if (e.key==='ArrowRight') shiftLb(1);
});

// ── INJECT IMAGES FROM images.js ──
// Maps array name strings to actual arrays
function getImgArray(name) {
  const map = {
    'groomImgs':      typeof groomImgs      !== 'undefined' ? groomImgs      : [],
    'roomImgs':       typeof roomImgs       !== 'undefined' ? roomImgs       : [],
    'healthImgs':     typeof healthImgs     !== 'undefined' ? healthImgs     : [],
    'delImgs':        typeof delImgs        !== 'undefined' ? delImgs        : [],
    'lbImgs':         typeof lbImgs         !== 'undefined' ? lbImgs         : [],
    'svcImgs':        typeof svcImgs        !== 'undefined' ? svcImgs        : [],
    'roomMiniSrcs':   typeof roomMiniSrcs   !== 'undefined' ? roomMiniSrcs   : [],
    'healthMiniSrcs': typeof healthMiniSrcs !== 'undefined' ? healthMiniSrcs : [],
    'groomMiniSrcs':  typeof groomMiniSrcs  !== 'undefined' ? groomMiniSrcs  : [],
    'delMiniSrcs':    typeof delMiniSrcs    !== 'undefined' ? delMiniSrcs    : [],
  };
  return map[name] || [];
}

function injectImages() {
  document.querySelectorAll('[data-src]').forEach(img => {
    const expr = img.getAttribute('data-src');
    // Parse "arrayName[index]"
    const match = expr.match(/^(\w+)\[(\d+)\]$/);
    if (match) {
      const arr = getImgArray(match[1]);
      const idx = parseInt(match[2]);
      if (arr[idx]) img.src = arr[idx];
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectImages);
} else {
  injectImages();
}