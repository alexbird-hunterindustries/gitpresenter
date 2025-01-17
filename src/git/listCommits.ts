import { promisify } from 'node:util';
import { exec as execWithCallback } from 'node:child_process';

const exec = promisify(execWithCallback);

export async function listCommits() {
  const { stdout } = await exec('git log --oneline');
  return stdout.split('\n');
}
