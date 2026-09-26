# Deviation and rescue protocol

## Assessment
- **PASS:** owned deliverable conforms to locked contracts with current evidence; hand off.
- **REPAIRABLE:** bounded defect with clear remedy; owner self repairs, reruns affected and regression checks, records result.
- **GUIDED:** ambiguity or repeated failed repair needs ORCH-00 guidance; pause affected surface, document options and evidence.
- **CAPABILITY_GAP:** work cannot be completed with available access, skill or tooling; ORCH-00 records gap and assigns a bounded conformance rescue. No synthetic PASS.

## Repair and attribution
Self repair stays with the owning contributor. Guided repair records the decision and the contributor's follow-up. A conformance rescue is event-driven, not a sixth standing process; the rescuing author and original contributor are both credited. Preserve original commits and handoff history. Stop a loop after three materially similar failures until the hypothesis changes.

## Contract deviation request
Submit contract/version, affected files, observed conflict, rubric effect, proposed minimal change and evidence to ORCH-00 before changing a frozen transversal contract. ORCH-00 chooses exactly one:
- **USE_EXISTING:** implement the current contract.
- **LOCAL_VARIANT:** authorize a bounded local exception and document where it applies.
- **EXTEND_CONTRACT:** send a versioned amendment to the authorized publisher, assess affected work and re-lock.
- **REJECT:** keep the contract and decline the proposed deviation.

No worker directly mutates a frozen transversal contract. A decision records rationale, owner, version, affected handoffs and revalidation requirements.
