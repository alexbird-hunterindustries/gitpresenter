import React from 'react';
import { Text, Box } from 'ink';
import { AppHeader } from './AppHeader';
import { GitBrowser } from './GitBrowser';
import { useStdoutDimensions } from './hooks/useStdoutDimensions';

export const App = () => {
  const [columns, rows] = useStdoutDimensions();

  const twoColumnWidth = (columns / 2) - 4;
  const contentHeight = rows - 9;

  return (
    <Box width={columns} height={rows} flexDirection="column" alignItems="flex-start">
      <AppHeader width={columns}/>
      <Box width={columns} flexDirection="row">
        <GitBrowser width={twoColumnWidth} height={contentHeight}/>

        <Box width={4}></Box>

        <CurrentCommit width={twoColumnWidth} height={contentHeight}/>
      </Box>
    </Box>
  )
};

const CurrentCommit = ({ width, height }: { width: number, height: number }) => {
  return (
    <Box width={width} height={height} borderStyle="round" paddingLeft={1} paddingRight={1}>
      <Text>selected commit (coming soon)</Text>
    </Box>
  );
}
