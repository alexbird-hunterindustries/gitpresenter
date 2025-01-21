import React, { useState } from 'react';
import { Box } from 'ink';
import { AppHeader } from './AppHeader';
import { UserHints } from './UserHints';
import { GitBrowser } from './GitBrowser';
import { useStdoutDimensions } from './hooks/useStdoutDimensions';
import { checkoutCommit } from './git/checkoutCommit';
import { CommitDetailsSidePanel } from "./CommitDetailsSidePanel";

export const App = () => {
  const [selected, setSelected] = useState<string | undefined>();
  const [nextCommit, setNextCommit] = useState<string | undefined>();
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [columns, rows] = useStdoutDimensions();

  const twoColumnWidth = (columns - 3) / 2;
  const headerHeight = 6;
  const hintHeight = 3;
  const contentHeight = rows - headerHeight - (isHintVisible ? hintHeight : 0);

  async function onSelect(hash: string) {
    setSelected(hash);
    await checkoutCommit(hash);
  }

  return (
    <Box width={columns} height={rows} flexDirection="column" alignItems="flex-start" paddingLeft={1}>
      <AppHeader width={columns}/>
      <UserHints width={columns} onHintsHidden={() => setIsHintVisible(false)}/>
      <Box width={columns} flexDirection="row">

        <GitBrowser
          selected={selected}
          setNextCommit={setNextCommit}
          setSelected={onSelect}
          width={twoColumnWidth}
          height={contentHeight}/>

        <Box width={1}></Box>

        <CommitDetailsSidePanel
          currentCommit={selected}
          nextCommit={nextCommit}
          width={twoColumnWidth}
          height={contentHeight}/>

      </Box>
    </Box>
  )
};
