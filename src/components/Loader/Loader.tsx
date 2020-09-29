import React from 'react';

import { Spinner } from './styled';

type LoadingProgress =
  | {
      now: number;
      min: number;
      max: number;
    }
  | string;

type LoaderProps = {
  progress: LoadingProgress;
  size: number;
  isCentered: boolean;
  regionId?: string;
};

function Loader({ regionId, progress, size, isCentered }: LoaderProps) {
  const progressProps = resolveProgressProps(progress);

  return (
    <Spinner
      role="progressbar"
      described-by={regionId}
      size={size}
      isCentered={isCentered}
      {...progressProps}
    />
  );
}
Loader.defaultProps = {
  size: 8,
  isCentered: false,
};

function resolveProgressProps(progress: LoadingProgress) {
  if (typeof progress === 'string') {
    return { 'aria-valuetext': progress };
  }
  return {
    'aria-valuenow': progress.now,
    'aria-valuemin': progress.min,
    'aria-valuemax': progress.max,
  };
}

export default Loader;
