# AuditX - Public Sector / GLCs (Segment Spec)

## Segment

- Product: AuditX
- Segment: Public sector / GLCs
- Primary buyer: Head of internal audit
- Secondary buyers: Audit committee, governance, compliance
- Typical environment: many departments, governance reporting, audit committee packs, procurement/process audits

## Positioning

- One-line promise: Governance-grade audit reporting with traceability from finding to closure.
- Status quo: manual reporting packs, inconsistent follow-ups, limited accountability.
- Unit heuristic (anchor metric): findings aging + audit committee pack cycle time.

## Baseline model (defensible assumptions)

- Base inputs:
  - Audit programs/year: 8
  - Findings per program: 15
  - Finding closure SLA: 30 days target
  - Overdue rate: 40% (without tracking)
- Formulas:
  - Overdue findings/program = findings x overdue rate
  - Overdue findings/year = overdue findings/program x programs/year
- Modeled baseline values:
  - Overdue findings/program = 15 x 40% = 6
  - Overdue findings/year = 6 x 8 = 48

## Impact model

- Primary lever (pick one): enforce ownership + due dates + escalation
- Secondary lever (pick one): automate audit committee reporting packs
- Result metrics:
  - overdue rate down from 40% to 15-25%
  - reporting pack cycle time down 30-60%

## Proof plan (no named claims)

- Operational proof (dashboard): governance dashboard (open/overdue by department, severity, owner).
- Workflow proof: escalation path for overdue findings.
- Export/report proof: audit committee pack export with audit trail.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: overdue rate, current escalation behavior, and pack assembly effort.
- What artifacts the buyer expects to see: committee pack layout and required governance metrics.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: accountability breaks when follow-up is manual.
3. Baseline: overdue findings/year and reporting cycle.
4. Value: ownership, escalation, reporting automation.
5. Impact: fewer overdue and faster packs.
6. How: workflows and dashboards by department.
7. ROI: time saved building packs + reduced rework.
8. Proof: dashboard + committee pack export.

## Pilot and risk reversal

- Scope: 2 departments, 2 audit programs, 60 days
- Timeline: setup (week 1-2), run program + follow-up (week 3-6), committee pack (week 7-8)
- Success criteria:
  - 90%+ findings have owner + due date within 48 hours
  - committee pack generated from system data within pilot

## Do / Don't

- Do: emphasize traceability and governance.
- Don't: claim reduced fraud without scope.
