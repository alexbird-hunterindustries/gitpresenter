import React, { Fragment } from 'react';
import { Box } from 'ink';
import BigText from 'ink-big-text';

export const AppHeader = ({ width }: { width: number }) => {
  return (
    <Box justifyContent="center" width={width}>
      <BigText text="Git " font="tiny" gradient="blue,blue" transitionGradient/>
      <BigText text="Presenter" font="tiny" gradient="blue,yellow"/>
    </Box>
  )
};
