import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function checkoutCommit(hash: string) {
  await exec(`git reset --hard HEAD`);
  await exec(`git checkout ${hash}`);
  await exec(`git reset --soft HEAD^`);
}
