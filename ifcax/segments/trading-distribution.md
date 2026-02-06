# IFCAx - Trading / Distribution (Segment Spec)

## Segment

- Product: IFCAx
- Segment: Trading / distribution
- Primary buyer: Finance controller / operations
- Secondary buyers: Procurement, warehouse ops
- Typical environment: high PO volume, inventory movement, AP/AR aging, tight cash

## Positioning

- One-line promise: Reduce PO-to-pay friction and gain real-time aging and cash visibility.
- Status quo: approvals slow, duplicate entries, reconciliation heavy.
- Unit heuristic (anchor metric): RM per PO + days saved on close.

## Baseline model (defensible assumptions)

- Base inputs:
  - PO volume: 5,000/year
  - Cost per PO cycle: RM 110
  - Target reduction: RM 25/PO (conservative)
- Formulas:
  - PO savings/year = PO volume x RM saved/PO
- Modeled baseline:
  - PO savings/year = 5,000 x 25 = RM 125,000

## Impact model

- Primary lever: standardized procurement workflow and approvals
- Secondary lever: fewer rework and exceptions
- Result metrics:
  - PO cycle time down 20-30%
  - exception rate down

## Proof plan

- Operational proof: PO aging + AP aging + cash dashboard.
- Workflow proof: approval matrix.
- Export/report proof: audit log export.

## Discovery validation (what to measure first)

- Confirm baseline: PO volume, exception rate, and approval bottlenecks.
- Confirm buyer proof bar: cash/aging dashboards and approval matrix requirements.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: approvals and exceptions slow purchasing and cash control.
3. Baseline: PO volume x cost/PO + close days.
4. Value: approvals + single source of truth.
5. Impact: RM saved/PO + fewer exceptions.
6. How: procurement flow end-to-end.
7. ROI: PO savings + close-time savings.
8. Proof: aging dashboards + approvals.

## Pilot and risk reversal

- Scope: one business unit AP + PO, 60 days
- Timeline: setup (week 1-2), go-live (week 3-4), measure (week 5-8)
- Success criteria: PO cycle time down >= 20%, fewer exceptions.

## Do / Don't

- Do: keep it about velocity and controls.
- Don't: overpromise inventory optimization.
