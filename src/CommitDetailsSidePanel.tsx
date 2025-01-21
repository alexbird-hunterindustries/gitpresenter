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
  const itemHeight = Math.floor((props.height) / 2);
  const gap = props.height - (2 * itemHeight);
  return (
    <Box flexDirection={"column"}>
      <CommitSummary
        width={props.width}
        height={itemHeight}
        selected={props.nextCommit}
        headerPrefix={<Text><Text color={'blue'}>{'>>'}</Text> Next:</Text>}
      ></CommitSummary>

      {
        Array.from({ length: gap }).map(() => <Spacer></Spacer>)
      }

      <CommitSummary
        width={props.width}
        height={itemHeight}
        selected={props.currentCommit}
        headerPrefix={<Text>{'⭐️'} Current:</Text>}
      ></CommitSummary>
    </Box>
  )
}