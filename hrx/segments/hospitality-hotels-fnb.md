# HRX - Hospitality (Hotels, F&B) (Segment Spec)

## Segment

- Product: HRX
- Segment: Hospitality (hotels, F&B)
- Primary buyer: HR / payroll lead
- Secondary buyers: Operations, finance
- Typical environment: shift work, overtime, service charge/tips, high turnover, many outlets

## Positioning

- One-line promise: Close payroll reliably despite shifts, allowances, and high turnover - with audit-ready approvals.
- Status quo: manual shift/overtime adjustments, disputes, late approvals.
- Unit heuristic (anchor metric): payroll exceptions per 1,000 payslips + days to close.

## Baseline model (defensible assumptions)

- Base inputs:
  - Headcount: 2,000
  - Payslips/month: 2,000
  - Exception rate: 12% (shifts, OT, allowances)
  - Cost per exception: RM 60
  - Close time: 5 days
- Formulas:
  - Exceptions/month = payslips x exception rate
  - Exception cost/month = exceptions x cost/exception
- Modeled baseline values:
  - Exceptions/month = 2,000 x 12% = 240
  - Exception cost/month = 240 x 60 = RM 14,400

## Impact model

- Primary lever (pick one): exception dashboard + approvals reduces corrections
- Secondary lever (pick one): faster close through standardized workflows
- Result metrics:
  - exception volume down 30-50%
  - close time down 20-40%

## Proof plan (no named claims)

- Operational proof (dashboard): exceptions dashboard by outlet/department.
- Workflow proof: approvals audit trail for OT/allowances.
- Export/report proof: payroll audit log + statutory exports.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: exception types and volume; turnover impact on payroll.
- What artifacts the buyer expects to see: approvals audit trail and outlet rollups.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: shifts and adjustments create payroll chaos.
3. Baseline: exceptions and close time.
4. Value: standardized workflows.
5. Impact: fewer corrections.
6. How: self-service + approvals.
7. ROI: exception cost reduction + time saved.
8. Proof: dashboards and exports.

## Pilot and risk reversal

- Scope: one property or 5 outlets, 1-2 payroll cycles
- Timeline: setup (week 1), parallel run (cycle 1), tune + cutover (cycle 2)
- Success criteria:
  - critical payroll errors = 0
  - exception closure within 48 hours for 90%+

## Do / Don't

- Do: keep it measurable (exceptions and close time).
- Don't: promise turnover reduction.
