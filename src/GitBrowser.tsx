import React, { useState, useEffect, Fragment } from 'react';
import { Box, Text, useInput } from 'ink';
import { CommitSummary, listCommits } from './git/listCommits';

export interface GitBrowserProps {
  width: number;
  height: number;
  selected?: string;
  setSelected: (hash: string) => Promise<void>;
  setNextCommit: (hash: string | undefined) => Promise<void>;
}

export const GitBrowser = (props: GitBrowserProps) => {
  const { width, height, selected, setSelected } = props;
  const [commits, setCommits] = useState<CommitSummary[]>([]);
  const [maybeCursor, setCursor] = useState<number | undefined>();
  const cursor = maybeCursor || 0;
  const minCursor = 0;
  const maxCursor = commits.length - 1;
  useInput((input, key) => {
    if (key.upArrow) {
      setCursor(x => Math.max(minCursor, x - 1));
    } else if (key.downArrow) {
      setCursor(x => Math.min(maxCursor, x + 1));
    } else if (key['return']) {
      onSelect(commits[cursor].hash);
    }
  });

  useEffect(() => {
    const nextCommit = cursor && commits[cursor]?.hash
    props.setNextCommit(nextCommit || undefined);

  }, [cursor])

  useEffect(() => {
    listCommits()
      .then(commits => {
        setCommits(commits);
        const initialCursor = Math.max(commits.findIndex(x => x.tags.includes('gitpresenter-start')), 0);
        setCursor(initialCursor);
      });
  }, []);

  function onSelect(hash: string) {
    setSelected(hash).then(() => {
      setCursor(current => !current ? current : Math.max(0, current - 1));
    })
  }

  const bufferSize = (height - 5) / 2;
  const visibleStart = Math.max(minCursor, cursor - bufferSize);
  const visibleCommits = commits.map((x, index) => ({ ...x, index })).slice(visibleStart, cursor + 1 + bufferSize);
  const startBlankLines = Math.max(0, bufferSize - visibleStart - cursor);
  const endBlankLines = Math.max(0, 1 + bufferSize - commits.slice(cursor).length);


  return (
    <Box width={width} flexDirection="column" borderStyle="round" padding={1}>
      {Array.from({ length: startBlankLines }).map((_, i) => <Text key={`starting-blank-${i}`}> </Text>)}
      {visibleCommits.map(({ hash, summary, tags, index }) => {
        const isSelected = hash === selected;
        const active = cursor === index;
        const summaryWidth = width - 20 - (tags.join(' ').length)
        const icon = isSelected
          ? active ? '>>⭐️' : '  ⭐️'
          : active ? '>>  ' : '    '
        const emphasize = active || isSelected;
        return (
          <Box key={hash} flexDirection="row" justifyContent="flex-start">
            <>
              <Text color="blue">{icon} </Text>
              <Text color={emphasize ? "green" : undefined}>{hash} </Text>
              <Text color="gray">{tags.map(x => x + ' ').join('')}</Text>
              <Text color={emphasize ? "cyan" : undefined}>{summary.slice(0, summaryWidth)}</Text>
            </>
          </Box>
        )
      })}
      {Array.from({ length: endBlankLines }).map((_, i) => <Text key={`ending-blank-${i}`}> </Text>)}
    </Box>
  )
};
