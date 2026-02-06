# ContractX - Energy / Utilities (Segment Spec)

## Segment

- Product: ContractX
- Segment: Energy / utilities
- Primary buyer: Procurement / commercial
- Secondary buyers: Legal, operations, compliance
- Typical environment: long-term service contracts, high compliance, SLA and performance penalties, renewals

## Positioning

- One-line promise: Enforce obligations and SLAs with traceability and fewer renewal surprises.
- Status quo: obligations tracked manually; SLA credits missed; renewals managed ad hoc.
- Unit heuristic (anchor metric): RM in SLA credits/penalties tracked + % spend protected.

## Baseline model (defensible assumptions)

- Base inputs:
  - Annual contract value: RM 100M
  - Leakage rate: 2-3% (missed credits, terms slippage)
  - Modeled midpoint: 2.5%
- Formulas:
  - Leakage = value x leakage rate
  - Recoverable = leakage x 30% (conservative)
- Modeled baseline values:
  - Leakage = RM 100M x 2.5% = RM 2.5M/year
  - Recoverable = RM 750k/year

## Impact model

- Primary lever (pick one): obligations + SLA tracking
- Secondary lever (pick one): renewal alerts + ownership
- Result metrics:
  - recover 0.5-1.0% of contract value (modeled)
  - fewer missed renewal deadlines

## Proof plan (no named claims)

- Operational proof (dashboard): obligation tracker + SLA breach/credit log.
- Workflow proof: approvals and change control.
- Export/report proof: audit trail export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: SLA credit mechanisms, renewal calendar, and obligation taxonomy.
- What artifacts the buyer expects to see: compliance reporting and audit trail requirements.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: obligations exist but are not enforced systematically.
3. Baseline: contract value base and modeled leakage.
4. Value: obligation tracker + SLA log + renewals.
5. Impact: recovered credits and fewer misses.
6. How: change control and alerts.
7. ROI: small % recovered on large spend.
8. Proof: obligation dashboard + export.

## Pilot and risk reversal

- Scope: one contract category (e.g. maintenance/services), 50 contracts, 60 days
- Timeline: load + map obligations (week 1-3), run SLA logging + renewals (week 4-8)
- Success criteria:
  - obligations captured for 90%+ pilot contracts
  - renewal visibility for next 180 days = 100%

## Do / Don't

- Do: focus on obligations and audit trail.
- Don't: claim operational uptime improvements.
