# AuditX - Slide Outline (Draft Copy)

## Deck plan (how to use this outline)
- Build 1 core deck first, then clone into 2-3 segment variants.
- Default structure: 10 slides, plus optional Assumptions, Implementation, Pilot.
- Variants should live as separate decks (for later): `auditx/<segment>/index.html` (e.g. `auditx/banking/`, `auditx/manufacturing/`).
- What changes by segment: Slides 2-8 (Problem, Baseline, Value, Impact, Proof, Assumptions). Slides 1, 9, 10 stay mostly stable.
- Keep numbers defensible: show formulas (Assumptions slide) and keep ROI to 1 primary lever + 1 secondary lever.

See also: `_jobs/ifca/_deliverables/_decks/auditx/plan.md`

## Target segments (recommended)
| Segment | Anchor metric | Tailor the story | Proof to show |
|---|---|---|---|
| Banking / financial services | RM per audit cycle; findings aging | audit readiness, control testing, evidence traceability | issue aging + audit trail export + access controls |
| Manufacturing | RM per nonconformance closed; CAPA cycle time | ISO-style audits, CAPA closure, repeat NC reduction | CAPA workflow + evidence attachments + closure SLA |
| Retail / multi-site ops | RM per site per month; repeat findings | operational audits at scale, standard checklists | mobile evidence capture + dashboard per site |

## 1. Title
- AuditX for Internal Audit and Compliance
- Catch risk early, shorten audit cycles, and prove compliance in real time
- IFCA MSC Berhad · [Month Year] · Confidential

## 2. The Problem
- Audits still run on spreadsheets, email, and fragmented evidence
- Findings repeat because actions are not tracked to closure
- Compliance proof takes weeks to assemble for each audit

## 3. Baseline Economics
- Average audit cycle time: 8 weeks
- Findings per audit: 18
- Cost per audit: RM 120,000
- Remediation lag: 45 days

## Heuristics used
- Audit cycle of 8 weeks assumes planning (2), fieldwork (4), reporting (2)
- RM 120k assumes 5 auditors x RM 9k/month x 2 months + 30% overhead
- 18 findings assumes 3-4 findings per process across 5 key processes
- 45-day remediation lag assumes monthly management review cadence

## Unit heuristic (anchor metric)
- Unit: RM per audit cycle avoided, and RM per finding closed
- Translation: 1 avoided audit cycle (RM 120k) can justify 12+ months of software cost

## ICP fit (who its for / not for)
- Best for: multi-site groups with repeat findings, regulated reporting, and evidence scattered across tools
- Not for: teams doing 1-2 lightweight audits/year with no remediation tracking needs

## 4. Where AuditX Creates Value
- Centralized evidence and workflows reduce audit prep time
- Automated action tracking eliminates repeat findings
- Always-on compliance dashboard reduces panic audits

## 5. Impact
- Cut audit cycle time by 40%
- Reduce repeat findings by 55%
- Compliance confidence up, risk exposure down

## 6. How It Works
- Plan: standardized audit programs and checklists
- Execute: mobile evidence capture and issue logging
- Remediate: tasks, owners, SLAs, and audit trails

## 7. Investment and ROI
- Cost: RM 96,000 per year
- Savings: RM 320,000 from fewer audits and reduced rework
- ROI: 3.3x in 6 months

## ROI logic
- Savings assume 2 avoided ad-hoc audits at RM 120k each + RM 80k rework reduction
- 40% cycle reduction converts 8-week cycles to ~5 weeks (3 weeks saved)

## 8. Proof (make it defensible)
- Show 1 anonymized before/after: cycle time and repeat findings (validated during discovery)
- Show 1 proxy proof: ISO 19011-style audit workflow + evidence traceability + CAPA closure tracking
- Show 1 operational proof: live dashboard for findings aging, owner, SLA, and audit trail export

## Build checklist (so this becomes a real deck)
- Screens: audit program list, evidence capture, findings dashboard, export/audit log
- 1-page ROI calculator inputs: cycles/year, audit cost, avoided audits, rework hours
- One anonymized mini-case: baseline -> after -> timeline

## 9. Why IFCA
- Built for ASEAN compliance regimes
- Fast rollout in 6 weeks
- Integrates with IFCAx / HRX / FMX

## 10. Next Step
- Start with one audit program
- Prove the cycle time reduction
- Roll out across all sites

## Assumptions slide (optional)
- Assumptions: 8-week baseline cycle, RM 120k per audit, 18 findings per audit
- Inputs to ROI: 2 avoided ad-hoc audits, 40% cycle reduction, RM 80k rework savings

## Implementation slide (optional)
- Week 1: configure audit programs, roles, and evidence templates
- Week 2-3: pilot one audit cycle and remediation workflow
- Week 4-6: expand to priority sites and reporting pack

## Pilot / risk reversal (optional)
- Pilot scope: 1 audit program, 1-2 sites, 30-60 days
- Success criteria: cycle time down >= 25% and 90%+ findings have owners + due dates within 48 hours

## Glossary candidates
- ISO, SOX, SLA, CAPA, RCSA, KRI
