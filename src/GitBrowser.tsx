import React, {useState, useEffect, Fragment} from 'react';
import { Box, Text, useInput } from 'ink';
import { listCommits } from './git/listCommits';

export const GitBrowser = () => {
  const [commits, setCommits] = useState([]);
  const [cursor, setCursor] = useState(0);
  useInput((input, key) => {
    if (key.upArrow) {
      setCursor(x => Math.max(0, x - 1));
    } else if (key.downArrow) {
      setCursor(x => Math.min(commits.length - 1, x + 1));
    } else if (key['return']) {
      console.log(`submit commit ${commits[cursor].summary}`);
    }
  });

  useEffect(() => {
    listCommits()
      .then(commits => setCommits(commits));
  }, []);

  return (
    <Box flexDirection="column">
      { commits.map(({ hash, summary, tags, branches }, i) => (
        <Box key={hash} flexDirection="row" justifyContent="flex-start">
          <>
            <Text color="blue">{i === cursor ? ' >> ' : '    '} </Text>
            <Text color="green">{hash} </Text>
            <Text color="cyan">{[...tags, ...branches].map(x => x + ' ').join('')}</Text>
            <Text color="blue">{summary}</Text>
          </>
        </Box>
      )) }
    </Box>
  )
};
