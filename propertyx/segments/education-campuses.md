# PropertyX - Education Campuses (Segment Spec)

## Segment

- Product: PropertyX
- Segment: Education campuses (universities, colleges)
- Primary buyer: Campus operations / facilities
- Secondary buyers: Finance, governance
- Typical environment: multiple buildings, service-level focus, budget governance, reporting to leadership

## Positioning

- One-line promise: One campus performance view with budget control and reporting that does not depend on spreadsheets.
- Status quo: fragmented reporting, delayed packs, inconsistent KPIs.
- Unit heuristic (anchor metric): reporting cycle days + OpEx per sqft per month.

## Baseline model (defensible assumptions)

- Base inputs:
  - Total sqft: 1,500,000
  - OpEx: RM 4.00/sqft/month
  - Reporting effort: 3 FTE equivalent
  - FTE cost: RM 90,000/year
- Formulas:
  - Annual OpEx = sqft x OpEx/sqft/month x 12
  - Reporting labor = FTE x cost
- Modeled baseline values:
  - Annual OpEx = 1,500,000 x 4.00 x 12 = RM 72.0M
  - Reporting labor = 3 x 90,000 = RM 270,000/year

## Impact model

- Primary lever (pick one): reporting automation and KPI standardization
- Secondary lever (pick one): OpEx visibility for small % reduction
- Result metrics:
  - reporting cycle down 30-60%
  - 0.5-1.0% OpEx reduction modeled

## Proof plan (no named claims)

- Operational proof (dashboard): campus KPI dashboard + OpEx breakdown.
- Workflow proof: budget approval workflow.
- Export/report proof: monthly leadership pack.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: reporting workflow steps and OpEx categories.
- What artifacts the buyer expects to see: leadership pack format.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: reporting lags; budgets are hard to govern.
3. Baseline: OpEx base + reporting effort.
4. Value: dashboards and packs.
5. Impact: cycle time down and small OpEx reduction.
6. How: KPI model and pack automation.
7. ROI: reduced effort + small OpEx.
8. Proof: pack export.

## Pilot and risk reversal

- Scope: one campus cluster (e.g. 5 buildings), 60 days
- Timeline: KPI model (week 1-2), data load (week 3-4), first pack (week 5-6), measure (week 7-8)
- Success criteria:
  - leadership pack generated from system data
  - OpEx category coverage >= 95%

## Do / Don't

- Do: keep it about governance and reporting.
- Don't: promise facility response time improvements (FMX territory).
