# IFCAx - Hospitality Groups (Segment Spec)

## Segment

- Product: IFCAx
- Segment: Hospitality groups (multi-property, multi-outlet)
- Primary buyer: Finance controller
- Secondary buyers: Procurement, operations
- Typical environment: AP/AR volume, vendor spend, multi-entity reporting, slow close

## Positioning

- One-line promise: Faster close and better spend control across properties with one source of truth.
- Status quo: fragmented finance processes by property.
- Unit heuristic (anchor metric): close days + RM per PO.

## Baseline model (defensible assumptions)

- Base inputs:
  - Properties: 10
  - PO volume: 6,000/year
  - Cost per PO: RM 110
  - Close time: 12 days
- Formulas:
  - PO processing cost = volume x cost/PO
- Modeled baseline values:
  - PO processing cost = 6,000 x 110 = RM 660,000/year

## Impact model

- Primary lever (pick one): reduce cost per PO and exceptions
- Secondary lever (pick one): reduce close time via fewer reconciliations
- Result metrics:
  - cost per PO down (modeled RM 20-30)
  - close down 30-50%

## Proof plan (no named claims)

- Operational proof (dashboard): AP/AR aging + cash view.
- Workflow proof: approvals.
- Export/report proof: audit log export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: PO volume, exceptions, and close bottlenecks.
- What artifacts the buyer expects to see: cash/aging reports.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: finance fragmentation creates slow close.
3. Baseline: PO cost base and close days.
4. Value: unified workflows.
5. Impact: RM saved/PO.
6. How: approvals and dashboards.
7. ROI: PO savings + close.
8. Proof: dashboards.

## Pilot and risk reversal

- Scope: AP + PO for 1-2 properties, 60 days
- Timeline: setup (week 1-2), go-live (week 3-4), measure (week 5-8)
- Success criteria:
  - PO cycle time down >= 20%
  - reconciliation hours down >= 15%

## Do / Don't

- Do: keep it finance and controls.
- Don't: overlap with PMS operations.
