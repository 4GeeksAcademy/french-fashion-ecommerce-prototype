# GUÍA FÁCIL — Trabaja en tu rama

Nunca trabajes directamente en `main`. Trabaja una rama y una página a la vez.

## Antes de empezar

```bash
git fetch origin
git status
git branch --show-current
```

Si hay cambios locales, pide al agente que los explique antes de cambiar de rama.
Ruth usa `git switch feature/catalog` para Catálogo y `git switch feature/product` para Producto.
Rodrigo usa `git switch feature/cart` para Carrito y `git switch feature/checkout` para Checkout.

La rama debe haber sido sincronizada por este onboarding. Si no sabes si está lista, pide al agente que compruebe que contiene `origin/main`; no adivines.
Ruth debe verificar su acceso. Rodrigo puede leer, preguntar y planear, pero no implementar hasta que su usuario y acceso estén verificados.

## Durante el trabajo

Edita únicamente el HTML de la página asignada en esa rama. Los contratos congelados son de solo lectura.
Haz commits con un propósito claro y un mensaje que explique el cambio.

## Antes del PR

```bash
git fetch origin
git merge origin/main
git status
git push origin <your-branch>
```

Reemplaza `<your-branch>` por tu rama actual. Si aparece un conflicto, detente: no hagas force push ni reset del trabajo de otra persona. Pide al agente que explique el conflicto; si la propiedad del cambio es ambigua, consulta a ORCH-00.
Usa la [plantilla del repositorio](../../../.github/pull_request_template.md) para el PR.

Terminado significa: implementación, revisión en 390x844 / 768x1024 / 1440x900, conformidad con contratos, evidencia, PR y handoff de conocimiento. No declares PASS de rúbrica por tu cuenta.

## ¿Qué archivos tengo que leer?

1. Tu prompt: [Ruth](02_RUTH_COPIA_ESTE_PROMPT_CATALOGO_Y_PRODUCTO.md) o [Rodrigo](03_RODRIGO_COPIA_ESTE_PROMPT_CARRITO_Y_CHECKOUT.md).
2. [AGENTS.md](../../../AGENTS.md).
3. Tu scope: [DISC-02](../scopes/DISC-02.yaml) o [TRAN-03](../scopes/TRAN-03.yaml).
4. Tu work package: [DISC-02](../work-packages/DISC-02.md) o [TRAN-03](../work-packages/TRAN-03.md).
5. [CONTRACT_INDEX.yaml](../CONTRACT_INDEX.yaml).
6. Contratos congelados: [Visual](../VISUAL_CONTRACT.md), [Copywriting](../COPYWRITING_STANDARD.md), [Product Content](../PRODUCT_CONTENT_CONTRACT.yaml).
7. [index.html](../../../index.html), Golden Reference aprobada; úsala como referencia visual.
