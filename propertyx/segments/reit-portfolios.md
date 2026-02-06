# PropertyX - REIT Portfolios (Segment Spec)

## Segment

- Product: PropertyX
- Segment: REIT portfolios
- Primary buyer: Asset manager / finance controller
- Secondary buyers: Portfolio ops, reporting team
- Typical environment: quarterly reporting cadence, NOI focus, governance, vendor performance

## Positioning

- One-line promise: Produce an owner pack faster and run the portfolio off one KPI view.
- Status quo: manual consolidation across assets, late packs, inconsistent KPIs.
- Unit heuristic (anchor metric): OpEx per sqft per month + reporting cycle days.

## Baseline model (defensible assumptions)

- Base inputs:
  - Total sqft: 2,000,000
  - OpEx: RM 4.80/sqft/month
  - Reporting cycle: 18 days
- Formulas:
  - Annual OpEx = sqft x OpEx/sqft/month x 12
- Modeled baseline:
  - Annual OpEx = 2,000,000 x 4.80 x 12 = RM 115.2M

## Impact model

- Primary lever: OpEx visibility and governance (small % reduction)
- Secondary lever: reporting automation (cycle time down)
- Result metrics (modeled):
  - 0.5-1.5% OpEx reduction modeled (start with 1% in deck)
  - reporting cycle down 30-60%

## Proof plan (no named claims)

- Operational proof: portfolio dashboard with OpEx breakdown and trends.
- Workflow proof: monthly owner pack generation and approvals.
- Export/report proof: owner pack export (PDF/Excel) generated from system data.

## Discovery validation (what to measure first)

- Confirm baseline: total sqft, OpEx categories, and current owner pack cycle time.
- Confirm buyer proof bar: owner pack structure and KPI definitions.

## Slide-by-slide notes (rewrite Slides 2-8)

2. Problem:
- "Owners want performance now; reporting arrives late." Make it about governance and NOI.

3. Baseline economics:
- show annual OpEx base and reporting cycle time.

4. Value levers:
- unified KPIs, OpEx categorization, vendor scorecards, automated packs.

5. Impact:
- translate 1% OpEx on RM 115M to RM savings.

6. How it works:
- dashboard -> owner pack -> governance loop.

7. Investment and ROI:
- ROI primarily from 1% OpEx plus reporting effort reduction.

8. Proof:
- show OpEx dashboard + owner pack export.

## Pilot and risk reversal

- Scope: one asset cluster (e.g. 3 buildings), 60 days
- Timeline: KPI model (week 1-2), data load (week 3-4), first pack (week 5-6), measure (week 7-8)
- Success criteria:
  - owner pack cycle time down >= 30%
  - OpEx category coverage >= 95%

## Do / Don't

- Do: position NOI lift as modeled.
- Don't: claim guaranteed NOI increase.
