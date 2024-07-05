import { type ReactNode, useState } from 'react';
import { type ModalContextValue, ModalProvider } from './modal.context';

export type ModalProps = Partial<ModalContextValue> & {
  children: ReactNode;
};

export function Modal(props: ModalProps) {
  const {
    children,
    closeOnOverlayClick = false,
    onOpen: onExternalOpen,
    onOpenChange: onExternalOpenChanage,
  } = props;

  const [onInternalOpen, onInternalOpenChange] = useState(false);

  const onOpen = onExternalOpen ?? onInternalOpen;
  const onOpenChange = onExternalOpenChanage ?? onInternalOpenChange;

  return (
    <ModalProvider
      value={{
        onOpen,
        onOpenChange,
        closeOnOverlayClick,
      }}
    >
      {children}
    </ModalProvider>
  );
}
