# 5. Build the code dynamically whenever the command is run

Date: 2025-01-17

## Status

Accepted

## Context

The Rolldown build takes about 10ms. That is SO fast!

A separate build step slows down development and complicates installment.

## Decision

For now, make the script auto-build itself so there is no build step.

## Consequences

Maybe there will be a reason not to do this in the future.

For now, it makes the cli very easy to use.
