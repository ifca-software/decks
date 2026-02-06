# RentX - Co-working / Serviced Offices (Segment Spec)

## Segment

- Product: RentX
- Segment: Co-working / serviced offices
- Primary buyer: Operations / finance
- Secondary buyers: Sales admin, community managers
- Typical environment: monthly billing, frequent plan changes, higher churn, many small invoices

## Positioning

- One-line promise: Make monthly billing and changes auditable and fast, with fewer disputes.
- Status quo: manual billing adjustments, plan changes not tracked, disputes frequent.
- Unit heuristic (anchor metric): billing accuracy + admin hours/month.

## Baseline model (defensible assumptions)

- Base inputs:
  - Customers: 500
  - Invoices/month: 500
  - Adjustment rate: 15% invoices require adjustment
  - Time per adjustment: 15 minutes
  - Hourly cost: RM 40
- Formulas:
  - Adjustments/month = invoices x adjustment rate
  - Admin hours/month = adjustments x (minutes/60)
- Modeled baseline values:
  - Adjustments/month = 500 x 15% = 75
  - Admin hours/month = 75 x (15/60) = 18.75 hours

## Impact model

- Primary lever (pick one): standardized billing rules + audit trail reduce adjustments
- Secondary lever (pick one): automated reminders reduce payment delays
- Result metrics:
  - adjustment volume down 20-40%
  - disputes down (to measure)

## Proof plan (no named claims)

- Operational proof (dashboard): billing adjustments log + disputes dashboard.
- Workflow proof: plan change approvals and effective dates.
- Export/report proof: monthly billing reconciliation export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: adjustment drivers and current dispute rate.
- What artifacts the buyer expects to see: billing reconciliation format.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: manual plan changes create billing errors.
3. Baseline: adjustment volume and admin hours.
4. Value: rule-based billing and audit trail.
5. Impact: fewer adjustments.
6. How: change control and billing cadence.
7. ROI: time saved and fewer disputes.
8. Proof: logs and exports.

## Pilot and risk reversal

- Scope: one location, 30 days
- Timeline: setup (week 1), go-live (week 2), measure (week 3-4)
- Success criteria:
  - adjustment rate down >= 20%
  - billing export matches finance reconciliation needs

## Do / Don't

- Do: define what counts as an adjustment.
- Don't: mix with CRM sales funnel.
