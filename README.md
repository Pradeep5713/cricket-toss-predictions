# 🪙 TossGuru — Daily Cricket Toss Predictions

A static website (GitHub Pages) that lists the day's cricket matches and shows **one prediction per match: which team wins the toss**. For entertainment purposes only.

## How it works

- `index.html` — public site. Reads `data/matches.json` and renders the match cards.
- `admin.html` — your private admin panel (bookmark it). Add/edit matches in a form, then click **Publish to Website** — it commits `data/matches.json` to this repo using your GitHub token, and GitHub Pages redeploys automatically (~1 minute).
- `data/matches.json` — the only file that changes daily.

## Daily admin routine

1. Open `https://<your-username>.github.io/cricket-toss-predictions/admin.html`
2. Click **Clear All Matches** (removes yesterday's list)
3. Add today's matches: series, teams, time, and your **toss winner pick**
4. Click **🚀 Publish to Website**
5. After each real toss happens, mark your pick **✓ Won** / **✗ Lost** and publish again

## One-time setup (admin token)

1. Go to GitHub → Settings → Developer settings → [Fine-grained personal access tokens](https://github.com/settings/personal-access-tokens/new)
2. Repository access: **Only select repositories** → this repo
3. Permissions → Repository permissions → **Contents: Read and write**
4. Generate, copy the token, paste it into the admin page's GitHub Connection box, **Save Connection**

The token stays in your browser's localStorage only — it is never published in the site code. Anyone can *open* admin.html, but without your token they cannot change anything.

## Disclaimer

A coin toss is 50/50 and cannot be predicted. This site exists purely for fun. It does not promote or facilitate betting or gambling.
