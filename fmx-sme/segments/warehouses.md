# FMX-SME - Warehouses (Segment Spec)

## Segment

- Product: FMX-SME
- Segment: Warehouses
- Primary buyer: Warehouse ops
- Secondary buyers: Finance
- Typical environment: forklifts, dock equipment, power and safety checks, vendor-managed repairs

## Positioning

- One-line promise: Track downtime and reduce emergency repairs with preventive schedules.
- Status quo: breakdowns tracked inconsistently; vendors unbenchmarked.
- Unit heuristic: downtime hours + vendor premium.

## Baseline model

- Base inputs:
  - Downtime: 22 hours/month
  - Cost/hour: RM 150
  - Vendor spend: RM 10,000/month
  - Vendor premium/variance: 18% (RM 1,800)
- Modeled baseline:
  - Downtime cost/month = 22 x 150 = RM 3,300
  - Vendor premium/month = RM 1,800

## Impact model

- Primary lever: reduce downtime via PM
- Secondary lever: reduce vendor premium via transparency
- Result metrics:
  - downtime down 30-40%
  - vendor variance down 10-20%

## Proof plan

- Operational proof: downtime log + vendor performance.
- Workflow proof: work orders.
- Export/report proof: monthly spend and downtime report.

## Discovery validation (what to measure first)

- Confirm baseline: downtime hours, emergency repairs, and vendor spend variance.
- Confirm buyer proof bar: required downtime tracking and vendor scorecard fields.

## Pilot and risk reversal

- Scope: one warehouse, 30 days
- Timeline: setup week 1, go-live week 2, measure weeks 3-4
- Success criteria: PM compliance >= 70%, fewer emergency repairs.

## Do / Don't

- Do: keep assumptions explicit.
- Don't: promise capex avoidance.
