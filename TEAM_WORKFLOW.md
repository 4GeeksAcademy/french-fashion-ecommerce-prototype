# Team Workflow

This repository is a three-person academic collaboration. The graded Git workflow is part of the deliverable.

## Shared foundation
Branch: `feature/shared-foundation`

Purpose:
- create the five required HTML files;
- establish the shared head/meta pattern;
- load Tailwind CSS;
- establish common navbar/footer markup;
- establish page-to-page navigation and base visual grammar.

Merge this branch first.

## View ownership
After the shared foundation is merged, each contributor starts from updated `main`.

### Member 1
- `feature/home` — Home page
- later: `feature/seo-schema` — cross-page SEO and Schema.org reconciliation

### Member 2
- `feature/catalog` — Catalog page
- `feature/product` — Product page

### Member 3
- `feature/cart` — Cart page
- `feature/checkout` — Checkout page

## Required PR routine
For every feature branch:

1. Work only on the assigned view/feature.
2. Make clear logical commits.
3. Before opening the PR, update the branch from `main`.
4. Resolve conflicts collaboratively; never overwrite another contributor's work with force-push.
5. Open a PR describing:
   - what changed;
   - which rubric requirements it satisfies;
   - what was tested.
6. Merge only after the branch is current and the change is reviewable.

## Scope guard
Use HTML + Tailwind CSS only for the academic prototype. Do not add React, Vue, Angular, a backend, database, real authentication, persistent cart logic, or payment processing.
