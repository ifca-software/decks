# AuditX - Healthcare Providers (Segment Spec)

## Segment

- Product: AuditX
- Segment: Healthcare providers (hospital groups, specialist centers)
- Primary buyer: Head of internal audit / compliance
- Secondary buyers: Quality, Clinical engineering, Operations
- Typical environment: multi-site audits, accreditation readiness, heavy documentation and evidence requirements

## Positioning

- One-line promise: Make accreditation evidence and audit closure a repeatable workflow, not a scramble.
- Status quo: evidence in shared drives, CAPA tracked in email, limited visibility across sites.
- Unit heuristic (anchor metric): CAPA cycle time (days) + findings aging.

## Baseline model (defensible assumptions)

- Base inputs:
  - Sites: 5
  - Audit programs/year per site: 4
  - Findings per audit: 18
  - CAPA closure time: 45 days
  - Repeat finding rate: 20%
- Formulas:
  - Repeat findings per audit = findings x repeat rate
  - Repeat findings/year per site = repeat findings per audit x programs/year
- Modeled baseline values:
  - Repeat findings per audit = 18 x 20% = 3-4
  - Repeat findings/year per site = 3.6 x 4 = ~14

## Impact model

- Primary lever (pick one): enforce CAPA ownership, due dates, and verification
- Secondary lever (pick one): standardize audit checklists and evidence capture across sites
- Result metrics:
  - CAPA closure down from 45 to 21-30 days
  - repeat findings down 30-50% after 2 cycles

## Proof plan (no named claims)

- Operational proof (dashboard): CAPA aging by site/category, verification status, and overdue list.
- Workflow proof: CAPA assignment -> evidence -> verification signoff.
- Export/report proof: audit pack export (program/site/date) with evidence attachments.
- Optional: anonymized before/after (to be validated in discovery): CAPA cycle time and repeat finding rate.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: CAPA days by category, repeat finding rate, and how evidence is stored today.
- What artifacts the buyer expects to see: accreditation-ready audit pack format and required logs.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: accreditation pressure + scattered evidence across sites.
3. Baseline economics: findings, repeat rate, CAPA closure days.
4. Value levers: standard checklists, evidence capture, CAPA workflow.
5. Impact: faster CAPA closure and fewer repeats.
6. How it works: site-level templates + group dashboard.
7. Investment and ROI: focus on reduced repeat findings + time saved preparing packs.
8. Proof: show CAPA dashboard + exportable pack.

## Pilot and risk reversal

- Scope: one audit program, 1-2 sites, 60 days
- Timeline: setup (week 1), pilot audit + CAPA (weeks 2-6), measure (weeks 7-8)
- Success criteria:
  - 90%+ findings assigned within 48 hours
  - CAPA closure time down >= 30% in pilot

## Do / Don't

- Do: keep claims on closure discipline and evidence export.
- Don't: claim clinical outcome improvements.
