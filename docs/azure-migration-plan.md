# Plan: Migrate Camp AIR Portal to Azure Static Web Apps

## Problem

The Camp AIR Deliverables Portal is currently a static React app deployed to GitHub Pages. This has two key limitations:

1. **Content review resolutions are per-browser** — When a user clicks "Implement" or "Reject" on flagged materials, that state lives in localStorage. Other users (stakeholders, facilitators) see the raw unresolved scan data.
2. **Scan updates require a rebuild + deploy** — The weekly automation commits a new `content-review.json` to the repo, requiring a GitHub Pages rebuild. There's no live data.

The goal is to make the app dynamic: scan results and human review actions persist in a shared database, all users see the same state, and the app can be secured behind Azure AD authentication.

## Approach

Migrate from GitHub Pages → **Azure Static Web Apps** with an **Azure Functions** API backend and **Azure Table Storage** for persistence. The frontend React code stays almost identical — we're replacing the data layer, not the UI.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Azure Static Web Apps                  │
│                                                          │
│  ┌──────────────────┐     ┌───────────────────────────┐ │
│  │  React Frontend   │────▶│  /api (Azure Functions)   │ │
│  │  (Vite build)     │◀────│                           │ │
│  │                   │     │  GET  /api/scans/latest   │ │
│  │  MSAL.js auth     │     │  POST /api/materials/:id  │ │
│  │                   │     │       /resolve            │ │
│  │                   │     │  GET  /api/materials/:id  │ │
│  │                   │     │       /history            │ │
│  │                   │     │  POST /api/scans          │ │
│  └──────────────────┘     └───────────┬───────────────┘ │
│                                       │                  │
│         ┌─────────────────┐          │                  │
│         │  MSAL / Azure AD │◀─────────┘                  │
│         │  (built-in auth) │                             │
│         └─────────────────┘                              │
└───────────────────────────────────────┬─────────────────┘
                                        │
                              ┌─────────▼─────────┐
                              │  Azure Table       │
                              │  Storage           │
                              │                    │
                              │  Tables:           │
                              │  • Scans           │
                              │  • Materials       │
                              │  • Resolutions     │
                              │  • History         │
                              └────────────────────┘

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

## API Endpoints (Azure Functions)

### `GET /api/scans/latest`
Returns the most recent scan with all materials and their resolution states.
- Reads latest Scans row
- Reads all Materials for that scanDate
- Reads all Resolutions for that scanDate
- Merges resolution status into material objects
- Returns the same shape as current `content-review.json` (drop-in replacement)

### `POST /api/materials/:materialId/resolve`
Records a user's Implement/Reject action.
- Body: `{ "resolution": "implemented" | "rejected", "scanDate": "..." }`
- Writes to Resolutions table
- Returns updated material status
- Requires authenticated user (MSAL)

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

## Frontend Changes

### New: `src/services/api.ts`
Centralized API client that replaces static imports and localStorage:
```typescript
export async function getLatestScan(): Promise<ReviewData> { ... }
export async function resolveMaterial(id: string, scanDate: string, resolution: string): Promise<void> { ... }
export async function getMaterialHistory(id: string): Promise<HistoryEntry[]> { ... }
```

### New: `src/auth/msalConfig.ts`
MSAL configuration for Azure AD authentication:
- Client ID from Azure app registration
- Tenant ID for Microsoft tenant
- Redirect URI matching Azure Static Web Apps URL
- Scopes: `User.Read` (basic profile)

### New: `src/auth/AuthProvider.tsx`
React context provider wrapping the app with MSAL authentication:
- `useIsAuthenticated()` hook for conditional rendering
- `useMsal()` hook for getting user info and tokens
- Login redirect on unauthenticated access

### Modified: `src/components/ContentReviewDashboard.tsx`
- Replace `import reviewData from '../data/content-review.json'` with `useEffect` + `fetch` from API
- Replace all `localStorage` calls with API calls to `/api/materials/:id/resolve` and `/api/materials/:id/history`
- Add loading states while data fetches
- Add user attribution ("Resolved by Tyler Nowlen" from MSAL token)
- Keep all existing UI components (timeline, buttons, status badges) — only the data source changes

### Modified: `src/main.tsx`
- Wrap app in `<MsalProvider>` and `<AuthProvider>`
- Keep existing `<BrowserRouter>` but update `basename` (Azure Static Web Apps serves from root `/`)

### Modified: `vite.config.ts`
- Change `base` from `'/campAIR-WFA/'` to `'/'` (Azure SWA serves from root)
- Add proxy for `/api` during local development

### New: `staticwebapp.config.json`
Azure Static Web Apps configuration:
- Route fallback to `index.html` (SPA routing)
- Auth configuration (allowed routes, login provider)
- API location pointing to `/api` folder

## File Structure (New/Changed)

