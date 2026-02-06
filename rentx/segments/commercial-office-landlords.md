# RentX - Commercial Office Landlords (Segment Spec)

## Segment

- Product: RentX
- Segment: Commercial office landlords
- Primary buyer: Leasing / property management
- Secondary buyers: Finance, asset manager
- Typical environment: renewals, rent escalations, arrears, tenant communications

## Positioning

- One-line promise: Keep renewals and collections predictable with one lease ledger and escalation calendar.
- Status quo: renewals tracked manually, arrears chased by email, escalations missed.
- Unit heuristic (anchor metric): RM per tenant per month (arrears + admin) + missed escalation RM.

## Baseline model (defensible assumptions)

- Base inputs:
  - Tenants: 200
  - Average rent: RM 8,000/month
  - Arrears rate: 6.5%
  - Escalation: 3% annually
  - Escalation miss rate: 10% of tenants miss one escalation
- Formulas:
  - Arrears RM/month = tenants x rent x arrears %
  - Missed escalation/year = tenants x miss rate x rent x 12 x escalation %
- Modeled baseline values:
  - Arrears/month = 200 x 8,000 x 6.5% = RM 104,000
  - Missed escalation/year = 200 x 10% x 8,000 x 12 x 3% = RM 576,000

## Impact model

- Primary lever (pick one): escalation + renewal alerts with ownership
- Secondary lever (pick one): automated billing/reminders reduces arrears
- Result metrics:
  - reduce missed escalations materially (target to measure)
  - arrears down 20-45% (modeled)

## Proof plan (no named claims)

- Operational proof (dashboard): escalation calendar + arrears aging dashboard.
- Workflow proof: renewal workflow with approvals.
- Export/report proof: monthly leasing and arrears pack.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: escalation dates/terms, arrears aging, renewal volume.
- What artifacts the buyer expects to see: leasing pack format and approval chain.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: manual renewals and escalations cause leakage.
3. Baseline: arrears and missed escalation RM.
4. Value: ledger + alerts + workflow.
5. Impact: recovered RM.
6. How: calendars, reminders, dashboards.
7. ROI: a few prevented misses pay quickly.
8. Proof: calendars and exports.

## Pilot and risk reversal

- Scope: 50 tenants, 60 days
- Timeline: load leases (week 1-2), go-live alerts (week 3-4), measure (week 5-8)
- Success criteria:
  - escalation/renewal visibility for next 180 days = 100%
  - invoices issued on time >= 95%

## Do / Don't

- Do: anchor value on escalations + arrears.
- Don't: promise occupancy lift.
