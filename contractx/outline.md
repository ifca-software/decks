# ContractX - Slide Outline (Draft Copy)

## Deck plan (how to use this outline)
- Build 1 core deck first, then clone into 2-3 segment variants.
- Default structure: 10 slides, plus optional Assumptions, Implementation, Pilot.
- Variants should live as separate decks (for later): `contractx/<segment>/index.html` (e.g. `contractx/reit/`, `contractx/healthcare/`).
- What changes by segment: Slides 2-8 (Problem, Baseline, Value, Impact, Proof, Assumptions). Slides 1, 9, 10 stay mostly stable.
- Keep ROI defensible: express savings as a small % of contract value and show the base (annual contract value).

See also: `_jobs/ifca/_deliverables/_decks/contractx/plan.md`

## Target segments (recommended)
| Segment | Anchor metric | Tailor the story | Proof to show |
|---|---|---|---|
| REIT / property groups | RM lost on renewals/escalations | missed escalations, option dates, vendor SLAs | renewal calendar + obligation tracker + clause library |
| Healthcare groups | RM on procurement/service contracts | equipment service SLAs, OEM overlap, renewal risk | SLA breach log + approval audit trail |
| IT / managed services | % revenue at renewal + SLA penalties | renewal pipeline, redlines, standardization | version history + redline workflow + audit trail |

## 1. Title
- ContractX for Contract Lifecycle Management
- Stop revenue leakage and prevent missed renewals
- IFCA MSC Berhad · [Month Year] · Confidential

## 2. The Problem
- Contracts are stored across email, shared drives, and paper
- Renewal dates and obligations get missed
- Legal and procurement cycle time slows revenue

## 3. Baseline Economics
- Average contract cycle time: 42 days
- Revenue leakage from missed renewals: 3-5%
- Legal review bottleneck: 120 contracts per month

## Heuristics used
- 42-day cycle assumes 10 days request intake + 20 days legal + 12 days signoff
- 3-5% leakage assumes 1-2% missed renewals + 1-2% pricing/SLA slippage
- 120 contracts/month assumes 3 legal staff x 2 contracts/day x 20 workdays

## Unit heuristic (anchor metric)
- Unit: RM of annual contract value managed, and RM per renewal saved
- Translation: recovering 1% on RM 60M contract value = RM 600k/year (software pays for itself)

## ICP fit (who its for / not for)
- Best for: groups with many renewals, scattered repositories, and recurring SLA/pricing leakage
- Not for: low-volume teams with standardized MSAs and minimal renewals

## 4. Where ContractX Creates Value
- Central repository with full version history
- Alerts for renewals, obligations, and SLAs
- Faster approvals with standardized templates

## 5. Impact
- Reduce cycle time by 35%
- Recover RM 1.2M per year in leakage
- Improve compliance with audit-ready trails

## 6. How It Works
- Draft: clause library and templates
- Negotiate: redlining and version control
- Manage: obligations, renewals, and analytics

## 7. Investment and ROI
- Cost: RM 180,000 per year
- Savings: RM 720,000 from faster deals and recovered revenue
- ROI: 4x in 8 months

## ROI logic
- Savings assume 1.2% recovery on RM 60M annual contract value = RM 720k
- 35% faster cycles bring ~15 days forward on average for revenue start

## 8. Proof (make it defensible)
- Show 1 anonymized before/after: cycle time and renewal miss rate (validated during discovery)
- Show 1 proxy proof: clause library + version history + audit trail (who changed what, when)
- Show 1 operational proof: renewal calendar, obligation tracker, and SLA breach log

## Build checklist (so this becomes a real deck)
- Screens: repository search, redline/version history, renewal calendar, obligation/SLA dashboard
- 1-page ROI calculator inputs: annual contract value, renewal volume, miss rate, recovery %, cycle days
- One anonymized mini-case: top-100 contracts cleanup -> renewal visibility -> leakage recovered

## 9. Why IFCA
- Built for ASEAN legal workflows
- Integrates with IFCAx finance and procurement
- Local deployment and support

## 10. Next Step
- Start with one business unit
- Clean up the top 100 contracts
- Scale across all divisions

## Assumptions slide (optional)
- Assumptions: 42-day cycle, 3-5% leakage, 120 contracts/month throughput
- Inputs to ROI: 1.2% recovery on RM 60M annual contract value, 35% cycle reduction

## Implementation slide (optional)
- Week 1: repository + templates + approval workflow
- Week 2: load top 100 contracts and renewal dates
- Week 3-4: pilot one business unit and measure cycle time reduction

## Pilot / risk reversal (optional)
- Pilot scope: top 100 contracts, 1 unit, 30 days
- Success criteria: renewal visibility 100%, cycle time down >= 20%, zero missed renewals in pilot scope

## Glossary candidates
- CLM, SLA, MSA, SOW, NDA
