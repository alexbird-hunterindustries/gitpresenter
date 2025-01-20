import { Box, Spacer, Text } from "ink";
import React from "react";
import { CurrentCommit } from "./CurrentCommit";

export interface CommitDetailsProps {
  currentCommit?: string;
  nextCommit?: string;
  width: number;
  height: number;
}

export const CommitDetails = (props: CommitDetailsProps) => {
  const itemHeight = (props.height - 2) / 2;
  return (
    <Box flexDirection={"column"}>
      <CurrentCommit width={props.width} height={itemHeight} selected={props.nextCommit}></CurrentCommit>
      <Spacer></Spacer>
      <Spacer></Spacer>
      <CurrentCommit width={props.width} height={itemHeight} selected={props.currentCommit}></CurrentCommit>
    </Box>
  )
}