# 6. Only build the code dynamically in dev mode

Date: 2025-01-17

## Status

Accepted

Supercedes [5. Build the code dynamically whenever the command is run](0005-build-the-code-dynamically-whenever-the-command-is-run.md)

## Context

Once this thing is stable, it's unnecessary to build it every time we run it.

Also, in the install instructions, we have to run `npm link` and `npm install`
no matter what. `npm i` is too slow to run every time we run the command, and
`npm link` is required to be able to run the command.

## Decision

Use a dev script that builds and runs; use a prod script that only runs. Add a
setup script that links, installs, and builds.

## Consequences

In prod mode, there is a turnkey installer and a simpler runner.

In dev mode, there is a single step that handles rebuild and run.
