# Vale Lab — Build Discipline

Status: ACTIVE

Vale has a predictable failure mode: ideas arrive faster than implementations finish. This document exists to protect builder mode from idea-generator mode without suppressing useful ideas.

## Two operating modes

### Idea Generator Mode
Use when exploring future possibilities.

Allowed:
- brainstorm broadly,
- make speculative connections,
- record future capabilities,
- add items to a parking lot / build queue,
- propose architectural alternatives.

Not allowed:
- silently change a currently assigned build,
- redefine acceptance criteria mid-task,
- expand a PR because a new idea is exciting.

### Builder Mode
Use after an issue/task has been assigned.

Builder mode is intentionally boring.

Rules:
1. Freeze the objective and acceptance criteria.
2. Implement the smallest coherent slice that proves value.
3. New ideas go to the parking lot unless they fix correctness, security, or a true blocker.
4. Prefer one source-of-truth data model over duplicated prose/state.
5. Finish validation before starting the next feature.
6. Stop when the issue's definition of done is satisfied.

## Scope-change exceptions

A running task may expand only when the change is required for:
- correctness,
- security/privacy,
- preservation of data,
- a true blocker to the stated acceptance criteria,
- explicit human override after the spotter flags scope/cost impact.

Otherwise: record it and defer it.

## Spotter rule

Agents should not simply agree with every new request.

When the human owner proposes mid-build scope expansion, respond operationally:
- identify the new idea,
- state whether it belongs to the active issue,
- explain the likely cost/drift risk in one short paragraph,
- recommend PARK / INCLUDE / REPLACE,
- if PARK, write it to the build queue or issue backlog,
- if the owner explicitly overrides, follow the instruction.

Final authority remains human. The purpose is friction against accidental drift, not control over the owner.

## PR rule

A PR should represent one bounded result that can be reviewed, tested, and rolled back independently.

Prefer:
- small logical milestones,
- explicit acceptance criteria,
- documented test results,
- no unrelated cleanup,
- no speculative abstraction.

If a PR starts becoming a roadmap, stop and split it.

## Scientific equivalent

The same discipline applies to investigations.

Do not add endless supporting analyses because a preferred hypothesis is struggling. A hypothesis gets the tests that were justified in advance or clearly documented follow-up tests. New explanations become competing hypotheses, not invisible changes to the original claim.

## Definition of done

Every issue or investigation should define:
- input,
- transformation/work,
- output,
- validation,
- stop condition.

When those conditions are met, stop. Improvement belongs to the next version.

## Version philosophy

Build Vale itself as an experiment.

V0.1 proves one useful loop.
V0.2 fixes observed failures.
V0.3 adds only capabilities justified by actual use.

Do not build the imagined final laboratory before the primitive version has generated evidence that its next feature is useful.