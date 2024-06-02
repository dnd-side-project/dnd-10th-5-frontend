import { createContext } from '@favolink-ui/system';

export type ModalContextDefaultValue = {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
};

export const [ModalProvider, useModalContext] =
  createContext<ModalContextDefaultValue>({
    name: 'ModalContext',
    hookName: 'useModalContext',
    providerName: '<ModalProvider />',
  });
