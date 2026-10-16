// The title block: ISTANBUL, a live weather icon, date and temperature.
const ICONS = {
  sun: `<svg viewBox="0 0 64 64"><g class="spin"><circle cx="32" cy="32" r="11" fill="#ffc53d"/>${[...Array(8)].map((_, i) => `<rect x="30.5" y="6" width="3" height="9" rx="1.5" fill="#ffc53d" transform="rotate(${i * 45} 32 32)"/>`).join('')}</g></svg>`,
  moon: `<svg viewBox="0 0 64 64"><path d="M40 10a22 22 0 1 0 14 34A18 18 0 0 1 40 10z" fill="#f4e6b0"/><circle cx="16" cy="14" r="1.6" fill="#f4e6b0" class="tw"/><circle cx="50" cy="52" r="1.2" fill="#f4e6b0" class="tw d2"/></svg>`,
  cloud: (c = '#e8edf2', s = '#b9c3cc') => `<path class="drift" d="M18 44h30a10 10 0 0 0 0-20 14 14 0 0 0-26-3 9 9 0 0 0-4 23z" fill="${c}" stroke="${s}" stroke-width="1.5"/>`,
  rain: `<g>${[0, 1, 2, 3].map((i) => `<line class="drop d${i}" x1="${22 + i * 8}" y1="48" x2="${19 + i * 8}" y2="56" stroke="#5aa0e6" stroke-width="2.6" stroke-linecap="round"/>`).join('')}</g>`,
  snow: `<g>${[0, 1, 2, 3].map((i) => `<circle class="flake d${i}" cx="${22 + i * 8}" cy="52" r="2.3" fill="#fff" stroke="#c9d6e2"/>`).join('')}</g>`,
  bolt: `<path class="bolt" d="M33 44l-6 10h6l-3 9 10-13h-6l4-6z" fill="#ffd23f"/>`,
  fog: `<g stroke="#c4ccd4" stroke-width="3" stroke-linecap="round"><line class="drift" x1="12" y1="46" x2="52" y2="46"/><line class="drift d2" x1="16" y1="53" x2="48" y2="53"/></g>`,
  wind: `<g fill="none" stroke="#9fb2c2" stroke-width="3" stroke-linecap="round"><path class="drift" d="M8 24h30a6 6 0 1 0-6-6"/><path class="drift d2" d="M8 34h40a7 7 0 1 1-7 7"/><path class="drift" d="M8 44h20"/></g>`,
};

function iconFor(w, night) {
  const body = night ? ICONS.moon : ICONS.sun;
  const inner = body.replace(/^<svg viewBox="0 0 64 64">|<\/svg>$/g, '');
  const small = (s) => `<g transform="translate(-10 -12) scale(0.8)">${s}</g>`;
  let svg;
  switch (w.kind) {
    case 'clear': svg = w.wind > 0.6 ? inner + ICONS.wind : inner; break;
    case 'partly': svg = small(inner) + ICONS.cloud(); break;
    case 'cloudy': svg = small(inner).replace('<g', '<g opacity="0.55"') + ICONS.cloud(); break;
    case 'rain': svg = `<g transform="translate(0 -6)">${ICONS.cloud('#d9e0e7', '#9aa7b3')}</g>` + ICONS.rain; break;
    case 'storm': svg = `<g transform="translate(0 -6)">${ICONS.cloud('#b8c1ca', '#7e8a96')}</g>` + ICONS.bolt + ICONS.rain.replace(/d[0-3]"/g, (m) => m); break;
    case 'snow': svg = `<g transform="translate(0 -6)">${ICONS.cloud()}</g>` + ICONS.snow; break;
    case 'fog': svg = `<g transform="translate(0 -8)">${ICONS.cloud()}</g>` + ICONS.fog; break;
    default: svg = ICONS.cloud();
  }
  return `<svg viewBox="0 0 64 64" aria-label="${w.label}">${svg}</svg>`;
}

const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Istanbul', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

export function buildHud(root) {
  const title = root.querySelector('#title');
  const icon = root.querySelector('#icon');
  const date = root.querySelector('#date');
  const temp = root.querySelector('#temp');
  let lastIcon = '';
  return {
    update({ weather, night, textColor, date: d, parts }) {
      root.style.setProperty('--ink', textColor);
      const key = weather.kind + (night ? 'n' : 'd') + (weather.wind > 0.6 ? 'w' : '');
      if (key !== lastIcon) {
        icon.innerHTML = iconFor(weather, night);
        icon.title = weather.label;
        lastIcon = key;
      }
      const hh = String(parts.hour).padStart(2, '0'), mm = String(parts.minute).padStart(2, '0');
      date.textContent = `${fmt.format(d)}  ·  ${hh}:${mm}`;
      temp.textContent = `${Math.round(weather.temp)}°C`;
      temp.title = `${weather.label} · wind ${Math.round(weather.windKmh)} km/h`;
      title.dataset.ready = '1';
    },
  };
}
