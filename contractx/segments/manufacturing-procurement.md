# ContractX - Manufacturing Procurement (Segment Spec)

## Segment

- Product: ContractX
- Segment: Manufacturing procurement
- Primary buyer: Head of procurement
- Secondary buyers: Legal, plant operations, finance
- Typical environment: supplier MSAs, tooling contracts, service agreements, compliance and audit requirements

## Positioning

- One-line promise: Reduce supplier leakage and speed up approvals with a single repository and renewal discipline.
- Status quo: contracts scattered across plants, renewals missed, terms inconsistent.
- Unit heuristic (anchor metric): % of annual supplier spend protected + cycle time (days).

## Baseline model (defensible assumptions)

- Base inputs:
  - Annual supplier contract value: RM 80M
  - Leakage rate: 2-4% (missed renewals, price/term slippage)
  - Modeled midpoint: 3%
- Formulas:
  - Leakage RM/year = contract value x leakage rate
  - Recoverable RM/year = leakage x recovery rate
- Modeled baseline values:
  - Leakage = RM 80M x 3% = RM 2.4M/year
  - Conservative recoverable = 30% of leakage = RM 720k/year

## Impact model

- Primary lever (pick one): renewal + price/term hygiene (alerts + ownership)
- Secondary lever (pick one): faster approvals via templates and routing
- Result metrics:
  - recover 0.5-1.5% of supplier spend (modeled)
  - cycle time down 20-35%

## Proof plan (no named claims)

- Operational proof (dashboard): renewal calendar + contract coverage by plant/category.
- Workflow proof: approval routing with audit trail.
- Export/report proof: contract change log export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: annual supplier spend under contract, renewal volume, and miss rate.
- What artifacts the buyer expects to see: approval matrix and audit requirements.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: plant-by-plant fragmentation causes inconsistent terms and leakage.
3. Baseline: annual spend base and modeled leakage.
4. Value: central repository + approvals + renewal alerts.
5. Impact: recovered leakage + faster cycles.
6. How: templates, routing, and renewals.
7. ROI: small % on spend + reduced cycle time.
8. Proof: renewal dashboard + audit log.

## Pilot and risk reversal

- Scope: top 50 supplier contracts across 1-2 plants, 45 days
- Timeline: load + classify (week 1-2), validate renewals/terms (week 3-4), run approvals (week 5-6)
- Success criteria:
  - renewal visibility for next 180 days = 100% for pilot set
  - approvals tracked with audit trail for all pilot changes

## Do / Don't

- Do: keep savings tied to spend base and explicit assumptions.
- Don't: claim procurement savings without defining the baseline.
