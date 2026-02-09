# FMX - Retail Chain Outlets (Segment Spec)

## Segment

- Product: FMX
- Segment: Retail chain outlets (SME multi-site)
- Primary buyer: Operations
- Secondary buyers: Finance
- Typical environment: many small sites, vendor dispatch, response time, preventive schedules often skipped

## Positioning

- One-line promise: Standardize maintenance across outlets with one dashboard and fewer emergency call-outs.
- Status quo: WhatsApp maintenance, no vendor benchmarking.
- Unit heuristic (anchor metric): emergency call-outs per outlet + response time.

## Baseline model (defensible assumptions)

- Base inputs:
  - Outlets: 30
  - Emergency call-outs/outlet/month: 1
  - Premium per call-out: RM 400
- Formulas:
  - Emergency premium/month = outlets x call-outs x premium
- Modeled baseline values:
  - Premium/month = 30 x 1 x 400 = RM 12,000

## Impact model

- Primary lever (pick one): reduce emergency call-outs via PM compliance
- Secondary lever (pick one): reduce response time via dispatch tracking
- Result metrics:
  - call-outs down 20-40%
  - response time down 30-50%

## Proof plan (no named claims)

- Operational proof (dashboard): outlet response time and call-outs.
- Workflow proof: dispatch and closure timestamps.
- Export/report proof: monthly vendor performance report.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: call-outs/outlet and vendor premiums.
- What artifacts the buyer expects to see: outlet rollups and vendor reports.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: maintenance inconsistency across outlets.
3. Baseline: emergency premiums.
4. Value: PM schedules and dispatch tracking.
5. Impact: fewer call-outs.
6. How: mobile work orders.
7. ROI: avoided premiums.
8. Proof: dashboards.

## Pilot and risk reversal

- Scope: 10 outlets, 30 days
- Timeline: setup week 1, go-live week 2, measure weeks 3-4
- Success criteria:
  - call-outs down >= 20%
  - response time dashboard live

## Do / Don't

- Do: keep it measurable.
- Don't: drift into inventory or POS.
