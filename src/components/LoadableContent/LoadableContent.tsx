import { useState, useEffect } from 'react';

import { useAsyncData } from '../../hooks/async';

type LoadableContentProps<D> = {
  resolveContent: () => Promise<D>;
  renderLoading: () => JSX.Element;
  renderSuccess: (data: D) => JSX.Element;
  renderError: (e: unknown) => JSX.Element;
  loaderDelay: number;
};

function LoadableContent<D>({
  resolveContent,
  renderLoading,
  renderSuccess,
  renderError,
  loaderDelay,
}: LoadableContentProps<D>) {
  const [data, error, isLoading] = useAsyncData(resolveContent, [
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
    return renderError(error);
  }

  return renderSuccess(data);
}
LoadableContent.defaultProps = {
  loaderDelay: 300,
};

export default LoadableContent;
