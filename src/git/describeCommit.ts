import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export interface CommitDescription {
  summary: string;
  body: string;
  changes: string;
}

export async function describeCommit(hash: string): Promise<CommitDescription> {
  const { stdout: summary } = await exec(`git rev-list -n 1 ${hash} --format="format:%s" --no-commit-header`);
  const { stdout: body } = await exec(`git rev-list -n 1 ${hash} --format="format:%b" --no-commit-header`);
  const changes = await getChanges(hash);
  return { summary: summary.trim(), body: body.trim(), changes };
}

async function getChanges(hash: string) {
  try {
    const { stdout: changes } = await exec(`git diff ${hash}^ ${hash} --name-status`);
    return changes
      .split('\n')
      .map(x => x.replace(/\s/g, ' '))
      .join('\n');
  } catch (ignored) {
    return '(could not retrieve changes)';
  }
}
