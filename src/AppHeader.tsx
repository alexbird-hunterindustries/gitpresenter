import React, { Fragment } from 'react';
import { Box } from 'ink';
import BigText from 'ink-big-text';

export const AppHeader = () => {
  return (
    <Box justifyContent="center">
      <BigText text="Git " font="tiny" gradient="blue,blue" transitionGradient/>
      <BigText text="Presenter" font="tiny" gradient="blue,yellow"/>
    </Box>
  )
};
