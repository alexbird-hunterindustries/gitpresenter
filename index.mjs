#!/usr/bin/env node

import { execSync } from 'node:child_process';

console.log(execSync('npm run build').toString());

const { main } = await import('./dist/main.js');

main();
