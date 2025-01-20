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
      <CurrentCommit
        width={props.width}
        height={itemHeight}
        selected={props.nextCommit}
        headerPrefix={<Text><Text color={'blue'}>{'>>'}</Text> Next:</Text>}
      ></CurrentCommit>

      <Spacer></Spacer>
      <Spacer></Spacer>

      <CurrentCommit
        width={props.width}
        height={itemHeight}
        selected={props.currentCommit}
        headerPrefix={<Text>{'⭐️'} Current:</Text>}
      ></CurrentCommit>
    </Box>
  )
}