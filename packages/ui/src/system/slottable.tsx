import { type ReactNode } from 'react';

export type SlottableProps = {
  children: ReactNode;
};

export function Slottable(props: SlottableProps) {
  const { children } = props;

  return children;
}
