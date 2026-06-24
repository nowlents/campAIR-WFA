# Plan: Migrate Camp AIR Platform to Azure Static Web Apps

## Problem

The Camp AIR Platform currently consists of two static React apps deployed to GitHub Pages:

1. **Stakeholder Portal** (`nowlents/campAIR-WFA`) — Session agendas, material links, program overview
2. **Admin Content Repository** (`nowlents/Camp-AIR-WFA-Admin-Content-Repository`) — Content health dashboard, AI scanning, governance workflows

GitHub Pages limitations:

1. **Content review resolutions are per-browser** — When an admin clicks "Implement" or "Reject" on flagged materials, that state lives in localStorage. Other admins see the raw unresolved scan data.
2. **Scan updates require a rebuild + deploy** — The weekly automation commits a new `content-review.json` to the repo, requiring a rebuild. There's no live data.
3. **No access control** — Anyone with the URL can view either app. No role-based access.
4. **No audit trail** — No way to see who resolved a material or when (beyond localStorage on one machine).

## Goals

- Shared, persistent state for content review actions across all admins
- Azure AD authentication with role-based access (broader for stakeholder portal, restricted for admin)
- Audit trail showing who resolved what and when
- Live scan ingestion without manual rebuild
- Enterprise-grade hosting with custom domain support

## Approach

Migrate from GitHub Pages → **Azure Static Web Apps** (two apps) with a **shared Azure Functions** API backend and **Azure Table Storage** for persistence.

**Key architectural decision:** The stakeholder portal is read-only (static content, SharePoint links) and needs only authentication — no backend. The admin content repository requires the full API + database stack.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          Azure Resource Group                            │
│                                                                          │
│  ┌────────────────────────┐       ┌────────────────────────────────────┐│
│  │  Azure Static Web App  │       │  Azure Static Web App              ││
│  │  (Stakeholder Portal)  │       │  (Admin Content Repository)        ││
│  │                        │       │                                    ││
│  │  React Frontend        │       │  React Frontend    Azure Functions ││
│  │  (Vite build)          │       │  (Vite build)  ──▶ /api backend    ││
│  │                        │       │                                    ││
│  │  MSAL.js auth          │       │  MSAL.js auth      API Endpoints: ││
│  │  (read-only access)    │       │  (admin access)    • GET /scans    ││
│  │                        │       │                    • POST /resolve ││
│  │  No backend needed     │       │                    • GET /history  ││
│  │                        │       │                    • POST /scans   ││
│  └────────────────────────┘       └────────────────┬───────────────────┘│
│                                                    │                     │
│         ┌───────────────────────────┐             │                     │
│         │  Entra ID App Registrations│◀────────────┘                     │
│         │  • Stakeholder (broad)    │                                    │
│         │  • Admin (restricted)     │                                    │
│         └───────────────────────────┘                                    │
│                                                                          │
│                                   ┌────────────────────┐                │
│                                   │  Azure Table       │                │
│                                   │  Storage           │                │
│                                   │                    │                │
│                                   │  Tables:           │                │
│                                   │  • Scans           │                │
│                                   │  • Materials       │                │
│                                   │  • Resolutions     │                │
│                                   └────────────────────┘                │
└─────────────────────────────────────────────────────────────────────────┘

