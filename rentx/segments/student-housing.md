# RentX - Student Housing (Segment Spec)

## Segment

- Product: RentX
- Segment: Student housing
- Primary buyer: Operations / finance
- Secondary buyers: Property manager
- Typical environment: seasonal renewals, high churn, many small payments, need for clear communications

## Positioning

- One-line promise: Handle seasonal renewals and collections at scale with an automated cadence.
- Status quo: renewals and deposits tracked manually, payment reminders inconsistent.
- Unit heuristic (anchor metric): RM per bed per month (collections/admin).

## Baseline model (defensible assumptions)

- Base inputs:
  - Beds: 2,000
  - Rent/bed: RM 650/month
  - Arrears rate: 6.5%
  - Admin time: 6 minutes/bed/month
  - Admin cost: RM 40/hour
- Formulas:
  - Arrears/bed/month = rent x arrears %
  - Admin cost/bed/month = (minutes/60) x hourly cost
- Modeled baseline values:
  - Arrears/bed/month = 650 x 6.5% = RM 42
  - Admin cost/bed/month = (6/60) x 40 = RM 4

## Impact model

- Primary lever (pick one): automated reminders + payment channels reduce arrears
- Secondary lever (pick one): renewal pipeline visibility
- Result metrics:
  - arrears down 20-45%
  - admin time down 25-40%

## Proof plan (no named claims)

- Operational proof (dashboard): arrears aging by building/block + renewal pipeline.
- Workflow proof: renewal notice -> acceptance -> updated lease.
- Export/report proof: monthly collections and renewals pack.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: renewal seasonality and arrears patterns.
- What artifacts the buyer expects to see: renewal communications and reporting format.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: seasonal churn and manual reminders create arrears.
3. Baseline: per-bed arrears + admin cost.
4. Value: automation + pipeline.
5. Impact: per-bed savings scales.
6. How: renewal and payment workflows.
7. ROI: small per-bed savings scales.
8. Proof: dashboard and export.

## Pilot and risk reversal

- Scope: one block (500 beds), 60 days
- Timeline: setup (week 1-2), go-live (week 3), measure (week 4-8)
- Success criteria:
  - renewal visibility for next 90 days = 100%
  - arrears down >= 20%

## Do / Don't

- Do: keep language aligned to "beds".
- Don't: promise occupancy without defining renewal strategy.
