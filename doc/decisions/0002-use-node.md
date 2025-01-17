# 2. Use Node

Date: 2025-01-17

## Status

Accepted

## Context

I'd like this thing to be easy to use. If I use Node, I can use Ink to easily
create an interactive CLI. 

I care a little about making this easy to install and portable, but I care much
more about it being easy to use.

## Decision

Use Node.js to build the CLI.

## Consequences

### Main Consequence

➕ Access to off-the-shelf tooling for interactive CLIs

### Secondary Consequences

➖ To run it, you'll need to have the correct version of Node installed on your
system. This may make it harder for others to use or harder for me to use it in
the future.

➕ I could publish it on npm, which would make it very easy to install for folks
who do already have modern Node set up on their system.


