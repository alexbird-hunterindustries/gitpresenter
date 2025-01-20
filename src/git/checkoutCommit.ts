import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function checkoutCommit(hash: string) {
  await exec(`git reset --hard HEAD`);
  await exec(`git checkout ${hash}`);
  if (await doesRefExist('HEAD^')) {
    await exec(`git reset --soft HEAD^`);
  }
}

async function doesRefExist(ref: string) {
  try {
    await exec(`git rev-list ${ref} -n 1`);
    return true;
  } catch (ignored) {
    return false;
  }
}
