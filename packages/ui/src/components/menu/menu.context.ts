import { type Ref } from 'react';
import { createContext } from '../../system';

type MenuContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: Ref<HTMLButtonElement>;
  containerRef: Ref<HTMLDivElement>;
};

export const [MenuProvider, useMenuContext] = createContext<MenuContextValue>({
  name: 'MenuContentContext',
  hookName: 'useMenuContentContext',
  providerName: '<MenuContentProvider />',
});
