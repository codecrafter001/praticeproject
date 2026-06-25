/* ── SLIDER ── */
let cur = 0;
const total = 3;

function go(dir) {
  cur = Math.max(0, Math.min(total - 1, cur + dir));
  document.getElementById('slider').style.transform = `translateX(-${cur * 100}vw)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === cur));
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'ArrowLeft') go(-1);
});

/* ── AMBIENT FLOATING TEXT ── */
const phrases = [
  'no fr he actually', 'aur bata...', 'yaar bas ye mat puch 😭',
  'making this at 2am ngl', 'not me overthinking', 'idk idk idk',
  'he is literally SO', 'okay but why tho', 'rent free in my head',
  'plot twist fr', 'certified yapper', 'lmaooo no but seriously',
  'this is so unhinged', 'sir pls pick up', 'okay i said what i said',
  'the audacity tbh', 'touch grass moment', 'okay bestie fr',
  'ngl kinda obsessed', '5th may changed everything', 'he doesnt even know',
  'i said what i said and i stand by it', 'not me making a whole website',
  'it is what it is', 'he will cry and thats facts',
  'screaming crying throwing up', 'manifesting his reaction rn',
  'main character behaviour', 'stay mad bestie 💜',
];

const ambient = document.getElementById('ambient');
function spawnWord() {
  const el = document.createElement('span');
  el.className = 'float-word';
  el.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  const tilt = (Math.random() * 30 - 15).toFixed(1) + 'deg';
  el.style.setProperty('--tilt', tilt);
  el.style.left = Math.random() * 95 + 'vw';
  el.style.bottom = '-5vh';
  const dur = (18 + Math.random() * 20).toFixed(1) + 's';
  el.style.animationDuration = dur;
  el.style.fontSize = (0.6 + Math.random() * 0.5).toFixed(2) + 'rem';
  ambient.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}
for (let i = 0; i < 8; i++) setTimeout(spawnWord, i * 800);
setInterval(spawnWord, 1600);

/* ── SPARKLES ── */
const sparkleSymbols = ['✦','✧','⋆','·','✿','♡','◦','❋'];
const sparklesEl = document.getElementById('sparkles');
for (let i = 0; i < 22; i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
  s.style.left = Math.random() * 100 + 'vw';
  s.style.top = Math.random() * 100 + 'vh';
  s.style.color = ['#f2c4ce','#c9aee5','#e8a0b0','rgba(255,255,255,0.6)'][Math.floor(Math.random()*4)];
  const dur = (2 + Math.random() * 4).toFixed(1) + 's';
  s.style.animationDuration = dur;
  s.style.animationDelay = (Math.random() * 4).toFixed(1) + 's';
  sparklesEl.appendChild(s);
}

/* ── TOUCH SWIPE ── */
let tx = 0;
document.addEventListener('touchstart', e => tx = e.touches[0].clientX);
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
});
