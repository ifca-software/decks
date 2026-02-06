# HRX - BPO / Call Centers (Segment Spec)

## Segment

- Product: HRX
- Segment: BPO / call centers
- Primary buyer: HR operations
- Secondary buyers: Finance, workforce management
- Typical environment: large headcount, shifts, attendance and incentive adjustments, strict payroll deadlines

## Positioning

- One-line promise: Reduce payroll admin and corrections at scale with standardized workflows.
- Status quo: high-volume adjustments and approvals.
- Unit heuristic (anchor metric): RM per employee per month admin + correction count.

## Baseline model (defensible assumptions)

- Base inputs:
  - Headcount: 5,000
  - Admin time saved target: 1 hour/employee/month
  - Hourly cost: RM 40
- Formulas:
  - Admin cost/employee/year = hours/month x hourly cost x 12
- Modeled baseline values:
  - Admin cost/employee/year = 1 x 40 x 12 = RM 480
  - Portfolio admin cost/year = 5,000 x 480 = RM 2.4M

## Impact model

- Primary lever (pick one): automate approvals and reduce admin
- Secondary lever (pick one): reduce corrections and disputes
- Result metrics:
  - admin time down 25-40%
  - close time down 20-30%

## Proof plan (no named claims)

- Operational proof (dashboard): approvals queue and exceptions dashboard.
- Workflow proof: self-service submissions + approvals.
- Export/report proof: payroll audit log + statutory exports.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: admin hours, correction rate, and approval bottlenecks.
- What artifacts the buyer expects to see: dashboard rollups by site/team.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: payroll admin does not scale.
3. Baseline: admin cost base.
4. Value: workflows.
5. Impact: hours saved.
6. How: self-service + approvals.
7. ROI: time saved at scale.
8. Proof: dashboards.

## Pilot and risk reversal

- Scope: one site or one function, 1-2 payroll cycles
- Timeline: setup week 1, parallel run cycle 1, cutover cycle 2
- Success criteria:
  - close time down >= 20%
  - critical payroll errors = 0

## Do / Don't

- Do: keep it about scale and standardization.
- Don't: overpromise workforce management replacement.
