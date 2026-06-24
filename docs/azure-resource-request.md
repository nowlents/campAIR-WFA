# Resource Request: Camp AIR Platform — Production Launch

## Summary

The Workforce Acceleration team has built the **Camp AIR Platform** — a suite of two internal web applications that serve as the centralized hub for Camp AIR program delivery and content governance. The platform is fully functional today in a staging environment (GitHub Pages) and is ready to move to production.

The platform consists of:
1. **Camp AIR Stakeholder Portal** — Customer/stakeholder-facing app with session agendas, material links, and program overview
2. **Camp AIR Admin Content Repository** — Internal admin tool for content health monitoring, AI-driven freshness scanning, and material governance

To launch this platform enterprise-wide for internal stakeholders and facilitators, I need **Azure resources provisioned** and **one administrative action**. All resources fall within Azure's free tier — there is no ongoing cost.

---

## Current State (Working Prototype)

Both apps are fully built, deployed, and accessible today:

| App | Prototype URL | Audience |
|-----|---------------|----------|
| Stakeholder Portal | https://nowlents.github.io/campAIR-WFA/ | Camp AIR participants, facilitators, leadership |
| Admin Content Repository | https://nowlents.github.io/Camp-AIR-WFA-Admin-Content-Repository/ | Content admins, program owners |

---

## What the Apps Do

### Stakeholder Portal
- **Program overview** with structured 3-week experience summary and key deliverables
- **Session agendas** for both Engineering and Non-Engineering tracks (Week 0 manager prep + Week 1 daily sessions)
- **Direct links** to all facilitator materials (presentations, facilitator guides, lab exercises, video talk track prep) stored in SharePoint
- **Teaser trailers** for each session to preview content
- **Intake form** for material submissions via Microsoft Forms

### Admin Content Repository
- **Content health dashboard** with AI-driven weekly scans that automatically flag materials potentially outdated due to platform changes (e.g., Copilot Cowork GA, Copilot Studio updates, M365 feature releases)
- **Direct "Open" links** to each material for quick admin access during review
- **Human review workflow** where content owners can mark flagged materials as "Implemented" (updated) or "Rejected" (no change needed)
- **Version history tracking** showing scan-over-scan status evolution per material
- **Severity indicators** (info/warning/critical) for prioritized review

---

## What I Need

### 1. Azure Subscription Access

| Detail | Value |
|--------|-------|
| **Resource needed** | Contributor role on a resource group (new or existing) |
| **Resources I will create** | 2× Azure Static Web Apps (Free tier), 1× Azure Storage Account (Table Storage) |
| **Estimated cost** | **$0/month** — Free tier covers 100GB bandwidth, 500K API invocations, and 2 custom domains per app. Table Storage for this data volume costs < $0.01/month. |
| **Region** | West US 2 (or whichever is standard for our team) |

**What this enables:** Hosting both React apps with a shared serverless API backend that stores content review data in Azure Table Storage.

### 2. Azure AD (Entra ID) App Registrations

| Detail | Value |
|--------|-------|
| **Resource needed** | Permission to register two applications in Entra ID |
| **App type** | Single-page application (SPA) × 2 |
| **API permissions** | `User.Read` (delegated) — basic profile only |
| **Redirect URIs** | Azure Static Web App URLs (determined after resource creation) |
| **Multi-tenant** | No — single tenant (Microsoft internal only) |

**What this enables:** Users sign in with their existing Microsoft credentials. Separate app registrations allow different access scopes per app (stakeholder portal = broader access, admin repository = restricted).

### 3. Access Scope Decision (Leadership Input Needed)

| App | Recommended Access | Rationale |
|-----|-------------------|-----------|
| **Stakeholder Portal** | All Camp AIR participants + facilitators + leadership | Read-only informational content; broad access beneficial |
| **Admin Content Repository** | Content admins + program owners only | Contains operational review workflows and governance controls |

Implementation options for access control:

| Option | Description |
|--------|-------------|
| **A. All Microsoft FTEs** | Anyone with a Microsoft corp account can access both apps |
| **B. Role-based (Recommended)** | Stakeholder Portal = broader group; Admin Repository = restricted security group |
| **C. Single security group** | One group controls access to both apps |

My recommendation is **Option B** — it allows stakeholders to self-serve session materials while keeping operational governance tools restricted to authorized admins.

---

## What I Already Have (No Additional Resources Needed)

| Component | Status |
|-----------|--------|
| Stakeholder Portal — fully built React app | ✅ Complete |
| Admin Content Repository — fully built React app | ✅ Complete |
| GitHub repositories with source code (2 repos) | ✅ Set up |
| Automated weekly content freshness scanning (AI agent) | ✅ Running |
| All Camp AIR session materials linked to SharePoint | ✅ Configured (24 materials across 11 sessions) |
| Microsoft Forms for material intake | ✅ Live |
| Development and testing environments | ✅ Operational |
| Staging deployments on GitHub Pages | ✅ Accessible |

---

## What Happens After Provisioning

Once I have access to the Azure resources, I can complete the migration independently:

1. Create two Azure Static Web Apps linked to their respective GitHub repos (auto-deploys on push)
2. Set up shared Table Storage for content review data
3. Configure Azure AD app registrations with correct redirect URIs and access scopes
4. Add authentication to both frontends (MSAL.js)
5. Migrate the admin dashboard from localStorage-based state to shared API-backed persistence
6. Update the weekly scan automation to POST results to the API instead of committing JSON files
7. Deploy and verify with stakeholders

No additional engineering support is needed — the implementation work is handled by me with AI-assisted development tooling.

---

## Timeline

Once Azure access is provisioned, the migration can be completed and tested within one sprint cycle. The stakeholder portal can go live immediately (it's read-only with no backend requirements). The admin repository requires the API backend for shared persistence but can ship in parallel.

---

## Contact

For questions about this request or the Camp AIR Platform, please reach out to me directly.

**Tyler Nowlen**
Workforce Acceleration Team
