# MODD Sites Dashboard

Internal dashboard listing every site the MODD web-development agent manages — name, status, live preview link, repo link.

- **Adding a site:** append an entry to `data/sites.json` and push; Vercel redeploys automatically.
- **Statuses:** `Building` · `Staging` · `Live` · `Paused`
- Managed by the web-development agent in the `Agentlar` workspace (`agents/web-development/projects/sites-dashboard/`).

## Run locally

```bash
npm install
npm run dev
```
