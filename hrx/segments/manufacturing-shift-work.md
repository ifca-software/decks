# HRX - Manufacturing / Shift Work (Segment Spec)

## Segment

- Product: HRX
- Segment: Manufacturing / shift work
- Primary buyer: HR manager / payroll lead
- Secondary buyers: Plant manager, Finance
- Typical environment: shifts, overtime, allowances, attendance exceptions, tight payroll deadlines

## Positioning

- One-line promise: Control payroll exceptions and overtime leakage with audit-ready approvals.
- Status quo: overtime disputes, attendance corrections, approvals via email/WhatsApp.
- Unit heuristic (anchor metric): RM per employee per month in exception cost.

## Baseline model (defensible assumptions)

- Base inputs:
  - Headcount: 1,500
  - Payroll close time: 5 days
  - Exception rate: 10% of employees have a payroll exception each cycle
  - Cost per exception: RM 60 (admin time + correction)
- Formulas:
  - Exceptions/month = headcount x exception rate
  - Exception cost/month = exceptions x cost/exception
- Modeled baseline:
  - Exceptions/month = 1,500 x 10% = 150
  - Cost/month = 150 x 60 = RM 9,000

## Impact model

- Primary lever: exception dashboard + approvals reduce corrections
- Secondary lever: faster close by reducing last-minute fixes
- Result metrics (modeled):
  - exception volume down 30-50%
  - close time down 20-40%

## Proof plan (no named claims)

- Operational proof: overtime/attendance exception dashboard.
- Workflow proof: approvals with timestamps and audit trail.
- Export/report proof: statutory exports and payroll audit log.

## Discovery validation (what to measure first)

- Confirm baseline: exception types (overtime, attendance), exception volume, and correction cycle time.
- Confirm buyer proof bar: audit log requirements and approval chain requirements.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "Payroll breaks in the exceptions." Use overtime, allowances, attendance.

3. Baseline economics:
- show exceptions/month and time to close.

4. Value levers:
- exceptions workflow, approvals, audit log.

5. Impact:
- translate to fewer corrections and faster close.

6. How it works:
- time/attendance integration assumptions, approvals, payroll run.

7. Investment and ROI:
- ROI anchored on admin hours saved + correction reduction.

8. Proof:
- show exception dashboard and audit trail export.

## Pilot and risk reversal

- Scope: one plant or one shift group, 1-2 payroll cycles
- Timeline: setup (week 1), parallel run (cycle 1), tune + cutover (cycle 2)
- Success criteria:
  - critical errors = 0
  - exception closure within 48 hours for 90%+

## Do / Don't

- Do: keep it operational and measurable.
- Don't: promise perfect attendance data without upstream process.
