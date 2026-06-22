# Resource Request: Camp AIR Deliverables Portal — Production Launch

## Summary

The Workforce Acceleration team has built a **Camp AIR Deliverables Portal** — an internal web application that serves as the centralized hub for all Camp AIR program materials, session agendas, and content health monitoring. The app is fully functional today in a staging environment and is ready to move to production.

To launch this app for internal stakeholders and facilitators, I need **two Azure resources provisioned** and **one administrative action**. All resources fall within Azure's free tier — there is no ongoing cost.

---

## What the App Does

The Camp AIR Deliverables Portal provides:

- **Session agendas** for both Engineering and Non-Engineering tracks, with direct links to all facilitator materials (presentations, guides, lab exercises, video talk tracks) stored in SharePoint
- **A content health dashboard** that uses an AI-driven weekly scan to automatically flag materials that may be outdated due to platform changes (e.g., Copilot Studio updates, M365 feature releases)
- **A human review workflow** where content owners can mark flagged materials as "Implemented" (updated) or "Rejected" (no change needed), with full version history tracking
- **Intake forms** for facilitator onboarding and material submissions via Microsoft Forms

Today, the app runs as a static site on GitHub Pages. This works for demos and reviews, but has a critical limitation: **user actions (review decisions) are stored locally in each person's browser** and are not shared across users. Moving to Azure Static Web Apps with a lightweight backend will make all user actions persistent and visible to the entire team.

---

## What I Need

### 1. Azure Subscription Access

| Detail | Value |
|--------|-------|
| **Resource needed** | Contributor role on a resource group (new or existing) |
| **Resources I will create** | Azure Static Web App (Free tier), Azure Storage Account (Table Storage) |
| **Estimated cost** | **$0/month** — Free tier covers 100GB bandwidth, 500K API invocations, and 2 custom domains. Table Storage for this data volume costs < $0.01/month. |
| **Region** | West US 2 (or whichever is standard for our team) |

**What this enables:** Hosting the React web app with a serverless API backend that stores content review data in Azure Table Storage.

### 2. Azure AD (Entra ID) App Registration

| Detail | Value |
|--------|-------|
| **Resource needed** | Permission to register an application in Entra ID, or have one registered on my behalf |
| **App type** | Single-page application (SPA) |
| **API permissions** | `User.Read` (delegated) — basic profile only |
| **Redirect URI** | The Azure Static Web App URL (determined after resource creation) |
| **Multi-tenant** | No — single tenant (Microsoft internal only) |

**What this enables:** Users sign in with their existing Microsoft credentials. No new passwords or accounts. This also allows us to restrict access to authorized personnel only.

### 3. Access Scope Decision (Leadership Input Needed)

I need guidance on who should be able to access the portal:

| Option | Description |
|--------|-------------|
| **A. All Microsoft FTEs** | Anyone with a Microsoft corp account can access |
| **B. Specific org/group** | Restrict to Workforce Acceleration team + Camp AIR facilitators |
| **C. Security group** | Create or use an existing Azure AD security group for access control |

My recommendation is **Option B or C** — the content review dashboard contains operational data that is most relevant to the Camp AIR team.

---

## What I Already Have (No Additional Resources Needed)

| Component | Status |
|-----------|--------|
| Fully built React web application | ✅ Complete |
| GitHub repository with source code | ✅ Set up |
| Automated weekly content freshness scanning | ✅ Running |
| All Camp AIR session materials linked to SharePoint | ✅ Configured |
| Microsoft Forms for intake workflows | ✅ Live |
| Development and testing environment | ✅ Operational |

---

## What Happens After Provisioning

Once I have access to the Azure resources, I can complete the migration independently:

1. Create the Azure Static Web App linked to the existing GitHub repo (auto-deploys on push)
2. Set up Table Storage tables for content review data
3. Configure the Azure AD app registration with the correct redirect URIs
4. Add authentication to the frontend (MSAL.js — standard Microsoft auth library)
5. Deploy and verify with stakeholders

No additional engineering support is needed — the implementation work is handled by me with AI-assisted development tooling.

---

## Timeline

Once Azure access is provisioned, the migration can be completed and tested within one sprint cycle. The app can go live to stakeholders immediately after.

---

## Contact

For questions about this request or the Camp AIR Deliverables Portal, please reach out to me directly.

**Tyler Nowlen**
Workforce Acceleration Team
