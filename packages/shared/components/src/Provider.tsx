import { type ReactNode } from 'react';
import { ToastProvider } from './Toast';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
