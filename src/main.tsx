import React from "react";
import { render } from "ink";
import { App } from "./App";
import { goBackToTheStartingPlace, markOurPlaceSoWeCanComeBackToItLater } from "./git/setupAndTeardown";

const startingPlace = markOurPlaceSoWeCanComeBackToItLater();

export function main() {
  render(<App/>);
}

process.on("exit", () => {
  goBackToTheStartingPlace(startingPlace);
});
