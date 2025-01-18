import React, {useState, useEffect, Fragment} from 'react';
import { Box, Text, useInput } from 'ink';
import { listCommits } from './git/listCommits';

export const GitBrowser = () => {
  const [commits, setCommits] = useState([]);
  const [cursor, setCursor] = useState(0);
  const minCursor = 0;
  const maxCursor = commits.length - 1;
  useInput((input, key) => {
    if (key.upArrow) {
      setCursor(x => Math.max(minCursor, x - 1));
    } else if (key.downArrow) {
      setCursor(x => Math.min(maxCursor, x + 1));
    } else if (key['return']) {
      console.log(`submit commit ${commits[cursor].summary}`);
    }
  });

  useEffect(() => {
    listCommits()
      .then(commits => setCommits(commits));
  }, []);

  const bufferSize = 10;
  const visibleStart = Math.max(minCursor, cursor - bufferSize);
  const visibleCommits = commits.map((x, index) => ({ ...x, index })).slice(visibleStart, cursor + 1 + bufferSize);
  const blankLines = Math.max(0, bufferSize - visibleStart - cursor);


  return (
    <Box flexDirection="column">
      { Array.from({ length: blankLines }).map((_, i) => <Text key={`blank-${i}`}> </Text>) }
      { visibleCommits.map(({ hash, summary, tags, branches, index }) => {
        const active = cursor === index;
        return (
          <Box key={hash} flexDirection="row" justifyContent="flex-start">
            <>
              <Text color="blue">{active ? ' >> ' : '    '} </Text>
              <Text color={active ? "green" : undefined }>{hash} </Text>
              <Text color="blue">{tags.map(x => x + ' ').join('')}</Text>
              <Text color="gray">{branches.map(x => x + ' ').join('')}</Text>
              <Text color={active ? "cyan" : undefined }>{summary}</Text>
            </>
          </Box>
        )
      }) }
    </Box>
  )
};