```
campAIR-WFA/
├── api/                              ← NEW: Azure Functions backend
│   ├── package.json                  ← Node.js dependencies (@azure/data-tables)
│   ├── tsconfig.json
│   ├── host.json                     ← Azure Functions host config
│   ├── local.settings.json           ← Local dev settings (connection strings)
│   ├── src/
│   │   ├── functions/
│   │   │   ├── getLatestScan.ts      ← GET /api/scans/latest
│   │   │   ├── resolveMaterial.ts    ← POST /api/materials/:id/resolve
│   │   │   ├── getMaterialHistory.ts ← GET /api/materials/:id/history
│   │   │   └── ingestScan.ts         ← POST /api/scans (automation endpoint)
│   │   └── shared/
│   │       ├── tableClient.ts        ← Azure Table Storage client
│   │       └── types.ts              ← Shared type definitions
├── src/                              ← Existing frontend (modified)
│   ├── auth/                         ← NEW: Authentication
│   │   ├── msalConfig.ts
│   │   └── AuthProvider.tsx
│   ├── services/                     ← NEW: API client
│   │   └── api.ts
│   ├── components/
│   │   └── ContentReviewDashboard.tsx ← MODIFIED: API calls replace localStorage
│   ├── main.tsx                      ← MODIFIED: MSAL provider wrapper
│   └── ...                           ← Everything else unchanged
├── staticwebapp.config.json          ← NEW: Azure SWA routing/auth config
└── vite.config.ts                    ← MODIFIED: base path + API proxy
```

## Implementation Sequence

### Phase 1: Azure Infrastructure Setup
- Create Azure Static Web Apps resource (linked to GitHub repo)
- Create Azure Storage Account + Table Storage tables
- Register Azure AD app for MSAL authentication
- Configure environment variables (connection strings, client ID)

### Phase 2: API Backend (Azure Functions)
- Initialize `/api` folder with Azure Functions v4 (Node.js/TypeScript)
- Implement table client utility with `@azure/data-tables`
- Build `GET /api/scans/latest` endpoint
- Build `POST /api/materials/:id/resolve` endpoint
- Build `GET /api/materials/:id/history` endpoint
- Build `POST /api/scans` ingestion endpoint
- Seed initial data by converting current `content-review.json` into table rows

### Phase 3: Frontend Auth Integration
- Install `@azure/msal-browser` and `@azure/msal-react`
- Create MSAL config and AuthProvider
- Wrap app in MsalProvider
- Add login redirect for unauthenticated users
- Test auth flow locally with Azure AD

### Phase 4: Data Layer Migration
- Create `src/services/api.ts` client
- Refactor ContentReviewDashboard to use API instead of static JSON + localStorage
- Add loading/error states
- Add user attribution to resolutions
- Update `vite.config.ts` (base path, dev proxy)
- Remove `src/data/content-review.json` from frontend imports

### Phase 5: Automation Migration
- Update weekly scan workflow to POST results to `/api/scans` instead of committing JSON
- Add API key authentication for the ingestion endpoint
- Test end-to-end: scan → API → dashboard reflects new data

### Phase 6: Deploy & Cutover
- Add `staticwebapp.config.json` with SPA fallback routing
- Push to GitHub → auto-deploys to Azure Static Web Apps
- Verify production: auth, data loading, resolve actions, history
- Update stakeholder links from GitHub Pages URL → Azure SWA URL
- (Optional) Configure custom domain

## Prerequisites & Decisions Needed

1. **Azure subscription** — Do you have access to an Azure subscription where you can create resources? (Azure Static Web Apps free tier covers most of this)
2. **Azure AD app registration** — Do you have permissions to register an app in your Microsoft tenant, or does IT need to do this?
3. **Custom domain** — Do you want a custom URL (e.g., `campair.microsoft.com`) or is the default Azure SWA URL fine?
4. **Access scope** — Should ALL Microsoft employees be able to access, or only specific groups/roles?
5. **Automation API key** — The scan ingestion endpoint needs an API key. Should this be stored as a GitHub secret for the workflow?

## What Stays the Same

- All four pages (Overview, Non-Engineers, Engineers, Content Repository)
- All session/agenda data (static TypeScript files — no reason to dynamicize these)
- SharePoint material links
- Microsoft Forms integrations
- All CSS/styling
- The UI for the content review dashboard (timeline, buttons, status badges)
- The weekly scan automation logic (just the output target changes)

## What Changes

| Layer | Before | After |
|-------|--------|-------|
| Hosting | GitHub Pages (static) | Azure Static Web Apps (static + API) |
| Scan data | `content-review.json` committed to repo | Azure Table Storage via API |
| User actions | localStorage (per-browser) | Azure Table Storage (shared, persistent) |
| Auth | None | Azure AD via MSAL |
| Deploy | `git push` to personal repo | Auto-deploy from GitHub repo |
| Base URL | `/campAIR-WFA/` | `/` (root) |
| Automation output | Git commit JSON file | POST to `/api/scans` |
