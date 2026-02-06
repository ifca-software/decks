# FMX-SME - Clinics (Segment Spec)

## Segment

- Product: FMX-SME
- Segment: Clinics
- Primary buyer: Clinic operations
- Secondary buyers: Owners, compliance lead
- Typical environment: critical equipment uptime, basic compliance checks, limited maintenance staff

## Positioning

- One-line promise: Keep critical assets running with preventive schedules and fast response.
- Status quo: WhatsApp maintenance, emergency call-outs, no PM compliance view.
- Unit heuristic: RM per downtime hour avoided.

## Baseline model

- Base inputs:
  - Downtime: 22 hours/month
  - Cost impact/hour: RM 150 (conservative midpoint)
- Formula:
  - Downtime cost/month = hours x RM/hour
- Modeled baseline:
  - Downtime cost/month = 22 x 150 = RM 3,300

## Impact model

- Primary lever: reduce downtime hours via PM compliance
- Secondary lever: reduce emergency call-outs
- Result metrics:
  - downtime down 30-40%
  - emergency call-outs down 20-30%

## Proof plan

- Operational proof: PM compliance dashboard + downtime log.
- Workflow proof: work order timestamps.
- Export/report proof: monthly compliance/maintenance pack.

## Discovery validation (what to measure first)

- Confirm baseline: downtime hours by asset type and emergency call-out frequency.
- Confirm buyer proof bar: PM compliance definition and reporting cadence.

## Slide notes

2. Problem: downtime hits patient flow and revenue.
3. Baseline: downtime hours and cost/hour.
4. Value: PM schedules and response.
5. Impact: hours avoided -> RM.
6. How: simple setup and mobile work orders.
7. ROI: downtime savings.
8. Proof: PM compliance and response time dashboard.

## Pilot and risk reversal

- Scope: one clinic, 30 days
- Timeline: day-1 setup, go-live week 1, measure weeks 2-4
- Success criteria: PM compliance >= 70%, downtime down trend.

## Do / Don't

- Do: keep clinical outcomes out of scope.
- Don't: promise zero downtime.
