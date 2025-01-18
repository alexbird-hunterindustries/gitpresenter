import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function describeCommit(hash: string) {
  const { stdout } = await exec(`git show ${hash} --name-status`);
  return stdout;
}
