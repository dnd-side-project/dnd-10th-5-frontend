import { createContext } from '@favolink-ui/system';
import { type Ref } from 'react';

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
