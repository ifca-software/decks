# RentX - Residential Portfolios (Segment Spec)

## Segment

- Product: RentX
- Segment: Residential portfolios
- Primary buyer: Portfolio manager / operations
- Secondary buyers: Finance, customer service
- Typical environment: many smaller payments, renewals, tenant experience matters

## Positioning

- One-line promise: Make collections and renewals predictable across every unit.
- Status quo: manual reminders, inconsistent records, renewal dates not centralized.
- Unit heuristic (anchor metric): RM per unit per month (arrears + admin).

## Baseline model (defensible assumptions)

- Base inputs:
  - Units: 1,000
  - Average rent: RM 1,800/month
  - Arrears rate: 6.5%
  - Admin effort: 10 minutes/unit/month (reminders, ledger updates)
  - Blended admin cost: RM 40/hour
- Formulas:
  - Arrears/unit/month = rent x arrears %
  - Admin cost/unit/month = (minutes/60) x hourly cost
- Modeled baseline:
  - Arrears/unit/month = 1,800 x 6.5% = RM 117
  - Admin cost/unit/month = (10/60) x 40 = RM 6.67

## Impact model

- Primary lever: arrears reduction via automation + payment channels
- Secondary lever: renewal pipeline visibility
- Result metrics (modeled):
  - arrears down 20-45%
  - admin time down 25-40%

## Proof plan (no named claims)

- Operational proof: payment ledger + aging by block/unit.
- Workflow proof: renewal notice -> approval -> updated lease.
- Export/report proof: monthly portfolio pack.

## Discovery validation (what to measure first)

- Confirm baseline: rent roll, arrears %, payment methods, and renewal volume.
- Confirm buyer proof bar: tenant comms cadence, acceptable escalation steps, and reporting needs.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- manual renewals and reminders create churn and arrears.

3. Baseline economics:
- show per-unit arrears and admin cost.

4. Value levers:
- reminders + ledger + renewal pipeline.

5. Impact:
- translate to RM per unit per year savings.

6. How it works:
- tenant ledger, automation, portal/payment.

7. Investment and ROI:
- ROI: small reduction per unit scales across portfolio.

8. Proof:
- show ledger + renewal pipeline.

## Pilot and risk reversal

- Scope: one block (200 units), 60 days
- Timeline: setup + load (week 1-2), go-live (week 3), measure (week 4-8)
- Success criteria:
  - arrears down >= 20%
  - renewal visibility for next 90 days = 100%

## Do / Don't

- Do: emphasize tenant experience and predictability.
- Don't: overpromise arrears reduction without specifying automation rules.
