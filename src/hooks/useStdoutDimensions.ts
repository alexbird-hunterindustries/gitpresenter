/**
 * ink-use-stdout-dimensions
 * From https://github.com/cameronhunter/ink-monorepo/blob/master/packages/ink-use-stdout-dimensions/src/index.ts
 * Copyright Cameron Hunter https://cameronhunter.co.uk/
 * MIT license
 */
import { useEffect, useState } from 'react';
import { useStdout } from 'ink';

export function useStdoutDimensions(): [number, number] {
  const { stdout } = useStdout();
  const [dimensions, setDimensions] = useState<[number, number]>([stdout.columns, stdout.rows]);

  useEffect(() => {
    const handler = () => setDimensions([stdout.columns, stdout.rows]);
    stdout.on('resize', handler);
    return () => {
      stdout.off('resize', handler);
    };
  }, [stdout]);

  return dimensions;
}
