export interface FavolinkStoreObserver<T> {
  getState: () => T;
  setState: (next: SetStateAction<T>) => void;
  subscribe: (listener: () => void) => () => void;
}

type SetStateFn<T> = (prevState: T) => T;

type SetStateAction<T> = SetStateFn<T> | T;

export class FavolinkStore<T> implements FavolinkStoreObserver<T> {
  private state: T;
  private listeners: Set<() => void>;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = new Set();
  }

  getState = () => {
    return this.state;
  };

  setState = (next: SetStateAction<T>) => {
    const setter = next as SetStateFn<T>;
    const nextState = typeof next === 'function' ? setter(this.state) : next;

    if (this.state === nextState) {
      return;
    }

    this.state = nextState;
    this.listeners.forEach((listener) => {
      listener();
    });
  };

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  };
}

export function createFavolinkStore<T>(initialState: T) {
  return new FavolinkStore(initialState);
}
