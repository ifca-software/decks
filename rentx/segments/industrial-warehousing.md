# RentX - Industrial / Warehousing (Segment Spec)

## Segment

- Product: RentX
- Segment: Industrial / warehousing
- Primary buyer: Asset manager / finance
- Secondary buyers: Legal, operations
- Typical environment: fewer tenants, higher value leases, escalations, compliance documents

## Positioning

- One-line promise: Tight lease controls: escalations, compliance obligations, billing accuracy, renewals.
- Status quo: lease terms in PDFs, escalations missed, compliance docs chased manually.
- Unit heuristic (anchor metric): RM per site per month + billing accuracy.

## Baseline model (defensible assumptions)

- Base inputs:
  - Sites: 50
  - Average rent: RM 25,000/month
  - Escalation miss rate: 10% of sites miss one escalation per year
  - Escalation value: 3% annual increase
- Formulas:
  - Missed escalation/year = sites x miss rate x rent x 12 x escalation %
- Modeled baseline:
  - Missed escalation/year = 50 x 10% x 25,000 x 12 x 3% = RM 450,000

## Impact model

- Primary lever: escalation and renewal alerts with ownership
- Secondary lever: centralized lease repository + compliance docs tracking
- Result metrics (modeled):
  - reduce missed escalations materially (target to measure)

## Proof plan (no named claims)

- Operational proof: escalation calendar + compliance obligations list.
- Workflow proof: notice issuance and approvals.
- Export/report proof: lease obligations export.

## Discovery validation (what to measure first)

- Confirm baseline: escalation clauses, dates, miss rate, and notice workflow.
- Confirm buyer proof bar: obligations taxonomy and audit/compliance reporting format.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "High-value leases need tight controls." Emphasize escalations and compliance.

3. Baseline economics:
- show missed escalation modeled value.

4. Value levers:
- escalation alerts, repository, obligations tracking.

5. Impact:
- translate to recovered escalations and fewer disputes.

6. How it works:
- lease repository, alerts, approvals.

7. Investment and ROI:
- ROI: preventing a handful of missed escalations pays quickly.

8. Proof:
- show escalation calendar and obligations export.

## Pilot and risk reversal

- Scope: 20 sites, 45 days
- Timeline: load leases (week 1-2), validate escalations/obligations (week 3-4), go-live alerts (week 5-6)
- Success criteria:
  - escalation/renewal visibility for next 180 days = 100%

## Do / Don't

- Do: anchor on compliance obligations and escalations.
- Don't: mix with FM/maintenance (keep that for FMX).
