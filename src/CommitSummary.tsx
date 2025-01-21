import React, { useState, useEffect, Fragment, ReactNode } from 'react';
import { Box, Text } from 'ink';
import { CommitDescription, describeCommit } from './git/describeCommit';

export interface CurrentCommitProps {
  width: number;
  height: number;
  selected?: string;
  headerPrefix: ReactNode;
}

export const CommitSummary = ({ headerPrefix, width, height, selected }: CurrentCommitProps) => {
  const [details, setDetails] = useState<CommitDescription>({} as any);
  useEffect(() => {
    if (!selected) {
      return;
    }
    describeCommit(selected).then(setDetails);
  }, [selected]);

  const detailsHeight = height - 4;
  const bodyLines = (details.body || '').split('\n').slice(0, detailsHeight);
  const changes = (details.changes || '').split('\n').slice(0, detailsHeight - bodyLines.length).join('\n')
  const body = bodyLines.join('\n').trim()
  return (
    <Box
      width={width}
      height={height}
      borderStyle="round"
      paddingLeft={1}
      paddingRight={1}
      flexDirection={"column"}
      justifyContent={'space-between'}
      overflowY={'hidden'}
    >
      {!selected ? <Text>Press Enter to check out a commit</Text> : (
        <>
          <Box>
            <Text bold>
              <Text color={"cyan"}>{headerPrefix}</Text>
              {' '}
              {details.summary}</Text>
          </Box>
          {!body ? null : (
            <Box overflowY={'hidden'}>
              <Text>{body}</Text>
            </Box>
          )}
          <Box overflowY={'hidden'}>
            <Text dimColor>{changes}</Text>
          </Box>
        </>
      )}
    </Box>
  );
}
