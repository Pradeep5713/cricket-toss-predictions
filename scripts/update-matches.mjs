/**
 * Daily match updater — fetches today's cricket matches from cricketdata.org
 * (cricapi) and rewrites data/matches.json, preserving the admin's toss picks
 * and results for matches that already exist.
 *
 * Env: CRICKET_API_KEY (required)
 */
import { readFileSync, writeFileSync } from 'node:fs';

const API_KEY = process.env.CRICKET_API_KEY;
if (!API_KEY) {
  console.error('CRICKET_API_KEY env var is missing');
  process.exit(1);
}

const DATA_PATH = new URL('../data/matches.json', import.meta.url);
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000;

const istDateOf = (date) => new Date(date.getTime() + IST_OFFSET_MS).toISOString().slice(0, 10);
const todayIST = istDateOf(new Date());

const PALETTE = ['#1d4ed8', '#b91c1c', '#15803d', '#7c3aed', '#ca8a04', '#0369a1', '#be185d', '#ea580c', '#0f766e', '#4338ca', '#a16207', '#86198f', '#9f1239', '#1e3a8a', '#dc2626', '#16a34a'];
const colorFor = (name) => {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
};

// "Yorkshire [YOR]" -> { name: "Yorkshire", code: "YOR" }
function parseTeam(raw, img) {
  const m = /^(.*?)\s*\[([^\]]+)\]\s*$/.exec(raw || '');
  const name = (m ? m[1] : raw || '').trim();
  const code = (m ? m[2] : name.slice(0, 3)).toUpperCase().slice(0, 4);
  const team = { name, code, color: colorFor(name) };
  if (img) team.logo = img.replace(/\?w=\d+$/, '?w=96');
  return team;
}

const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
const matchKey = (teamAName, teamBName, istDate) =>
  [normalize(teamAName), normalize(teamBName)].sort().join('|') + '|' + istDate;

const fmt = (matchType) => {
  const t = (matchType || '').toLowerCase();
  if (t === 't20') return 'T20';
  if (t === 'odi') return 'ODI';
  if (t === 'test') return 'Test';
  if (t === 't10') return 'T10';
  return matchType ? matchType.toUpperCase() : 'T20';
};

// ---- load existing data (for pick preservation) ----
let existing = { matches: [] };
try {
  existing = JSON.parse(readFileSync(DATA_PATH, 'utf8'));
} catch {
  console.log('No existing matches.json — starting fresh');
}
const existingByKey = new Map();
for (const m of existing.matches || []) {
  const d = m.time ? istDateOf(new Date(m.time)) : todayIST;
  existingByKey.set(matchKey(m.teamA?.name, m.teamB?.name, d), m);
}

// ---- fetch today's matches ----
const res = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`);
if (!res.ok) {
  console.error(`API request failed: HTTP ${res.status}`);
  process.exit(1);
}
const payload = await res.json();
if (payload.status !== 'success' || !Array.isArray(payload.data)) {
  console.error('API returned an error:', JSON.stringify(payload.status ?? payload).slice(0, 300));
  process.exit(1);
}
console.log(`API hits used today: ${payload.info?.hitsUsed}/${payload.info?.hitsLimit}`);

const seen = new Set();
const apiMatches = [];
for (const m of payload.data) {
  if (!m.t1 || !m.t2 || !m.dateTimeGMT) continue;
  const when = new Date(m.dateTimeGMT + 'Z');
  if (istDateOf(when) !== todayIST) continue;
  if (seen.has(m.id)) continue;
  seen.add(m.id);

  const teamA = parseTeam(m.t1, m.t1img);
  const teamB = parseTeam(m.t2, m.t2img);
  const key = matchKey(teamA.name, teamB.name, todayIST);
  const prev = existingByKey.get(key);

  const status = m.ms === 'live' ? 'live' : m.ms === 'result' ? 'done' : 'upcoming';
  apiMatches.push({
    id: m.id,
    series: (m.series || '').replace(/,?\s*\d{4}(-\d{2,4})?\s*$/, '') || 'Cricket',
    matchNo: '',
    format: fmt(m.matchType),
    teamA,
    teamB,
    venue: '',
    time: when.toISOString(),
    prediction: prev?.prediction || '',
    confidence: prev?.confidence ?? null,
    status: prev?.result && prev.result !== 'pending' ? 'done' : status,
    result: prev?.result || 'pending',
  });
}

// keep admin-added matches for today that the API doesn't know about
const apiKeys = new Set(apiMatches.map((m) => matchKey(m.teamA.name, m.teamB.name, todayIST)));
for (const m of existing.matches || []) {
  const d = m.time ? istDateOf(new Date(m.time)) : null;
  if (d === todayIST && !apiKeys.has(matchKey(m.teamA?.name, m.teamB?.name, d))) {
    apiMatches.push(m);
  }
}

apiMatches.sort((a, b) => new Date(a.time) - new Date(b.time));

const out = { updated: new Date().toISOString(), matches: apiMatches };
writeFileSync(DATA_PATH, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${apiMatches.length} matches for ${todayIST} (IST)`);
