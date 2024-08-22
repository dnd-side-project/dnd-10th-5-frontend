import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useCallbackRef } from './use-callback-ref';

type UseControllableStateProps<T> = {
  prop?: T;
  defaultProp?: T;
  onChange?: (state: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { prop, defaultProp, onChange = () => {} } = props;

  const [uncontrolledProp, setUncontrolledProp] = useState<T | undefined>(
    defaultProp,
  );
  const isControlled = prop !== undefined;
  const state = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);

  const setState: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (next) => {
      const setter = next as SetStateFn<T>;
      const nextState = typeof next === 'function' ? setter(state) : next;

      if (state === nextState) return;

      if (!isControlled) setUncontrolledProp(nextState);

      handleChange(nextState as T);
    },
    [handleChange, isControlled, state],
  );

  return [state, setState] as const;
}
