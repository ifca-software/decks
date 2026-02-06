# AuditX - Banking / Financial Services (Segment Spec)

## Segment

- Product: AuditX
- Segment: Banking / financial services
- Primary buyer: Head of Internal Audit
- Secondary buyers: Compliance, Risk, COO, IT Security
- Typical environment: multi-entity, multiple branches, heavy control testing, regulator-facing reporting

## Positioning

- One-line promise: Make control testing and evidence exportable in minutes, not weeks.
- Status quo: spreadsheets, email, shared drives, manual sampling logs, last-minute evidence hunts.
- Unit heuristic (anchor metric): RM per audit cycle avoided + RM per control test packaged (evidence completeness).

## Baseline model (defensible assumptions)

- Base inputs:
  - Audit cycles per year: 6 (one cycle every ~8 weeks)
  - Cycle duration: 8 weeks (plan 2, fieldwork 4, report 2)
  - Audit team: 5 auditors
  - Fully-loaded cost per auditor-month: RM 11,700 (RM 9,000 salary equivalent + 30% overhead)
- Formulas:
  - Cost per cycle = auditors x cost/month x months
  - Months per cycle = 8 weeks / 4 = 2 months
- Modeled baseline:
  - Cost per audit cycle = 5 x RM 11,700 x 2 = RM 117,000 (round to RM 120,000)

## Impact model

- Primary lever: reduce time spent on evidence collection and packaging
- Secondary lever: reduce repeat findings via tracked remediation and ownership
- Result metrics (modeled):
  - Cycle time down 25-40% for recurring programs
  - Repeat findings down 30-55% after 2 cycles
  - Remediation lag down from 45 to 21-30 days (governance dependent)

## Proof plan (no named claims)

- Operational proof (dashboard): findings aging by risk rating, owner, SLA, status; drill-down to evidence.
- Workflow proof: control test assignment -> evidence upload -> review -> signoff with audit trail.
- Export/report proof: export evidence pack (by program/site/date) plus immutable activity log.
- Anonymized before/after (to validate): baseline vs after for cycle time and repeat finding rate.

## Discovery validation (what to measure first)

- Confirm baseline: cycle length by phase, audit team size, and evidence packaging hours per cycle.
- Confirm buyer proof bar: required export format (PDF/Excel), audit log expectations, and access control needs.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "Controls exist. Evidence is scattered." Emphasize regulator pressure, multi-entity complexity, and audit trail needs.

3. Baseline economics:
- Show the cost per audit cycle math and how many cycles per year; add a baseline "evidence packaging" effort (e.g. 80-120 hours/cycle).

4. Value levers:
- Central evidence repository, standardized testing templates, review/signoff workflow, and audit-trail export.

5. Impact:
- Translate impact into cycles/year capacity (same team runs more cycles) and faster regulator responses.

6. How it works (vocabulary/examples):
- Use terms: controls, testing, sampling, evidence, signoff, remediation, audit trail.

7. Investment and ROI:
- ROI framing: 1 avoided ad-hoc audit cycle (RM 120k) can justify >12 months of software cost.
- Keep savings conservative: avoided ad-hoc audit(s) + reduced packaging hours.

8. Proof:
- Show: live findings dashboard + evidence drill-down + export pack.

## Pilot and risk reversal

- Scope: 1 audit program, 1-2 entities/branches, 30-60 days
- Timeline: config (week 1), pilot run (weeks 2-4), measurement + rollout plan (weeks 5-8)
- Success criteria:
  - 90%+ findings have owner + due date within 48 hours
  - evidence pack exportable within 30 minutes for pilot program
  - cycle time down >= 25% OR repeat findings down >= 30% (pick one)

## Do / Don't

- Do: show the export, the audit trail, and the evidence drill-down.
- Don't: claim regulator approval or "zero findings".
