import { useState, useEffect } from 'react';

import { useAsyncData } from 'src/hooks/async';

type LoadableContentProps<D> = {
  resolveContent: () => Promise<D>;
  renderLoading: () => JSX.Element;
  renderSuccess: (data: D, refresh: () => void) => JSX.Element;
  renderError: (e: unknown, refresh: () => void) => JSX.Element;
  loaderDelay: number;
};

function LoadableContent<D>({
  resolveContent,
  renderLoading,
  renderSuccess,
  renderError,
  loaderDelay,
}: LoadableContentProps<D>) {
  const [data, error, isLoading, refresh] = useAsyncData(resolveContent, [
    resolveContent,
  ]);

  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), loaderDelay);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    if (showLoader) {
      return renderLoading();
    }
    return null;
  }

  if (error != null) {
    return renderError(error, refresh);
  }

  return data && renderSuccess(data, refresh);
}
LoadableContent.defaultProps = {
  loaderDelay: 300,
};

export default LoadableContent;
