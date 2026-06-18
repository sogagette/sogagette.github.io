const TOP_COLOR = [0xff, 0x34, 0x34];    // #ff3434
const BOTTOM_COLOR = [0x34, 0x37, 0xff]; // #3437ff

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function updateTint() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;

  const r = lerp(TOP_COLOR[0], BOTTOM_COLOR[0], t);
  const g = lerp(TOP_COLOR[1], BOTTOM_COLOR[1], t);
  const b = lerp(TOP_COLOR[2], BOTTOM_COLOR[2], t);

  document.documentElement.style.setProperty('--scroll-tint', `rgb(${r}, ${g}, ${b})`);
}

window.addEventListener('scroll', updateTint, { passive: true });
updateTint();