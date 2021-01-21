import { useState, useEffect, DependencyList } from 'react';

import { useRefresh } from './refresh';

type AsyncData<D, E> = [D | null, E | null, boolean, () => void];

export function useAsyncData<D, E>(
  fetchData: () => Promise<D>,
  deps?: DependencyList
): AsyncData<D, E> {
  const [data, setData] = useState<D | null>(null);
  const [error, setError] = useState<E | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, refreshIncrement] = useRefresh();

  useEffect(
    () => {
      let isCancelled = false;

      fetchData()
        .then((d) => {
          if (!isCancelled) {
            setData(d);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          if (!isCancelled) {
            setError(err);
            setIsLoading(false);
          }
        });

      return () => {
        isCancelled = true;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps && [setData, setError, setIsLoading, refreshIncrement, ...deps]
  );

  return [data, error, isLoading, refresh];
}
