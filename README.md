# Micro Automation Hub

A lightweight, build-first single-page experience for exploring automation workflows, onboarding developers, and reviewing insights/roadmap data. The project avoids external dependencies to stay friendly for air-gapped environments.

## Getting started

```bash
npm install   # not required, included for convention
npm run build # copies static assets into dist/
npm run dev   # serves the built site from dist/ on http://localhost:5173
```

## Architecture
- **Vanilla JS + CSS** with a hash-based router so deep links work without server rewrites.
- **Offline build script** (`build.js`) copies `src` into `dist`; no external packages needed.
- **Static server** (`server.js`) serves the built assets for local preview.

## Routes
- `/automations` – curated workflows and run history.
- `/maru-portal` – developer onboarding and project lifecycle tracking.
- `/insights` – KPI cards, adoption leaderboard, and value realization table.
- `/roadmap` – upcoming features and a feedback backlog.
