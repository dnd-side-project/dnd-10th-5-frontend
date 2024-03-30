import { type ReactNode } from 'react';
import { ToastProvider } from '../toast';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
