# RentX - Retail Malls (Segment Spec)

## Segment

- Product: RentX
- Segment: Retail malls
- Primary buyer: Mall operations / finance controller
- Secondary buyers: Leasing, collections, property manager
- Typical environment: many tenants, arrears aging, disputes, renewal negotiations

## Positioning

- One-line promise: Reduce arrears and disputes with a single tenant ledger and automated collections cadence.
- Status quo: invoice spreadsheets, email/WhatsApp disputes, manual follow-up, unclear aging.
- Unit heuristic (anchor metric): arrears % and RM per tenant per month in collection effort.

## Baseline model (defensible assumptions)

- Base inputs:
  - Units/tenants: 300
  - Average rent: RM 12,000/month
  - Arrears rate: 6.5%
  - Collections staffing: 2 FTE at RM 4,500/month + RM 3,000 fees
- Formulas:
  - Arrears RM/month = units x rent x arrears %
- Modeled baseline:
  - Arrears/month = 300 x 12,000 x 6.5% = RM 234,000
  - Collections cost/month = RM 12,000

## Impact model

- Primary lever: arrears reduction via invoice/reminder/escalation cadence
- Secondary lever: dispute workflow and visibility reduces "stuck" payments
- Result metrics (modeled):
  - arrears down 20-45% over 60-120 days (start conservative in deck)

## Proof plan (no named claims)

- Operational proof: arrears aging dashboard (0-30, 31-60, 61-90, 90+)
- Workflow proof: dispute raised -> resolved -> payment status tracked
- Export/report proof: monthly arrears pack by tenant/category

## Discovery validation (what to measure first)

- Confirm baseline: rent roll, arrears aging by bucket, dispute volume, and collections workflow.
- Confirm buyer proof bar: arrears pack format, dispute stages, and escalation rules.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- arrears + disputes create leakage and relationship damage.

3. Baseline economics:
- show arrears RM/month calculation and collections staffing cost.

4. Value levers:
- automated billing/reminders + dispute tracker + tenant ledger.

5. Impact:
- translate to arrears RM recovered and reduced collection workload.

6. How it works:
- billing run, reminders, escalation, disputes, dashboard.

7. Investment and ROI:
- ROI: small arrears reduction on a large rent base pays quickly.

8. Proof:
- show aging dashboard and export pack.

## Pilot and risk reversal

- Scope: one mall, 60 days
- Timeline: setup + data load (week 1-2), go-live (week 3), measure (week 4-8)
- Success criteria:
  - invoices on-time >= 95%
  - arrears down >= 20% OR 90+ day bucket reduced

## Do / Don't

- Do: show aging buckets and dispute workflow.
- Don't: promise occupancy improvement unless tied to a specific renewal strategy.
