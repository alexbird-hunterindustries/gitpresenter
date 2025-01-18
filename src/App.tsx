import React, { useState } from 'react';
import { Text, Box } from 'ink';
import { AppHeader } from './AppHeader';
import { GitBrowser } from './GitBrowser';
import { CurrentCommit } from './CurrentCommit';
import { useStdoutDimensions } from './hooks/useStdoutDimensions';
import { checkoutCommit } from './git/checkoutCommit';

export const App = () => {
  const [selected, setSelected] = useState();
  const [columns, rows] = useStdoutDimensions();

  const twoColumnWidth = (columns / 2) - 4;
  const contentHeight = rows - 9;

  function onSelect(hash: string) {
    setSelected(hash);
    checkoutCommit(hash);
  }

  return (
    <Box width={columns} height={rows} flexDirection="column" alignItems="flex-start">
      <AppHeader width={columns}/>
      <Box width={columns} flexDirection="row">

        <GitBrowser selected={selected} setSelected={onSelect} width={twoColumnWidth} height={contentHeight}/>

        <Box width={4}></Box>

        <CurrentCommit selected={selected} width={twoColumnWidth} height={contentHeight}/>

      </Box>
    </Box>
  )
};
