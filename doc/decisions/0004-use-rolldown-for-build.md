# 4. Use rolldown for build

Date: 2025-01-17

## Status

Accepted

## Context

Jsx or tsx (for react, which is required by ink) requires a build step.

Rolldown is a build tool built in rust that is very very very fast at compiling.
Its interface matches the popular Rollup library.

This is the internal build tool used by Vite.

## Decision

Use Rolldown.

## Consequences

The build is very very fast.
