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
      { commits.map(({ hash, summary, tags, branches }, i) => {
        const active = cursor === i;
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
