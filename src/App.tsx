import React, { Fragment } from 'react';
import { AppHeader } from './AppHeader';
import { GitBrowser } from './GitBrowser';

export const App = () => {
  return (
    <>
      <AppHeader/>
      <GitBrowser/>
    </>
  )
};
