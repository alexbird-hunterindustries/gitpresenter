import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function describeCommit(hash: string) {
  const { stdout } = await exec(`git show ${hash} --name-status`);
  return stdout;
}

function parseDecorations(decorations) {
  const items = decorations
    .replace('HEAD -> ', '')
    .split(', ')
    .map(x => x.trim())
    .filter(x => !!x);

  const tagPrefix = 'tag: ';
  const tags = items.filter(x => x.startsWith(tagPrefix)).map(x => x.replace(tagPrefix, ''))
  const branches = items.filter(x => !x.startsWith(tagPrefix));
  return { tags, branches };
}
