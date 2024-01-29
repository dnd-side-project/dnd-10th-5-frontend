'use client';

import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export function Button({ children, className, appName }: ButtonProps) {
  return (
    <button
      className={className}
      onClick={() => {
        alert(`Hello from your ${appName} app!`);
      }}
    >
      {children}
    </button>
  );
}
