# AuditX - Manufacturing (Segment Spec)

## Segment

- Product: AuditX
- Segment: Manufacturing
- Primary buyer: QA / Compliance lead (or Internal Audit)
- Secondary buyers: Plant manager, Operations, HSE
- Typical environment: multi-plant operations, ISO-style audits, CAPA closure, supplier quality pressures

## Positioning

- One-line promise: Reduce repeat nonconformities by turning audit findings into verified CAPA closure.
- Status quo: paper checklists, scattered photos, CAPA in email, weak closure verification.
- Unit heuristic (anchor metric): RM per nonconformance prevented + CAPA cycle time (days to closure).

## Baseline model (defensible assumptions)

- Base inputs:
  - Audit cycles/year per plant: 4
  - Findings per audit: 18 (mix of minor + observations)
  - Repeat finding rate: 25% (weak closure verification)
  - CAPA cycle time: 45 days baseline
- Formulas:
  - Repeat findings per cycle = findings x repeat rate
  - Repeat findings/year = repeat findings per cycle x cycles/year
- Modeled baseline:
  - Repeat findings per audit = 18 x 25% = 4-5
  - Repeat findings/year per plant = 4.5 x 4 = ~18

## Impact model

- Primary lever: enforce CAPA ownership, due dates, evidence-based closure
- Secondary lever: standardize audit checklists and evidence capture
- Result metrics (modeled):
  - Repeat findings down 40-60% after 2 cycles
  - CAPA cycle time down from 45 to 21-30 days

## Proof plan (no named claims)

- Operational proof: CAPA aging dashboard + repeat finding tracker by category/line/plant.
- Workflow proof: CAPA root cause -> corrective action -> evidence -> verification signoff.
- Export/report proof: ISO-style audit report pack with evidence attachments and timestamps.

## Discovery validation (what to measure first)

- Confirm baseline: repeat finding rate, average CAPA closure days, and verification step completeness.
- Confirm buyer proof bar: required ISO audit pack format and what "verified closure" means (evidence types).

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "Audits find issues. Fixes do not stick." Make it about repeat NCs, verification, and time wasted.

3. Baseline economics:
- Use repeat finding rate and CAPA days as the baseline; avoid promising exact downtime prevention unless validated.

4. Value levers:
- CAPA workflow + verification, evidence capture on mobile, standard checklists.

5. Impact:
- Show how reducing repeat NCs reduces audit churn and protects certifications.

6. How it works:
- Use terms: NC, observation, CAPA, verification, audit pack.

7. Investment and ROI:
- ROI framing: value is in repeat finding reduction + faster CAPA closure; keep financials as modeled assumptions.

8. Proof:
- Show CAPA dashboard, verification signoff, and audit pack export.

## Pilot and risk reversal

- Scope: one plant, one audit program, 60 days
- Timeline: setup (week 1), run audit + CAPA workflow (weeks 2-6), measure (weeks 7-8)
- Success criteria:
  - CAPA assigned within 48 hours for 90%+ findings
  - CAPA closure time down >= 30% for pilot program

## Do / Don't

- Do: promise measurable closure discipline.
- Don't: claim you "prevent all defects".
