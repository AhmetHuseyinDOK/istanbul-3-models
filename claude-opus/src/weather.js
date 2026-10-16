// Live Istanbul weather from Open-Meteo (no key), mapped onto scene parameters.
// ?weather=clear|cloudy|rain|storm|snow|fog|wind overrides the live data.
import { clamp } from './util.js';

const URL_API =
  'https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784' +
  '&current=temperature_2m,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,precipitation,rain,snowfall,visibility,is_day' +
  '&timezone=Europe%2FIstanbul';

export const PRESETS = {
  clear: { code: 0, temp: 21, cloudCover: 5, wind: 8, windDir: 30, precip: 0, visibility: 30000 },
  cloudy: { code: 3, temp: 15, cloudCover: 95, wind: 14, windDir: 10, precip: 0, visibility: 20000 },
  rain: { code: 63, temp: 12, cloudCover: 100, wind: 18, windDir: 200, precip: 2.5, visibility: 9000 },
  storm: { code: 95, temp: 14, cloudCover: 100, wind: 42, windDir: 220, precip: 6, visibility: 5000 },
  snow: { code: 73, temp: -1, cloudCover: 100, wind: 12, windDir: 20, precip: 1.5, visibility: 6000 },
  fog: { code: 45, temp: 9, cloudCover: 80, wind: 4, windDir: 0, precip: 0, visibility: 600 },
  wind: { code: 2, temp: 13, cloudCover: 45, wind: 55, windDir: 20, precip: 0, visibility: 25000 },
};

export function describe(code) {
  if (code === 0) return { kind: 'clear', label: 'Clear' };
  if (code <= 2) return { kind: 'partly', label: 'Partly cloudy' };
  if (code === 3) return { kind: 'cloudy', label: 'Overcast' };
  if (code === 45 || code === 48) return { kind: 'fog', label: 'Fog' };
  if (code >= 51 && code <= 57) return { kind: 'rain', label: 'Drizzle' };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { kind: 'rain', label: 'Rain' };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { kind: 'snow', label: 'Snow' };
  if (code >= 95) return { kind: 'storm', label: 'Thunderstorm' };
  return { kind: 'cloudy', label: 'Cloudy' };
}

export function toScene(raw) {
  const d = describe(raw.code);
  const heavy = raw.code === 65 || raw.code === 82 || raw.code >= 95 || raw.code === 75;
  const wetCode = d.kind === 'rain' || d.kind === 'storm';
  return {
    ...raw,
    ...d,
    windKmh: raw.wind,
    cloud: clamp(raw.cloudCover / 100, 0, 1),
    rain: wetCode ? clamp(0.35 + raw.precip / 4 + (heavy ? 0.3 : 0), 0.3, 1) : 0,
    snow: d.kind === 'snow' ? clamp(0.4 + raw.precip / 3, 0.4, 1) : 0,
    fog: clamp(1 - (raw.visibility - 400) / 9000, 0, 1),
    wind: clamp((raw.wind - 4) / 46, 0, 1),
    windDirRad: (raw.windDir * Math.PI) / 180, // meteorological: where it blows FROM
    thunder: d.kind === 'storm',
  };
}

export async function fetchWeather() {
  const p = new URLSearchParams(location.search).get('weather');
  if (p && PRESETS[p]) return toScene({ ...PRESETS[p], source: 'preset:' + p });
  try {
    const r = await fetch(URL_API, { cache: 'no-store' });
    if (!r.ok) throw new Error('open-meteo ' + r.status);
    const c = (await r.json()).current;
    return toScene({
      code: c.weather_code,
      temp: c.temperature_2m,
      cloudCover: c.cloud_cover,
      wind: c.wind_speed_10m,
      windDir: c.wind_direction_10m,
      precip: c.precipitation ?? 0,
      visibility: c.visibility ?? 20000,
      source: 'open-meteo',
    });
  } catch (e) {
    console.warn('open-meteo failed, trying wttr.in', e);
  }
  try {
    const r = await fetch('https://wttr.in/Istanbul?format=j1', { cache: 'no-store' });
    const c = (await r.json()).current_condition[0];
    return toScene({
      code: wwoToWmo(+c.weatherCode),
      temp: +c.temp_C,
      cloudCover: +c.cloudcover,
      wind: +c.windspeedKmph,
      windDir: +c.winddirDegree,
      precip: +c.precipMM,
      visibility: +c.visibility * 1000,
      source: 'wttr.in',
    });
  } catch (e) {
    console.warn('weather fetch failed, using a mild default', e);
    return toScene({ ...PRESETS.cloudy, cloudCover: 40, code: 2, temp: 16, source: 'fallback' });
  }
}

// WorldWeatherOnline condition codes (used by wttr.in) -> WMO codes
function wwoToWmo(c) {
  if (c === 113) return 0;
  if (c === 116) return 2;
  if (c === 119 || c === 122) return 3;
  if (c === 143 || c === 248 || c === 260) return 45;
  if ([200, 386, 389, 392, 395].includes(c)) return 95;
  if ([179, 227, 230, 323, 326, 329, 332, 335, 338, 368, 371].includes(c)) return 73;
  if ([263, 266, 281, 284].includes(c)) return 53;
  if ([176, 293, 296, 299, 302, 353].includes(c)) return 61;
  if ([305, 308, 356, 359].includes(c)) return 65;
  return 3;
}
