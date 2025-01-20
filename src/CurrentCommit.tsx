import React, { useState, useEffect, Fragment, ReactNode } from 'react';
import { Box, Text } from 'ink';
import { CommitDescription, describeCommit } from './git/describeCommit';

export interface CurrentCommitProps {
  width: number;
  height: number;
  selected?: string;
  headerPrefix: ReactNode;
}

export const CurrentCommit = ({ headerPrefix, width, height, selected }: CurrentCommitProps) => {
  const [details, setDetails] = useState<CommitDescription>({} as any);
  useEffect(() => {
    if (!selected) {
      return;
    }
    describeCommit(selected).then(setDetails);
  }, [selected]);

  return (
    <Box
      width={width}
      height={height}
      borderStyle="round"
      paddingLeft={1}
      paddingRight={1}
      flexDirection={"column"}
    >
      {!selected ? <Text>Press Enter to check out a commit</Text> : (
        <>
          <Text bold>
            <Text color={"cyan"}>{headerPrefix}</Text>
            {' '}
            {details.summary}</Text>
          <Text>{details.body}</Text>
          <Text dimColor>{details.changes}</Text>
        </>
      )}
    </Box>
  );
}
