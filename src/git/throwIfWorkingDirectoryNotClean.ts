import { execSync } from "node:child_process";

export function throwIfWorkingDirectoryNotClean() {
  execSync("git update-index --refresh");
  execSync("git diff-index --quiet HEAD --");
}