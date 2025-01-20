import { execSync } from "node:child_process";

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
  if (bookmarkBranchName === defaultBookmarkBranchName) {
    const currentCommit = execSync("git log -n 1 --pretty=\"format:%h\"").toString().trim();
    execSync(`git checkout ${currentCommit}`);
    execSync(`git branch -D ${defaultBookmarkBranchName}`);
  }
}