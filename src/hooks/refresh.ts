import { useState, useCallback } from 'react';

type Refresh = [() => void, number];

export function useRefresh(): Refresh {
  const [increment, setIncrement] = useState(0);

  const refresh = useCallback(() => {
    setIncrement(increment + 1);
  }, [increment, setIncrement]);

  return [refresh, increment];
}
