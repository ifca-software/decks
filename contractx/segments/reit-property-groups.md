# ContractX - REIT / Property Groups (Segment Spec)

## Segment

- Product: ContractX
- Segment: REIT / property groups
- Primary buyer: Head of Procurement / Finance controller
- Secondary buyers: Legal, Property operations, Asset managers
- Typical environment: many vendor contracts (FM, security, cleaning), renewals, escalation clauses, compliance obligations

## Positioning

- One-line promise: Stop missed renewals and escalations; enforce vendor obligations with an audit trail.
- Status quo: contracts in shared drives, renewal dates in spreadsheets, SLA breaches handled manually.
- Unit heuristic (anchor metric): % of annual vendor spend protected + RM per missed escalation avoided.

## Baseline model (defensible assumptions)

- Base inputs:
  - Annual vendor contract value: RM 60M
  - Renewal volume: 500/year
  - Leakage rate: 3% (midpoint of 3-5%)
- Formulas:
  - Leakage RM/year = contract value x leakage rate
  - Recoverable RM/year = leakage x recovery rate
- Modeled baseline:
  - Leakage = RM 60M x 3% = RM 1.8M/year
  - Conservative recovery = 40% of leakage = RM 720k/year

## Impact model

- Primary lever: renewal and escalation hygiene (alerts + ownership)
- Secondary lever: obligation/SLA tracking (less silent leakage)
- Result metrics (modeled):
  - renewal miss rate down materially (to be measured)
  - 20-35% cycle time reduction for new contracts via templates

## Proof plan (no named claims)

- Operational proof: renewal calendar + obligations dashboard.
- Workflow proof: approval flow + version history (who changed what).
- Export/report proof: audit trail export for contract changes and approvals.

## Discovery validation (what to measure first)

- Confirm baseline: annual vendor spend under contract, renewal count, and how escalations are tracked.
- Confirm buyer proof bar: renewal calendar granularity, obligations taxonomy, and audit requirements.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "Small misses compound into big leakage." Use escalations, renewals, and vendor obligations.

3. Baseline economics:
- Show base: annual vendor spend + leakage % = RM leakage.

4. Value levers:
- repository, renewal alerts, obligations tracking, SLA logs.

5. Impact:
- translate to recovered RM and fewer emergency renewals.

6. How it works:
- clause library and approval matrix; renewal calendar.

7. Investment and ROI:
- ROI = recovery on a small % of spend. Keep math explicit.

8. Proof:
- renewal calendar, obligations tracker, audit trail export.

## Pilot and risk reversal

- Scope: top 100 contracts + upcoming 90-day renewals
- Timeline: 30 days (load + classify week 1-2; validate obligations week 3; run renewal workflow week 4)
- Success criteria:
  - 100% renewal visibility for pilot set
  - obligations captured for 90%+ of pilot contracts

## Do / Don't

- Do: show the renewal calendar and obligations tracker.
- Don't: claim "zero leakage".
