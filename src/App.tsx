import React, { useState } from 'react';
import { Box } from 'ink';
import { AppHeader } from './AppHeader';
import { UserHints } from './UserHints';
import { GitBrowser } from './GitBrowser';
import { CurrentCommit } from './CurrentCommit';
import { useStdoutDimensions } from './hooks/useStdoutDimensions';
import { checkoutCommit } from './git/checkoutCommit';

export const App = () => {
  const [selected, setSelected] = useState<string | undefined>();
  const [columns, rows] = useStdoutDimensions();

  const twoColumnWidth = (columns / 2) - 4;
  const contentHeight = rows - 9;

  async function onSelect(hash: string) {
    setSelected(hash);
    await checkoutCommit(hash);
  }

  return (
    <Box width={columns} height={rows} flexDirection="column" alignItems="flex-start">
      <AppHeader width={columns}/>
      <UserHints width={columns}/>
      <Box width={columns} flexDirection="row">

        <GitBrowser selected={selected} setSelected={onSelect} width={twoColumnWidth} height={contentHeight}/>

        <Box width={4}></Box>

        <CurrentCommit selected={selected} width={twoColumnWidth} height={contentHeight}/>

      </Box>
    </Box>
  )
};
