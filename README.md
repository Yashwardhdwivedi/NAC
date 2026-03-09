# NorthAsia HR Suite

NorthAsia HR Suite is a multi-tenant SaaS HR platform that combines:

- Recruitment CRM (ATS)
- HRMS
- Background Verification
- HR Services Marketplace

## Product Vision

Build a modern, API-ready HR ecosystem for companies and recruitment consultancies with role-based workflows for Admins, HR Managers, Recruiters, Employers, Candidates, and Verification Vendors.

## Core Modules

### 1) Recruitment CRM
- Job posting and application tracking
- Candidate pipeline: Applied → Screening → Interview → Offer → Hired/Rejected
- Resume parsing and candidate search
- Interview scheduling and recruiter dashboards
- Candidate communication and AI matching hooks

### 2) HRMS
- Employee onboarding and records
- Attendance, leave, payroll, and performance management
- Employee self-service portal
- HR analytics and secure document storage

### 3) Background Verification
- Identity, address, education, employment, and criminal checks
- Verification request workflow and vendor assignment
- Status tracking and report generation/download

### 4) HR Services Marketplace
- Service packages for recruitment, payroll, compliance, and advisory
- Online booking, tracking, client dashboards, and payment integration

## Suggested Tech Stack

- Frontend: Next.js + React + TailwindCSS
- Backend: Node.js + Express
- Database: PostgreSQL
- Mobile: React Native
- Deployment: Vercel + AWS

## Authentication & Security

- JWT-based authentication
- Role-based access control (RBAC)
- Login/signup, password reset, and email verification

## Subscription Model

- Free: limited job posting and basic candidate tracking
- Startup: Recruitment CRM + candidate database
- Business: Recruitment CRM + HRMS + analytics
- Enterprise: Full suite + background verification + priority support

## Repository Contents

- `docs/architecture.md` — system architecture and module boundaries
- `docs/roadmap.md` — phased implementation plan
- `prisma/schema.prisma` — initial multi-tenant data model for PostgreSQL
- `src/rbac.ts` — role and permission matrix scaffold

## Next Steps

1. Scaffold backend API (Express + TypeScript) with JWT auth.
2. Implement tenant isolation middleware.
3. Scaffold Next.js dashboard with role-aware routing.
4. Add workflow endpoints for recruitment and verification pipelines.
5. Integrate payment, email, SMS, and calendar providers.
