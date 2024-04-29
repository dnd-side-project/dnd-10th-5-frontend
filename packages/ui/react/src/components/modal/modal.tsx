import { type ReactNode } from 'react';
import {
  type ModalContextDefaultValue,
  ModalContextProvider,
} from './modal.context';
import { Portal } from '../portal';

type ModalProps = ModalContextDefaultValue & {
  children: ReactNode;
  isOpen: boolean;
};

export function Modal(props: ModalProps) {
  const { children, ...restProps } = props;
  const { isOpen, ...realRestProps } = restProps;

  return (
    <ModalContextProvider value={realRestProps}>
      {isOpen && <Portal type="modal">{children}</Portal>}
    </ModalContextProvider>
  );
}
