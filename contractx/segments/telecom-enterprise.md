# ContractX - Telecom / Enterprise (Segment Spec)

## Segment

- Product: ContractX
- Segment: Telecom / enterprise
- Primary buyer: Commercial operations / procurement
- Secondary buyers: Legal, delivery, finance
- Typical environment: large volume of MSAs/SOWs, SLAs, renewals, complex approvals

## Positioning

- One-line promise: Faster approvals and fewer SLA misses with a single renewal and obligation view.
- Status quo: redlines in email; renewals tracked manually; SLA penalties handled inconsistently.
- Unit heuristic (anchor metric): days removed from cycle time + RM in SLA leakage tracked.

## Baseline model (defensible assumptions)

- Base inputs:
  - Contracts/month: 120
  - Cycle time: 42 days
  - Annual contract value: RM 60M
  - SLA/pricing leakage: 0.5-1.5% of contract value (modeled)
  - Modeled midpoint leakage: 1%
- Formulas:
  - Modeled leakage RM/year = annual contract value x leakage %
- Modeled baseline values:
  - Modeled leakage = RM 60M x 1% = RM 600k/year

## Impact model

- Primary lever (pick one): standard templates + approval routing
- Secondary lever (pick one): SLA/obligation tracking + renewals
- Result metrics:
  - cycle time down 20-35%
  - reduced SLA penalty/credit misses (to measure)

## Proof plan (no named claims)

- Operational proof (dashboard): renewal pipeline + SLA breach log.
- Workflow proof: redline/version history + approvals.
- Export/report proof: audit log export.

## Discovery validation (what to measure first)

- What baseline numbers to confirm: cycle time split by phase and SLA penalty drivers.
- What artifacts the buyer expects to see: version history and approval audit trail.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem: cycle time and SLA misses create revenue leakage.
3. Baseline: cycle days + contract throughput.
4. Value: templates + routing + renewal pipeline.
5. Impact: cycle time down.
6. How: MSA/SOW workflow.
7. ROI: earlier revenue start + reduced SLA leakage (modeled).
8. Proof: version history + dashboards.

## Pilot and risk reversal

- Scope: one product line, 30 days
- Timeline: templates week 1, approvals week 2, pilot contracts week 3-4
- Success criteria:
  - cycle time down >= 20% for pilot contracts
  - renewal visibility for pilot set = 100%

## Do / Don't

- Do: define cycle time baseline and measure it.
- Don't: promise revenue lift without defining deal volume.
