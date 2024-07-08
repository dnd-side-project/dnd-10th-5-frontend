import { type ReactNode, useRef, useState } from 'react';
import { MenuProvider } from './menu.context';

export type MenuProps = {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Menu(props: MenuProps) {
  const {
    children,
    open: onExternalOpen,
    onOpenChange: onExternalOnOpenChange,
  } = props;

  const [onInternalOpen, onInternalOnOpenChange] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const open = onExternalOpen ?? onInternalOpen;
  const onOpenChange = onExternalOnOpenChange ?? onInternalOnOpenChange;

  return (
    <MenuProvider value={{ open, onOpenChange, triggerRef, containerRef }}>
      {children}
    </MenuProvider>
  );
}
