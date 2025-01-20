import React from "react";
import { Box, render, Text } from "ink";
import { AppHeader } from "./AppHeader";
import { throwIfWorkingDirectoryNotClean } from "./git/throwIfWorkingDirectoryNotClean";
import { StopHand } from "./StopHand";

export function checkPreconditions() {
  try {
    throwIfWorkingDirectoryNotClean();
  } catch (ignored) {
    render(
      <Box flexDirection={"column"} alignItems={"center"}>
        <AppHeader width={Infinity}/>
        <StopHand></StopHand>
        <Text> </Text>
        <Text color={"red"}>The working directory is not clean</Text>
        <Text> </Text>
        <Text color={"yellow"}>Please commit or reset your changes and try again.</Text>
        <Text> </Text>
      </Box>,
    );
    process.exit(1);
  }
}
