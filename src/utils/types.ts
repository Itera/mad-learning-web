import { ReactNode } from 'react';

export type ReactComponent<P extends object> = (props: P) => JSX.Element;
