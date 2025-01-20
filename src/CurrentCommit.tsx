import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import { describeCommit } from './git/describeCommit';

export interface CurrentCommitProps {
  width: number;
  height: number;
  selected?: string;
}

export const CurrentCommit = ({ width, height, selected }: CurrentCommitProps) => {
  const [details, setDetails] = useState('');
  useEffect(() => {
    if (!selected) {
      return;
    }
    describeCommit(selected).then(setDetails);
  }, [selected]);

  const sanitizedDetails = details.split('\n')
    .map(x => x.replace(/[^\w]/g, ' '))
    .join('\n');
  return (
    <Box width={width} height={height} borderStyle="round" paddingLeft={1} paddingRight={1}>
      { !selected ? <Text>Press Enter to check out a commit</Text> : (
        <Text>{ sanitizedDetails }</Text>
      ) }
    </Box>
  );
}
