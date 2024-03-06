import { type ReactNode } from 'react';
import Toast from './Toast';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toast.Provider />
    </>
  );
}
