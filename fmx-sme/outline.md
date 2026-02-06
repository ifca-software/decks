# FMX-SME - Slide Outline (Draft Copy)

## Deck plan (how to use this outline)
- Build 1 core deck first, then clone into 2-3 segment variants.
- Default structure: 10 slides, plus optional Assumptions, Implementation, Pilot.
- Variants should live as separate decks (for later): `fmx-sme/<segment>/index.html` (e.g. `fmx-sme/clinics/`, `fmx-sme/fnb/`).
- What changes by segment: Slides 2-8 (Problem, Baseline, Value, Impact, Proof, Assumptions). Slides 1, 9, 10 stay mostly stable.
- Keep ROI defensible: anchor on downtime hours avoided and emergency call-out reduction.

See also: `_jobs/ifca/_deliverables/_decks/fmx-sme/plan.md`

## Target segments (recommended)
| Segment | Anchor metric | Tailor the story | Proof to show |
|---|---|---|---|
| Clinics | downtime hours + compliance checks | critical assets uptime | PM compliance + alerts + audit trail |
| F&B outlets | response time + emergency call-outs | refrigeration and safety | mobile work orders + vendor dispatch |
| Warehouses | uptime + cost control | forklifts, dock equipment | downtime tracking + vendor scorecards |

## 1. Title
- FMX-SME for Small and Mid-Size Facilities
- Simple setup, fast value, lower cost
- IFCA MSC Berhad · [Month Year] · Confidential

## 2. The Problem
- SMEs still run maintenance on WhatsApp and spreadsheets
- No visibility into vendor performance or costs
- Preventive maintenance is often skipped

## 3. Baseline Economics
- Reactive maintenance rate: 65%
- Unplanned downtime: 22 hours / month
- Vendor cost variance: 18%

## Heuristics used
- 65% reactive assumes 13 of 20 monthly work orders are reactive
- 22 hours/month downtime assumes 2 critical failures x 11 hours each
- 18% vendor variance assumes RM 10k monthly spend with RM 1.8k premium

## Unit heuristic (anchor metric)
- Unit: RM per site per month, and RM per downtime hour avoided
- Translation: avoiding 12 downtime hours at RM 150/hour is RM 1,800/month

## ICP fit (who its for / not for)
- Best for: SMEs running maintenance on WhatsApp, no PM schedule, and frequent emergency call-outs
- Not for: sites with mature CMMS, PM compliance above 90%, and stable vendor contracts

## 4. Where FMX-SME Creates Value
- Fast setup with prebuilt workflows
- Mobile work orders and vendor tracking
- Preventive schedules that reduce downtime

## 5. Impact
- Reduce downtime by 40%
- Cut vendor costs by 20%
- Improve maintenance response time by 55%

## 6. How It Works
- Set up: assets and schedules in hours
- Execute: mobile work orders
- Track: simple dashboards and reports

## 7. Investment and ROI
- Cost: RM 350 per site / month
- Savings: RM 1,800 per site / month from reduced downtime
- ROI: 5.1x in 4 months

## ROI logic
- Savings assume 12 hours avoided downtime x RM 150/hour = RM 1,800/month
- Preventive work reduces emergency call-outs by ~2/month at RM 400 each

## 8. Proof (make it defensible)
- Show 1 anonymized before/after: downtime hours and emergency call-outs (validated during discovery)
- Show 1 proxy proof: PM schedule compliance and work order audit trail
- Show 1 operational proof: response time dashboard and vendor performance view

## Build checklist (so this becomes a real deck)
- Screens: asset list, PM schedule, work orders, response time, vendor performance
- 1-page ROI calculator inputs: downtime hours, cost/hour, emergency call-outs, vendor premium
- One anonymized mini-case: day-1 setup -> PM compliance -> downtime reduction

## 9. Why IFCA
- Enterprise-grade tech, SME-friendly pricing
- Local support and onboarding
- Upgrade path to full FMX

## 10. Next Step
- Start with one facility
- Prove faster response and lower cost
- Expand to all sites

## Assumptions slide (optional)
- Assumptions: 65% reactive work, 22 hours/month downtime, 18% vendor variance
- Inputs to ROI: 12 hours downtime avoided, RM 150/hour impact, fewer emergency call-outs

## Implementation slide (optional)
- Day 1: set up assets and top 10 PM templates
- Week 1: go live with work orders and vendor assignments
- Week 2-4: tune PM schedules and measure downtime reduction

## Pilot / risk reversal (optional)
- Pilot scope: one site, 30 days
- Success criteria: PM compliance >= 70% and emergency call-outs down >= 20%

## Glossary candidates
- CMMS, SLA, PM
