import React, {useState, useEffect} from 'react';
import {Text, useInput} from 'ink';
import { listCommits } from './git/listCommits';

export const GitBrowser = () => {
  const [commits, setCommits] = useState([]);
  useInput((input, key) => {
    if (key.upArrow) {
      console.log('up');
    } else if (key.downArrow) {
      console.log('down');
    } else if (key['return']) {
      console.log('submit');
    }
  });

  useEffect(() => {
    listCommits()
      .then(commits => setCommits(commits));
  }, []);

  return <Text color="green">{commits.map(JSON.stringify).join('\n')}</Text>;
};