External:
┌──────────────────────┐
│  Weekly Scan Agent    │──POST──▶ /api/scans
│  (Copilot CLI         │         (writes new scan
│   scheduled workflow) │          results to DB)
└──────────────────────┘
```

## Data Model (Azure Table Storage)

### Table: Scans
| Field | Type | Description |
|-------|------|-------------|
| PartitionKey | string | "scan" (fixed) |
| RowKey | string | ISO date of scan |
| overallStatus | string | "current" / "warning" / "critical" |
| summary | string | Executive summary |
| nextReviewDate | string | Planned next scan |

### Table: Materials
| Field | Type | Description |
|-------|------|-------------|
| PartitionKey | string | scanDate (links to Scans) |
| RowKey | string | materialId (e.g., "w1-d3am-ppt") |
| sessionId | string | Parent session ID |
| sessionTitle | string | Display title |
| track | string | "shared" / "non-engineering" |
| type | string | "deck" / "guide" / "lab" / "video" |
| title | string | Material title |
| url | string | SharePoint link |
| status | string | "current" / "review-suggested" / "outdated" |
| severity | string | "info" / "warning" / "critical" |
| finding | string | Scan finding text |
| suggestedAction | string | Recommended fix |
| sources | string | JSON array of source URLs |
| detectedDate | string | ISO date |

### Table: Resolutions
| Field | Type | Description |
|-------|------|-------------|
| PartitionKey | string | materialId |
| RowKey | string | scanDate |
| resolution | string | "implemented" / "rejected" |
| resolvedBy | string | User principal name (from MSAL) |
| resolvedAt | string | ISO timestamp |

### Table: History
Composite view built by querying Materials + Resolutions for a given materialId across all scan dates. No separate table needed — it's a cross-partition query.

## API Endpoints (Azure Functions — Admin App Only)

### `GET /api/scans/latest`
Returns the most recent scan with all materials and their resolution states.
- Reads latest Scans row
- Reads all Materials for that scanDate
- Reads all Resolutions for that scanDate
- Merges resolution status into material objects
- Returns the same shape as current `content-review.json` (drop-in replacement)

### `POST /api/materials/:materialId/resolve`
Records an admin's Implement/Reject action.
- Body: `{ "resolution": "implemented" | "rejected", "scanDate": "..." }`
- Writes to Resolutions table with user attribution
- Returns updated material status
- Requires authenticated admin (MSAL)

### `GET /api/materials/:materialId/history`
Returns version history timeline for a material.
- Queries Materials table for all scan dates containing this materialId
- Queries Resolutions table for all resolutions of this materialId
- Returns chronological array of `{ scanDate, status, finding, suggestedAction, resolution, resolvedAt, resolvedBy }`

### `POST /api/scans`
Ingests a new scan result (called by the weekly automation).
- Body: Full scan JSON (same schema as current content-review.json)
- Writes Scans row + all Material rows
- Protected by API key (not user auth)
- Returns 201 Created

## Implementation Sequence

### Phase 1: Stakeholder Portal (Quick Win — No Backend Needed)
- Create Azure Static Web App linked to `nowlents/campAIR-WFA` repo
- Register Entra ID app (broad access scope)
- Add MSAL.js authentication wrapper
- Configure `staticwebapp.config.json` with SPA routing and auth
- Deploy — stakeholder portal is live with SSO

### Phase 2: Admin Infrastructure Setup
- Create second Azure Static Web App linked to `nowlents/Camp-AIR-WFA-Admin-Content-Repository`
- Create Azure Storage Account + Table Storage tables
- Register second Entra ID app (restricted admin access)
- Configure environment variables (connection strings, client ID)

### Phase 3: Admin API Backend (Azure Functions)
- Initialize `/api` folder with Azure Functions v4 (Node.js/TypeScript)
- Implement table client utility with `@azure/data-tables`
- Build `GET /api/scans/latest` endpoint
- Build `POST /api/materials/:id/resolve` endpoint
- Build `GET /api/materials/:id/history` endpoint
- Build `POST /api/scans` ingestion endpoint
- Seed initial data by converting current `content-review.json` into table rows

### Phase 4: Admin Frontend Migration
- Install `@azure/msal-browser` and `@azure/msal-react`
- Create MSAL config and AuthProvider
- Create `src/services/api.ts` client replacing static JSON imports + localStorage
- Refactor ContentReviewDashboard to use API calls
- Add loading/error states
- Add user attribution to resolutions ("Resolved by Tyler Nowlen")
- Update `vite.config.ts` (base path from `/Camp-AIR-WFA-Admin-Content-Repository/` to `/`)

### Phase 5: Automation Migration
- Update weekly scan workflow to POST results to `/api/scans` instead of committing JSON
- Add API key authentication for the ingestion endpoint
- Test end-to-end: scan → API → dashboard reflects new data

### Phase 6: Deploy & Cutover
- Add `staticwebapp.config.json` to both apps
- Push to GitHub → auto-deploys to Azure Static Web Apps
- Verify production: auth, data loading, resolve actions, history
- Update stakeholder links from GitHub Pages URLs → Azure SWA URLs
- (Optional) Configure custom domains (e.g., `campair.microsoft.com`)
- Decommission GitHub Pages deployments

## Current File Structure

```
Source Repo: nowlentyler_microsoft/CampAIR_WFA
├── src/                              ← Stakeholder Portal frontend
│   ├── pages/
│   │   ├── Home.tsx                  ← Overview + material submission CTA
│   │   ├── NonEngineers.tsx          ← Non-engineering track (sessions + alt samples)
│   │   └── Engineers.tsx             ← Engineering track
│   ├── data/
│   │   └── nonEngAgenda.ts           ← All session data with SharePoint links
│   ├── components/
│   │   └── Layout.tsx                ← Sidebar nav (3 tabs: Overview, Non-Eng, Eng)
│   └── App.tsx                       ← Routes (/, /non-engineers, /engineers)
├── admin-app/                        ← Admin Content Repository (separate git repo)
│   ├── src/
│   │   ├── pages/ContentRepository.tsx
│   │   ├── components/ContentReviewDashboard.tsx
│   │   └── data/content-review.json  ← Scan results (11 sessions, 24+ materials)
│   └── vite.config.ts               ← base: '/Camp-AIR-WFA-Admin-Content-Repository/'
├── docs/
│   ├── azure-migration-plan.md       ← This document
│   └── azure-resource-request.md     ← Leadership resource request
└── vite.config.ts                    ← base: '/campAIR-WFA/'

