# Corrections

Append-only log of fixes and feedback made during development. Binding once logged, below the brief and above `rules.md`.

Entry format (one block per correction, newest last, headed with three hashes, the ID and a short title):
- Date:
- Scope: global, page:<name>, section:<name> or component:<name>
- Was: what was built or assumed
- Now: what is correct
- Why: the user's reason, in their words
- Status: `one-off`, `rule`, `promoted` (moved into the brief) or `retired` (no longer enforced)

Only `rule` entries are enforced. A correction that contradicts a locked brief decision is not logged here: it goes through the amendment path and the brief changelog links back to the ID.
