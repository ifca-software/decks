# Segment Deck Plan (Playbook)

This folder is a deck system. Each product should have:

- `outline.md`: the narrative + numbers + defensibility notes
- `plan.md`: the build steps and how to create targeted segment variants

The goal is to produce sales decks where every numeric claim can be defended with:

- a clear unit heuristic (per bed, per sqft, per employee, per contract value, etc.)
- explicit assumptions and simple math
- evidence artifacts (screens, exports, dashboards) instead of named-case claims

## Standard slide spine (recommended)

1. Title
2. Problem (segment-specific)
3. Baseline economics (segment-specific)
4. Value creation levers (segment-specific)
5. Modeled impact (segment-specific)
6. How it works (mostly stable)
7. Investment and ROI (segment-specific, but formula stable)
8. Proof (evidence checklist, segment-specific)
9. Why IFCA (mostly stable)
10. Next step (mostly stable)

Optional slides (use when buyer is finance-heavy or risk-averse):

- Assumptions (show the math)
- Implementation (timeline + inputs)
- Pilot / risk reversal (scope + success criteria)

## Targeting rule

When creating a segment variant, rewrite Slides 2-8 only.

- Slides 1/9/10: keep stable to preserve brand and reduce maintenance.
- Slide 6: keep 70-80% stable, only swap examples and vocabulary.

## Defensibility rules for numbers

- Use one primary ROI lever + one secondary lever. Avoid stacking 4-5 savings sources.
- Tie every number to a unit heuristic and a base:
  - "1% on RM 60M" not "RM 720k"
  - "RM per bed" not "big savings"
- Prefer ranges where appropriate (e.g. 30-60 days), then pick one midpoint for modeling.
- Do not use named customers unless you have permission.
- If you cannot cite a benchmark, label it as an assumption and show the formula.

## Evidence first (what "Proof" means)

Every deck should be able to show at least:

- 1 operational dashboard (live view)
- 1 export/report (audit trail, aging report, compliance pack)
- 1 workflow (approvals, SLA, closure)

## Folder naming convention for variants

Use segment folders under product:

- `product/<segment>/` (e.g. `contractx/reit/`, `hrx/retail/`)

Keep segment slugs lowercase with hyphens.

## Segment spec standard

Every segment should have a spec file using:

- `_jobs/ifca/_deliverables/_decks/SEGMENT-SPEC-TEMPLATE.md`

Minimum requirements for a segment spec:

- a unit heuristic (anchor metric)
- a baseline model with inputs, formulas, and modeled values
- a 2-lever impact model (primary + secondary)
- a proof plan with at least 3 concrete artifacts (dashboard, workflow, export)
- a pilot scope + success criteria

## QA checklist (before using in sales)

- Slide 2: pain points match the segment and buyer persona
- Slide 3: baseline has a unit, a base, and a time period
- Slide 7: ROI math ties back to baseline numbers
- Assumptions slide exists (even if you hide it for execs)
- Proof slide lists concrete artifacts you can actually show
- Next step defines pilot scope and success criteria
