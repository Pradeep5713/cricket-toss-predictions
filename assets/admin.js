/* TossGuru — admin panel: edit matches, publish to GitHub via Contents API */
(function () {
  const $ = (id) => document.getElementById(id);
  const noticeEl = $('notice');
  const LS_CONN = 'tossguru_conn';
  const LS_DRAFT = 'tossguru_draft';

  let data = { updated: '', matches: [] };
  let editingId = null;

  /* ---------- helpers ---------- */
  function notice(msg, type = 'info') {
    noticeEl.innerHTML = `<div class="notice ${type}">${msg}</div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function getConn() {
    try { return JSON.parse(localStorage.getItem(LS_CONN)) || {}; } catch { return {}; }
  }

  function genId() {
    return 'm' + Math.random().toString(36).slice(2, 9);
  }

  // UTF-8 safe base64
  const b64encode = (str) => btoa(String.fromCharCode(...new TextEncoder().encode(str)));
  const b64decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\n/g, '')), (c) => c.charCodeAt(0)));

  /* ---------- connection ---------- */
  function loadConn() {
    const c = getConn();
    $('ghOwner').value = c.owner || 'Pradeep5713';
    $('ghRepo').value = c.repo || 'cricket-toss-predictions';
    $('ghToken').value = c.token || '';
  }

  $('saveConn').onclick = () => {
    const c = {
      owner: $('ghOwner').value.trim(),
      repo: $('ghRepo').value.trim(),
      token: $('ghToken').value.trim(),
    };
    if (!c.owner || !c.repo) return notice('Please fill username and repository name.', 'err');
    localStorage.setItem(LS_CONN, JSON.stringify(c));
    notice('Connection saved ✓ — now add matches and hit Publish.', 'ok');
  };

  /* ---------- prediction dropdown follows team names ---------- */
  function syncPredictionOptions() {
    const a = $('fTeamA').value.trim();
    const b = $('fTeamB').value.trim();
    const cur = $('fPrediction').value;
    $('fPrediction').innerHTML =
      '<option value="">— pick a team —</option>' +
      (a ? `<option value="${a.replace(/"/g, '&quot;')}">${a}</option>` : '') +
      (b ? `<option value="${b.replace(/"/g, '&quot;')}">${b}</option>` : '');
    if ([a, b].includes(cur)) $('fPrediction').value = cur;
  }
  $('fTeamA').addEventListener('input', syncPredictionOptions);
  $('fTeamB').addEventListener('input', syncPredictionOptions);

  /* ---------- form <-> match ---------- */
  function clearForm() {
    ['fSeries', 'fMatchNo', 'fTime', 'fTeamA', 'fTeamB', 'fVenue', 'fConfidence'].forEach((id) => ($(id).value = ''));
    $('fColorA').value = '#1d4ed8';
    $('fColorB').value = '#eab308';
    $('fStatus').value = 'upcoming';
    $('fResult').value = 'pending';
    syncPredictionOptions();
    editingId = null;
    $('formTitle').textContent = '➕ Add Match';
    $('cancelEdit').style.display = 'none';
  }

  $('cancelEdit').onclick = clearForm;

  $('saveMatch').onclick = () => {
    const teamA = $('fTeamA').value.trim();
    const teamB = $('fTeamB').value.trim();
    const series = $('fSeries').value.trim();
    const prediction = $('fPrediction').value;
    if (!series || !teamA || !teamB) return notice('Series, Team A and Team B are required.', 'err');
    if (!prediction) return notice('Please pick the toss winner prediction.', 'err');

    const m = {
      id: editingId || genId(),
      series,
      matchNo: $('fMatchNo').value.trim(),
      format: 'T20',
      teamA: { name: teamA, code: teamA.slice(0, 3).toUpperCase(), color: $('fColorA').value },
      teamB: { name: teamB, code: teamB.slice(0, 3).toUpperCase(), color: $('fColorB').value },
      venue: $('fVenue').value.trim(),
      time: $('fTime').value ? new Date($('fTime').value).toISOString() : '',
      prediction,
      confidence: parseInt($('fConfidence').value, 10) || null,
      status: $('fStatus').value,
      result: $('fResult').value,
    };

    const idx = data.matches.findIndex((x) => x.id === m.id);
    if (idx >= 0) data.matches[idx] = m; else data.matches.push(m);
    saveDraft();
    renderList();
    clearForm();
    notice('Match saved to draft ✓ — hit “Publish to Website” when done.', 'ok');
  };

  function editMatch(id) {
    const m = data.matches.find((x) => x.id === id);
    if (!m) return;
    editingId = id;
    $('fSeries').value = m.series || '';
    $('fMatchNo').value = m.matchNo || '';
    $('fTeamA').value = m.teamA.name;
    $('fTeamB').value = m.teamB.name;
    $('fColorA').value = m.teamA.color || '#1d4ed8';
    $('fColorB').value = m.teamB.color || '#eab308';
    $('fVenue').value = m.venue || '';
    $('fConfidence').value = m.confidence || '';
    $('fStatus').value = m.status || 'upcoming';
    $('fResult').value = m.result || 'pending';
    if (m.time) {
      const d = new Date(m.time);
      if (!isNaN(d)) {
        const pad = (n) => String(n).padStart(2, '0');
        $('fTime').value = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
      }
    }
    syncPredictionOptions();
    $('fPrediction').value = m.prediction || '';
    $('formTitle').textContent = '✏️ Edit Match';
    $('cancelEdit').style.display = 'inline-flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- list ---------- */
  function renderList() {
    const el = $('adminList');
    if (!data.matches.length) {
      el.innerHTML = '<em style="color:var(--muted)">No matches in draft. Add one above.</em>';
      return;
    }
    el.innerHTML = data.matches.map((m) => `
      <div class="admin-match-row">
        <div class="admin-match-info">
          <div>${m.teamA.name} vs ${m.teamB.name} <span style="color:var(--muted)">· ${m.series}</span></div>
          <div>🪙 Pick: <b>${m.prediction}</b> · ${m.result === 'won' ? '✅ won' : m.result === 'lost' ? '❌ lost' : '⏳ pending'}</div>
        </div>
        <div class="admin-match-actions">
          <button class="btn btn-ghost btn-sm" data-act="won" data-id="${m.id}">✓ Won</button>
          <button class="btn btn-ghost btn-sm" data-act="lost" data-id="${m.id}">✗ Lost</button>
          <button class="btn btn-ghost btn-sm" data-act="edit" data-id="${m.id}">Edit</button>
          <button class="btn btn-danger btn-sm" data-act="del" data-id="${m.id}">Delete</button>
        </div>
      </div>`).join('');

    el.querySelectorAll('button[data-act]').forEach((btn) => {
      btn.onclick = () => {
        const { act, id } = btn.dataset;
        const m = data.matches.find((x) => x.id === id);
        if (act === 'edit') return editMatch(id);
        if (act === 'del') {
          if (!confirm(`Delete ${m.teamA.name} vs ${m.teamB.name}?`)) return;
          data.matches = data.matches.filter((x) => x.id !== id);
        }
        if (act === 'won') { m.result = 'won'; m.status = 'done'; }
        if (act === 'lost') { m.result = 'lost'; m.status = 'done'; }
        saveDraft();
        renderList();
      };
    });
  }

  $('clearAll').onclick = () => {
    if (!confirm('Remove ALL matches from the draft?')) return;
    data.matches = [];
    saveDraft();
    renderList();
  };

  /* ---------- draft persistence ---------- */
  function saveDraft() {
    localStorage.setItem(LS_DRAFT, JSON.stringify(data));
  }

  /* ---------- load: draft > live json ---------- */
  function loadData() {
    const draft = localStorage.getItem(LS_DRAFT);
    if (draft) {
      try {
        data = JSON.parse(draft);
        renderList();
        return;
      } catch { /* fall through */ }
    }
    fetch('data/matches.json?v=' + Date.now())
      .then((r) => r.json())
      .then((d) => { data = d; saveDraft(); renderList(); })
      .catch(() => { data = { updated: '', matches: [] }; renderList(); });
  }

  /* ---------- publish to GitHub ---------- */
  $('publish').onclick = async () => {
    const c = getConn();
    if (!c.owner || !c.repo || !c.token) {
      return notice('Fill the GitHub connection box (username, repo, token) and click “Save Connection” first.', 'err');
    }
    data.updated = new Date().toISOString();
    saveDraft();

    const api = `https://api.github.com/repos/${c.owner}/${c.repo}/contents/data/matches.json`;
    const headers = {
      Authorization: `Bearer ${c.token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    notice('Publishing… ⏳', 'info');
    try {
      // get current sha (file should exist)
      let sha;
      const getRes = await fetch(api, { headers });
      if (getRes.ok) sha = (await getRes.json()).sha;
      else if (getRes.status !== 404) throw new Error(`GitHub read failed (HTTP ${getRes.status})`);

      const body = {
        message: `Update toss predictions — ${new Date().toLocaleDateString('en-IN')}`,
        content: b64encode(JSON.stringify(data, null, 2)),
      };
      if (sha) body.sha = sha;

      const putRes = await fetch(api, { method: 'PUT', headers, body: JSON.stringify(body) });
      if (!putRes.ok) {
        const err = await putRes.json().catch(() => ({}));
        throw new Error(err.message || `HTTP ${putRes.status}`);
      }
      notice('✅ Published! The live website will show the new predictions in about a minute.', 'ok');
    } catch (e) {
      notice(`❌ Publish failed: ${e.message}. Check the token has “Contents: Read and write” on this repo.`, 'err');
    }
  };

  /* ---------- backup download ---------- */
  $('downloadJson').onclick = () => {
    data.updated = new Date().toISOString();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'matches.json';
    a.click();
  };

  /* ---------- init ---------- */
  loadConn();
  loadData();
  syncPredictionOptions();
})();
