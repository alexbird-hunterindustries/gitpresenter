import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function listCommits() {
  const { stdout } = await exec('git log -n 20 --pretty="format:%h||||%s||||%D"');
  return stdout.split('\n')
    .map(line => line.split('||||'))
    .map(([hash, summary, decorations]) => ({ hash, summary, ...parseDecorations(decorations) }));
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