Deployed repos (GitHub Pages):
• https://nowlents.github.io/campAIR-WFA/             ← Stakeholder Portal
• https://nowlents.github.io/Camp-AIR-WFA-Admin-Content-Repository/ ← Admin
```

## Post-Migration File Structure

```
Stakeholder Portal (Azure SWA #1):
├── src/                              ← Unchanged frontend
│   ├── auth/                         ← NEW: MSAL authentication
│   │   ├── msalConfig.ts
│   │   └── AuthProvider.tsx
│   └── ...                           ← Everything else unchanged
├── staticwebapp.config.json          ← NEW: SPA routing + auth config
└── vite.config.ts                    ← MODIFIED: base '/' instead of '/campAIR-WFA/'

Admin Content Repository (Azure SWA #2):
├── api/                              ← NEW: Azure Functions backend
│   ├── package.json
│   ├── host.json
│   ├── src/functions/
│   │   ├── getLatestScan.ts
│   │   ├── resolveMaterial.ts
│   │   ├── getMaterialHistory.ts
│   │   └── ingestScan.ts
│   └── src/shared/
│       ├── tableClient.ts
│       └── types.ts
├── src/                              ← Modified frontend
│   ├── auth/                         ← NEW: MSAL authentication
│   ├── services/api.ts              ← NEW: API client replacing localStorage
│   ├── components/
│   │   └── ContentReviewDashboard.tsx ← MODIFIED: API calls, user attribution
│   └── ...
├── staticwebapp.config.json          ← NEW: routing + auth + API config
└── vite.config.ts                    ← MODIFIED: base '/', dev proxy
```

## Prerequisites & Decisions Needed

1. **Azure subscription** — Contributor access to create a resource group with Static Web Apps + Storage Account
2. **Entra ID app registration permissions** — Two app registrations (or IT creates them)
3. **Custom domain** — Custom URL (e.g., `campair.microsoft.com`) or default Azure SWA URLs?
4. **Access scope** — Broad stakeholder access vs. restricted admin access (see resource request)
5. **Automation API key** — Stored as GitHub secret for the weekly scan workflow

## What Stays the Same

- Stakeholder portal UI (all three pages: Overview, Non-Engineers, Engineers)
- All session/agenda data (static TypeScript files)
- SharePoint material links (24 materials across 11 sessions)
- Microsoft Forms integration (material submission CTA)
- All CSS/styling
- Admin content review dashboard UI (timeline, buttons, status badges, "Open" links)
- The weekly scan automation logic (just the output target changes)

## What Changes

| Layer | Before | After |
|-------|--------|-------|
| Architecture | Single app with 4 tabs | Two separate apps (stakeholder + admin) |
| Hosting | GitHub Pages (2 repos) | Azure Static Web Apps (2 apps) |
| Scan data | `content-review.json` in git | Azure Table Storage via API |
| User actions | localStorage (per-browser) | Azure Table Storage (shared, persistent, attributed) |
| Auth | None (public URLs) | Azure AD via MSAL (role-based) |
| Deploy | Manual `git push` → temp dir → force push gh-pages | Auto-deploy from GitHub push |
| Base URLs | `/campAIR-WFA/` and `/Camp-AIR-WFA-Admin-Content-Repository/` | `/` (root) for both |
| Automation output | Git commit JSON file | POST to `/api/scans` |
| Audit trail | None | Full: who resolved what, when, from which scan |
