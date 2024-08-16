export interface FavolinkStoreObserver<T> {
  getState: () => T;
  setState: (next: SetStateAction<T>) => void;
  subscribe: (listener: () => void) => () => void;
  emitChange: () => void;
}

type SetStateFn<T> = (prevState: T) => T;

type SetStateAction<T> = SetStateFn<T> | T;

export class FavolinkStore<T> implements FavolinkStoreObserver<T> {
  private state: T;
  private listeners: (() => void)[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState = () => {
    return this.state;
  };

  setState = (next: SetStateAction<T>) => {
    const setter = next as SetStateFn<T>;
    const nextValue = typeof next === 'function' ? setter(this.state) : next;

    if (this.state === nextValue) {
      return;
    }

    this.state = nextValue;
    this.emitChange();
  };

  subscribe = (listener: () => void) => {
    this.listeners = [...this.listeners, listener];

    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  };

  emitChange = () => {
    this.listeners.forEach((listener) => {
      listener();
    });
  };
}

export function createFavolinkStore<T>(initialState: T) {
  return new FavolinkStore(initialState);
}
