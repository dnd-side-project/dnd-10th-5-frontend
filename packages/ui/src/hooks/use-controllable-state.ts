import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useCallbackRef } from './use-callback-ref';

type UseControllableStateProps<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  shouldUpdate?: (prev: T, next: T) => boolean;
};

type SetStateFn<T> = (prevState?: T) => T;

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange = () => {},
    shouldUpdate = (prev, next) => prev !== next,
  } = props;

  const handleChange = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue as T);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (next) => {
      const setter = next as SetStateFn<T>;
      const nextValue = typeof next === 'function' ? setter(value) : next;

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }

      handleChange(nextValue);
    },
    [handleChange, isControlled, shouldUpdateProp, value],
  );

  return [value, setValue] as const;
}
