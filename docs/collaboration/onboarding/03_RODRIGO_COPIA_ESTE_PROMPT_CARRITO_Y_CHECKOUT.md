# RODRIGO — COPIA Y PEGA ESTE PROMPT EN TU AGENTE

> Este es tu punto de arranque. Pega TODO el bloque siguiente en el agente que estés usando dentro de GitHub Codespaces.

```text
You are working inside GitHub Codespaces for:
4GeeksAcademy/french-fashion-ecommerce-prototype

HUMAN CONTRIBUTOR
Rodrigo

GITHUB USERNAME
PENDING — read CONTRIBUTOR_ASSIGNMENTS.yaml

PROCESS
TRAN-03 — Transaction & Forms

YOUR WORK
1. Cart
2. Checkout

YOUR FILES
cart.html
checkout.html

YOUR BRANCHES
feature/cart
feature/checkout

Do not reconstruct project state from chat memory. The repository is authoritative.

FIRST READ — IN THIS ORDER

1. AGENTS.md
2. docs/collaboration/CONTRIBUTOR_ASSIGNMENTS.yaml
3. docs/collaboration/onboarding/00_EMPIEZA_AQUI_RUTH_Y_RODRIGO.md
4. docs/collaboration/onboarding/01_GUIA_FACIL_PARA_TRABAJAR_EN_TU_RAMA.md
5. docs/collaboration/CONTRACT_INDEX.yaml
6. docs/collaboration/scopes/TRAN-03.yaml
7. docs/collaboration/work-packages/TRAN-03.md
8. docs/collaboration/REFERENCE_CONTRACT.md
9. docs/collaboration/VISUAL_CONTRACT.md
10. docs/collaboration/COPYWRITING_STANDARD.md
11. docs/collaboration/PRODUCT_CONTENT_CONTRACT.yaml
12. index.html as the approved Golden Reference

BEFORE EDITING

- verify the repository remote;
- verify current branch;
- verify git status is clean or explain any local changes;
- verify frozen contracts are FROZEN;
- read CONTRIBUTOR_ASSIGNMENTS.yaml and satisfy every activation gate for this process;
- the four contributor branches were synchronized to onboarding main fd81bc1cd8e190b068a4fb8b04e5eee8ee565752 in PR #6; initial synchronization is complete;
- immediately before each phase, fetch origin and verify that the phase's owned branch contains current origin/main;
- verify active authenticated GitHub identity using the authorized environment; if gh is available, use gh auth status only as an identity/session check;
- do not infer authenticated identity from git config user.name/email;
- verify repository WRITE/push capability without creating implementation changes, using the environment's safe/dry-run capability; a no-change result alone is not proof of WRITE authorization;
- verify CONTRIBUTOR_ASSIGNMENTS assigns Rodrigo to TRAN-03;
- Rodrigo's GitHub username/access remain PENDING; the username must be supplied before implementation;
- verify active GitHub identity matches Rodrigo's supplied username; if authenticated as another user, STOP before editing rather than creating falsely attributed work;
- verify repository WRITE capability for Rodrigo's own account;
- check feature/cart before Cart and feature/checkout before Checkout; only after username + matching identity + WRITE + branch-current checks pass may implementation begin.

If username, matching active identity, WRITE capability or branch freshness is still pending or cannot be verified, you may read, explain and plan, but DO NOT edit implementation. State exactly what must be completed to activate TRAN-03, including the exact permission blocker if WRITE is unavailable.

WORK ORDER

PHASE 1 — CART

Use:
feature/cart

Edit only:
cart.html

Required:
- full-page cart, never a side drawer;
- exactly 3 canonical sample products;
- thumbnail for each item;
- unit price;
- quantity;
- line total;
- subtotal;
- tax;
- total;
- Purchase button;
- displayed arithmetic internally coherent;
- semantic HTML;
- Tailwind;
- responsive at 390x844 / 768x1024 / 1440x900;
- frozen visual/copy/product-content conformance.

When Cart is complete:
- test it;
- verify calculations;
- verify no horizontal overflow;
- verify current main is integrated before PR;
- make meaningful commits;
- push feature/cart;
- prepare PR and knowledge handoff.

Do not begin Checkout until Cart is ready for handoff.

PHASE 2 — CHECKOUT

Use:
feature/checkout

Edit only:
checkout.html

Required visible sections:
1. Personal details
2. Shipping address
3. Card payment details

Use semantic form markup and labels.
Prototype only.

DO NOT implement:
- real payment;
- backend;
- persistent cart;
- authentication;
- payment API.

DO NOT EDIT

index.html
catalog.html
product.html
frozen contracts

DO NOT
- add React/Vue/Angular;
- force-push;
- reset teammate work;
- redefine global design;
- declare rubric criteria PASS yourself.

If a frozen contract does not solve a real requirement:
STOP only that decision and raise a deviation to ORCH-00.

DEFINITION OF DONE FOR EACH VIEW

- required rubric content implemented;
- owned file only;
- semantic HTML;
- Tailwind;
- frozen contracts respected;
- 390 / 768 / 1440 checked;
- cart arithmetic verified when applicable;
- no horizontal page overflow;
- meaningful commits;
- branch current enough with main for PR;
- PR prepared;
- evidence recorded;
- knowledge handoff prepared.

Do not perform INTEG-04 work.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟨 OPTIONAL — DIDACTIC MODE / MODO DIDÁCTICO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This mode is OPTIONAL and OFF by default.

If Rodrigo says:
"ACTIVA MODO DIDÁCTICO"

after every important step, briefly explain in simple Spanish:
1. Qué acabamos de hacer.
2. Por qué lo hicimos.
3. Qué archivo o rama cambió.
4. Cómo comprobar que salió bien.

Keep explanations short and practical.
Do not ask for approval for every normal/reversible step.
The goal is that Rodrigo understands the work while the agent helps execute it.

If Rodrigo says:
"DESACTIVA MODO DIDÁCTICO"

return to normal execution mode.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
