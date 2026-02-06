# IFCAx - Slide Outline (Draft Copy)

## Deck plan (how to use this outline)
- Build 1 core deck first, then clone into 2-3 segment variants.
- Default structure: 10 slides, plus optional Assumptions, Implementation, Pilot.
- Variants should live as separate decks (for later): `ifcax/<segment>/index.html` (e.g. `ifcax/trading/`, `ifcax/manufacturing/`).
- What changes by segment: Slides 2-8 (Problem, Baseline, Value, Impact, Proof, Assumptions). Slides 1, 9, 10 stay mostly stable.
- Keep ROI defensible: tie savings to AP/PO cycle cost and close-time reduction (days saved).

See also: `_jobs/ifca/_deliverables/_decks/ifcax/plan.md`

## Target segments (recommended)
| Segment | Anchor metric | Tailor the story | Proof to show |
|---|---|---|---|
| Trading / distribution | RM per PO + inventory accuracy | PO speed, approvals, aging | PO workflow + aging + stock visibility |
| Manufacturing | days to close + costing accuracy | BOM/costing and reconciliations | audit trail + costing reports |
| Multi-entity groups | close days + reconciliation hours | consolidation and controls | segregation of duties + audit logs |

## 1. Title
- IFCAx Core ERP Suite
- Finance, procurement, and operations in one system
- IFCA MSC Berhad · [Month Year] · Confidential

## 2. The Problem
- Disconnected systems cause delays and errors
- Finance lacks real-time visibility
- Manual reconciliation slows month-end close

## 3. Baseline Economics
- Month-end close: 12 days
- Manual reconciliation hours: 420 per month
- Cost per PO cycle: RM 110

## Heuristics used
- 12-day close assumes 4 days data collection + 5 days reconciliation + 3 days review
- 420 hours/month assumes 14 staff x 3 hours/day x 10 days
- RM 110 per PO assumes 2 hours labor x RM 45/hour + RM 20 rework

## Unit heuristic (anchor metric)
- Unit: RM per PO, and days saved on month-end close
- Translation: saving RM 25 per PO across 5,000 POs/year is RM 125k/year before close-time gains

## ICP fit (who its for / not for)
- Best for: multi-entity groups with high PO volume, heavy reconciliations, and slow closing
- Not for: single-entity SMEs with low transaction volume and simple finance

## 4. Where IFCAx Creates Value
- Single source of truth across finance and ops
- Automated procurement and approvals
- Real-time dashboards and reporting

## 5. Impact
- Shorten close by 50%
- Reduce reconciliation effort by 65%
- Improve cash visibility and control

## 6. How It Works
- Finance: GL, AP, AR, and reporting
- Procurement: requisitions, PO, vendor management
- Operations: inventory and asset tracking

## 7. Investment and ROI
- Cost: RM 480,000 per year
- Savings: RM 2.1M from reduced admin and errors
- ROI: 4.4x in 10 months

## ROI logic
- Savings assume 25% efficiency on RM 8.4M annual finance labor = RM 2.1M
- Earlier close saves ~RM 60k/year in financing cost at 5% on RM 1.2M float

## 8. Proof (make it defensible)
- Show 1 anonymized before/after: close days, reconciliation hours, and exception rate (validated during discovery)
- Show 1 proxy proof: approval matrix + segregation of duties + audit trail
- Show 1 operational proof: real-time cash position and payables/receivables aging

## Build checklist (so this becomes a real deck)
- Screens: approvals, AP/AR aging, cash dashboard, audit log
- 1-page ROI calculator inputs: PO volume, cost/PO, close days, finance labor base
- One anonymized mini-case: AP pilot -> fewer exceptions -> faster close

## 9. Why IFCA
- 36 years in ASEAN enterprise software
- Local compliance and rollout expertise
- Integrates with FMX, HRX, RentX

## 10. Next Step
- Start with finance and procurement
- Prove visibility and control
- Expand across all operations

## Assumptions slide (optional)
- Assumptions: 12-day close, 420 hours/month reconciliation, RM 110 per PO
- Inputs to ROI: 25% finance efficiency, RM 8.4M annual finance labor base

## Implementation slide (optional)
- Week 1-2: chart of accounts, approvals, and master data setup
- Week 3-4: pilot AP/PO flow for one unit
- Week 5-8: expand to AR/GL and first accelerated close

## Pilot / risk reversal (optional)
- Pilot scope: AP + PO for one unit, 60 days
- Success criteria: PO cycle time down >= 20% and reconciliation hours down >= 15%

## Glossary candidates
- ERP, AP, AR, GL, PO
