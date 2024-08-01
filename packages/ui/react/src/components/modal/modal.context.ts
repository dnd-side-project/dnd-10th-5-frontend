import { createContext } from '../../system';

export type ModalContextValue = {
  closeOnOverlayClick: boolean;
  onOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const [ModalProvider, useModalContext] =
  createContext<ModalContextValue>({
    name: 'ModalContext',
    hookName: 'useModalContext',
    providerName: '<ModalProvider />',
  });
