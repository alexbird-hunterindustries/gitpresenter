import { Box, Spacer, Text } from "ink";
import React from "react";
import { CommitSummary } from "./CommitSummary";

export interface CommitDetailsProps {
  currentCommit?: string;
  nextCommit?: string;
  width: number;
  height: number;
}

export const CommitDetailsSidePanel = (props: CommitDetailsProps) => {
  const itemHeight = (props.height) / 2;
  return (
    <Box flexDirection={"column"}>
      <CommitSummary
        width={props.width}
        height={itemHeight}
        selected={props.nextCommit}
        headerPrefix={<Text><Text color={'blue'}>{'>>'}</Text> Next:</Text>}
      ></CommitSummary>

      <CommitSummary
        width={props.width}
        height={itemHeight}
        selected={props.currentCommit}
        headerPrefix={<Text>{'⭐️'} Current:</Text>}
      ></CommitSummary>
    </Box>
  )
}