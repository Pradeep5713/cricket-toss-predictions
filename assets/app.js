/* TossGuru — public site: render matches from data/matches.json */
(function () {
  const matchList = document.getElementById('matchList');
  const updatedPill = document.getElementById('updatedPill');
  const statMatches = document.getElementById('statMatches');
  const statDate = document.getElementById('statDate');
  document.getElementById('year').textContent = new Date().getFullYear();

  const fmtTime = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return iso || '';
    return d.toLocaleString('en-IN', {
      day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', hour12: true,
    });
  };

  const fmtUpdated = (iso) => {
    const d = new Date(iso);
    if (isNaN(d)) return '';
    return d.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  function resultBadge(m) {
    if (m.result === 'won') return '<span class="result-badge won">✓ Prediction Won</span>';
    if (m.result === 'lost') return '<span class="result-badge lost">✗ Prediction Lost</span>';
    if (m.status === 'live') return '<span class="result-badge pending"><span class="status-live">● LIVE</span></span>';
    return '<span class="result-badge pending">Toss Pending</span>';
  }

  function teamHtml(team, isPick, right) {
    return `
      <div class="team ${right ? 'right' : ''}">
        <div class="team-badge" style="background:${esc(team.color || '#374151')}">${esc(team.code || team.name.slice(0, 3).toUpperCase())}</div>
        <div class="team-name ${isPick ? 'winner-pick' : ''}">${esc(team.name)}${isPick ? ' 🪙' : ''}</div>
      </div>`;
  }

  function render(data) {
    const matches = data.matches || [];
    statMatches.textContent = matches.length;
    statDate.textContent = data.updated ? new Date(data.updated).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—';
    updatedPill.textContent = data.updated ? `Updated ${fmtUpdated(data.updated)}` : 'Updated today';

    if (!matches.length) {
      matchList.innerHTML = '<div class="empty-card">No matches listed yet — check back soon! 🏏</div>';
      return;
    }

    matchList.innerHTML = matches.map((m) => {
      const pickA = m.prediction === m.teamA.name;
      const pickB = m.prediction === m.teamB.name;
      return `
        <article class="match-card">
          <div class="match-top">
            <div><span class="series-tag">${esc(m.series)}</span> <span class="match-no">· ${esc(m.matchNo || m.format || '')}</span></div>
            <div class="match-time">🕒 ${esc(fmtTime(m.time))} IST</div>
          </div>
          <div class="teams-row">
            ${teamHtml(m.teamA, pickA, false)}
            <div class="vs">VS</div>
            ${teamHtml(m.teamB, pickB, true)}
          </div>
          ${m.venue ? `<div class="venue">📍 ${esc(m.venue)}</div>` : ''}
          <div class="prediction-box ${m.prediction ? '' : 'tba'}">
            <div>
              <div class="prediction-label">Toss Winner Prediction</div>
              ${m.prediction
                ? `<div class="prediction-team">🏆 ${esc(m.prediction)}</div>`
                : '<div class="prediction-team tba-text">🪙 To Be Announced</div>'}
            </div>
            <div style="text-align:right">
              ${m.confidence ? `<div class="confidence">Confidence <b>${esc(m.confidence)}%</b></div>` : ''}
              ${resultBadge(m)}
            </div>
          </div>
        </article>`;
    }).join('');
  }

  fetch('data/matches.json?v=' + Date.now())
    .then((r) => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(render)
    .catch((e) => {
      matchList.innerHTML = '<div class="empty-card">Could not load matches. Please refresh the page.</div>';
      console.error('Failed to load matches.json', e);
    });
})();
