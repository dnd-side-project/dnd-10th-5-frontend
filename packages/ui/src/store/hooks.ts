import { useSyncExternalStore } from 'react';
import { type FavolinkStoreObserver } from './store';

export function useFavolinkStore<T>(store: FavolinkStoreObserver<T>) {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState,
  );

  return [state, store.setState] as const;
}

export function useFavolinkStoreValue<T>(store: FavolinkStoreObserver<T>) {
  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState,
  );

  return state;
}

export function useSetFavolinkStore<T>(store: FavolinkStoreObserver<T>) {
  return store.setState;
}
