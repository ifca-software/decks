# FMX - Gyms / Clubs (Segment Spec)

## Segment

- Product: FMX
- Segment: Gyms / clubs
- Primary buyer: Operations
- Secondary buyers: Owners
- Typical environment: equipment uptime, member experience, vendor-managed repairs

## Positioning

- One-line promise: Reduce downtime and keep member-facing equipment running with preventive schedules.
- Status quo: breakdowns handled ad hoc; no downtime tracking.
- Unit heuristic (anchor metric): downtime hours avoided.

## Baseline model (defensible assumptions)

- Base inputs:
  - Downtime: 18 hours/month
  - Cost/hour impact: RM 150 (lost sessions, refunds, staff time)
- Formulas:
  - Downtime cost/month = hours x RM/hour
- Modeled baseline values:
  - Downtime cost/month = 18 x 150 = RM 2,700

## Impact model

- Primary lever (pick one): PM compliance reduces breakdowns
- Secondary lever (pick one): faster response time
- Result metrics:
  - downtime down 30-40%
  - response time down 30-50%

## Proof plan (no named claims)

- Operational proof (dashboard): downtime log + response time.
- Workflow proof: work order timestamps.
- Export/report proof: monthly maintenance report.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: breakdown frequency and time-to-fix.
- What artifacts the buyer expects to see: response time and vendor reports.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: member experience suffers when equipment breaks.
3. Baseline: downtime.
4. Value: PM schedules.
5. Impact: hours avoided.
6. How: work orders.
7. ROI: downtime savings.
8. Proof: dashboards.

## Pilot and risk reversal

- Scope: one club, 30 days
- Timeline: setup week 1, go-live week 2, measure weeks 3-4
- Success criteria:
  - downtime down trend
  - PM compliance >= 70%

## Do / Don't

- Do: keep it about uptime.
- Don't: claim revenue uplift.
