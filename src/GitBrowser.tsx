import React, {useState, useEffect} from 'react';
import {Text, useInput} from 'ink';
import { listCommits } from './git/listCommits';

export const GitBrowser = () => {
  const [log, setLog] = useState([]);
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
      .then(commits => setLog(commits));
  }, []);

  return <Text color="green">{log.join('\n')}</Text>;
};
