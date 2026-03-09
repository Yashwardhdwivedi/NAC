# Architecture Overview

## High-Level Design

NorthAsia HR Suite is designed as a modular, multi-tenant SaaS platform.

- **Presentation Layer**: Web dashboard (Next.js) and mobile app (React Native)
- **Application Layer**: Node.js/Express APIs grouped by domain
- **Data Layer**: PostgreSQL with tenant-scoped entities
- **Integration Layer**: Email, SMS, resume parsing, payments, calendar

## Multi-Tenancy Strategy

- Every tenant-scoped table includes a `tenantId`.
- API middleware resolves tenant context from authenticated JWT claims.
- All domain queries must filter by `tenantId`.
- Cross-tenant access is prohibited except platform-level admin controls.

## Domain Services

### Recruitment CRM Service
- Job management
- Applications and pipeline transitions
- Interview scheduling
- Candidate profile enrichment and matching hooks

### HRMS Service
- Employee lifecycle
- Leave and attendance
- Payroll and performance
- Employee document management

### Background Verification Service
- Verification request lifecycle
- Vendor assignment and collaboration
- Evidence/document collection
- Report generation

### Marketplace Service
- Catalog of HR service packages
- Booking lifecycle and fulfillment
- Payment and subscription events

## API and Security

- JWT authentication
- RBAC authorization per route/action
- Audit logs for sensitive actions
- Rate limiting and request validation

## Scalability Considerations

- Stateless APIs for horizontal scaling
- Queue-based background jobs for parsing/report generation/notifications
- Caching for dashboards and read-heavy endpoints
- Optional service decomposition as traffic grows
