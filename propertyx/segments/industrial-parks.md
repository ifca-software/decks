# PropertyX - Industrial Parks (Segment Spec)

## Segment

- Product: PropertyX
- Segment: Industrial parks
- Primary buyer: Asset manager / operations
- Secondary buyers: Finance, vendor management
- Typical environment: multiple sites, infrastructure-heavy OpEx, vendor reliance, reporting needs for owners

## Positioning

- One-line promise: Control OpEx and vendor performance across every park with one governance dashboard.
- Status quo: vendor performance not measured, OpEx visibility limited, reporting manual.
- Unit heuristic (anchor metric): OpEx per sqft per month + vendor KPI score.

## Baseline model (defensible assumptions)

- Base inputs:
  - Total sqft: 3,000,000
  - OpEx: RM 3.50/sqft/month (industrial baseline)
  - Vendor share of OpEx: 65%
- Formulas:
  - Annual OpEx = sqft x OpEx/sqft/month x 12
  - Annual vendor OpEx = annual OpEx x vendor share
- Modeled baseline values:
  - Annual OpEx = 3,000,000 x 3.50 x 12 = RM 126.0M
  - Vendor OpEx = RM 126.0M x 65% = RM 81.9M

## Impact model

- Primary lever (pick one): vendor governance and spend visibility (0.5-1.5% reduction)
- Secondary lever (pick one): reporting automation
- Result metrics:
  - 1% vendor OpEx reduction modeled = RM 819k/year
  - reporting cycle time down 30-60%

## Proof plan (no named claims)

- Operational proof (dashboard): vendor scorecards + OpEx category trends.
- Workflow proof: budget approvals and change control.
- Export/report proof: monthly owner/governance pack export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: OpEx/sqft by category and top vendor spend.
- What artifacts the buyer expects to see: governance pack format and KPI definitions.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: infrastructure OpEx and vendors drive cost; reporting is slow.
3. Baseline: OpEx base + vendor share.
4. Value: scorecards, budgets, dashboards.
5. Impact: small % of vendor OpEx.
6. How: governance loop.
7. ROI: 1% vendor OpEx + reporting effort.
8. Proof: scorecards + exports.

## Pilot and risk reversal

- Scope: top 5 vendors across 1 park, 60 days
- Timeline: KPI model (week 1-2), data load (week 3-4), first pack (week 5-6), measure (week 7-8)
- Success criteria:
  - vendor KPI coverage >= 90%
  - budget variance visibility >= 95%

## Do / Don't

- Do: keep it about governance and spend.
- Don't: drift into work-order execution (FMX territory) unless intentional.
