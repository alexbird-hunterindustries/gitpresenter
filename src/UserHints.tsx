import React, { Fragment, useEffect, useState } from 'react';
import { Box, Text } from 'ink';

const hintDisplayTime = 15 * 1000;

interface UserHintsProps {
  width: number;
  onHintsHidden: () => void;
}

export const UserHints = ({ width, onHintsHidden }: UserHintsProps) => {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onHintsHidden();
    }, hintDisplayTime)
    return () => clearTimeout(timeout);
  }, []);
  if (!visible) {
    return null;
  }
  return (
    <Box flexDirection="column" alignItems="center" width={width} paddingBottom={1}>
      <Text color="gray">Hint: {randomHint}</Text>
    </Box>
  )
};

const hints = [
  'Tag a commit with "gitpresenter-start" to automatically start your presentation at that commit',
  'Use your git commit descriptions as "presenter notes" for each slide',
  'When gitpresenter checks out a commit, it does a soft reset so your IDE can show the commit diff',
  'gitpresenter reads commit starting from your git HEAD. If you can\'t see your commits, check out your main branch before starting gitpresenter.'
]

const randomHint = hints[Math.round(Math.random() * (hints.length - 1))];
