import { useState } from 'react';

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const callbacks = {
    on: () => {
      setValue(true);
    },
    off: () => {
      setValue(false);
    },
    toggle: () => {
      setValue((prevValue) => !prevValue);
    },
  };

  return [value, callbacks] as const;
}
