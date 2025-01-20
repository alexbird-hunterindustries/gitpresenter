import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export interface CommitSummary {
  hash: string;
  summary: string;
  tags: string[];
  branches: string[];
}

export async function listCommits(): Promise<CommitSummary[]> {
  const { stdout } = await exec('git log -n 500 --pretty="format:%h||||%s||||%D"');
  return stdout.split('\n')
    .map(line => line.split('||||'))
    .map(([hash, summary, decorations]) => ({ hash, summary, ...parseDecorations(decorations) }));
}

function parseDecorations(decorations: string) {
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
