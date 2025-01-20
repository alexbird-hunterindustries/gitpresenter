import { execSync } from "node:child_process";
import chalk from "chalk";
import { render } from "ink";
import { AppHeader } from "../AppHeader";

const defaultBookmarkBranchName = "gitpresenter-restore";

export function markOurPlaceSoWeCanComeBackToItLater() {
  const currentBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
  let bookmarkBranchName;
  if (currentBranch === "HEAD") {
    bookmarkBranchName = defaultBookmarkBranchName;
    execSync(`git checkout -b ${bookmarkBranchName}`);
  } else {
    bookmarkBranchName = currentBranch;
  }
  return { bookmarkBranchName };
}

export function goBackToTheStartingPlace({ bookmarkBranchName }: { bookmarkBranchName: string }) {
  execSync(`git reset --hard`);
  execSync(`git checkout ${bookmarkBranchName}`);
  let restoredTo = `the ${bookmarkBranchName} branch`;
  if (bookmarkBranchName === defaultBookmarkBranchName) {
    const currentCommit = execSync("git log -n 1 --pretty=\"format:%h\"").toString().trim();
    restoredTo = `detached head at commit ${currentCommit}`;
    execSync(`git checkout ${currentCommit}`);
    execSync(`git branch -D ${defaultBookmarkBranchName}`);
  }
  console.log("");
  console.log("----------------------------------------------------------------------------------");
  console.log("");
  console.log(`✌️  gitpresenter has restored git to the state it was in before we began (${restoredTo})`);
  console.log("");
}