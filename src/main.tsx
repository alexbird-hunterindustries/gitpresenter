import React from "react";
import { render } from "ink";
import { App } from "./App";
import {
  goBackToTheStartingPlace,
  markOurPlaceSoWeCanComeBackToItLater,
} from "./git/setupAndTeardown";
import { checkPreconditions } from "./checkPreconditions";

checkPreconditions();
const startingPlace = markOurPlaceSoWeCanComeBackToItLater();

export function main() {
  render(<App/>);
}

process.on("exit", () => {
  console.info("Restoring your pre-presentation git state, please wait. (Ctrl+C again to leave git in a messy state.)")
  goBackToTheStartingPlace(startingPlace);
});
