import React from 'react';
import { Box, Text } from 'ink';

export interface CurrentCommitProps {
  width: number;
  height: number;
  selected: string;
}

export const CurrentCommit = ({ width, height, selected }: CurrentCommitProps) => {
  return (
    <Box width={width} height={height} borderStyle="round" paddingLeft={1} paddingRight={1}>
      { !selected ? <Text>Press Enter to check out a commit</Text> : (
        <Text>selected commit { selected }</Text>
      ) }
    </Box>
  );
}
