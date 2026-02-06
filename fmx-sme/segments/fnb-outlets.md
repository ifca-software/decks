# FMX-SME - F&B Outlets (Segment Spec)

## Segment

- Product: FMX-SME
- Segment: F&B outlets
- Primary buyer: Operations
- Secondary buyers: Outlet managers
- Typical environment: refrigeration uptime, safety checks, fast vendor dispatch

## Positioning

- One-line promise: Cut emergency call-outs and reduce time-to-fix with mobile work orders.
- Status quo: breakdowns handled ad hoc; no vendor performance record.
- Unit heuristic: emergency call-outs per month + response time.

## Baseline model

- Base inputs:
  - Emergency call-outs: 8/month
  - Premium per emergency call-out: RM 400
  - Downtime: 12 hours/month
  - Cost/hour: RM 150
- Modeled baseline:
  - Emergency premium/month = 8 x 400 = RM 3,200
  - Downtime cost/month = 12 x 150 = RM 1,800

## Impact model

- Primary lever: reduce emergency call-outs via PM
- Secondary lever: faster response
- Result metrics:
  - call-outs down 20-40%
  - response time down 30-50%

## Proof plan

- Operational proof: response time dashboard + vendor scorecards.
- Workflow proof: dispatch and closure timestamps.
- Export/report proof: monthly maintenance summary.

## Discovery validation (what to measure first)

- Confirm baseline: emergency call-outs/month and average time-to-fix.
- Confirm buyer proof bar: response time SLA and vendor performance reporting needs.

## Pilot and risk reversal

- Scope: 5 outlets, 30 days
- Timeline: setup week 1, go-live week 2, measure weeks 3-4
- Success criteria: emergency call-outs down >= 20%.

## Do / Don't

- Do: tie value to avoided premiums and response times.
- Don't: overpromise savings without defining call-out baseline.
