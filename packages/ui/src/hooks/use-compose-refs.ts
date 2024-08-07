import { type Ref, useCallback } from 'react';
import { composeRefs } from '../utils';

export function useComposeRefs<T>(...refs: Ref<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(composeRefs(...refs), refs);
}
