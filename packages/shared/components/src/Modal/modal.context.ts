import { createContext } from '@favolink/system';

export type ModalContextDefaultValue = {
  onClose: () => void;
  closeOnOverlayClick?: boolean;
};

export const [ModalContextProvider, useModalContext] =
  createContext<ModalContextDefaultValue>({
    onClose: () => {},
    closeOnOverlayClick: false,
  });
