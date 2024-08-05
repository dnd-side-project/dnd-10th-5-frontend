import { useEffect, useLayoutEffect as useReactLayoutEffect } from 'react';

export const useLayoutEffect =
  typeof globalThis?.document !== 'undefined'
    ? useReactLayoutEffect
    : useEffect;
