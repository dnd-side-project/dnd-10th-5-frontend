import { type ReactNode } from 'react';
import { type ModalContextDefaultValue, ModalProvider } from './modal.context';
import { Portal } from '../portal';

type ModalProps = ModalContextDefaultValue & {
  children: ReactNode;
  isOpen: boolean;
};

export function Modal(props: ModalProps) {
  const { children, ...restProps } = props;
  const { isOpen, ..._restProps } = restProps;

  return (
    <ModalProvider value={_restProps}>
      {isOpen && <Portal type="modal">{children}</Portal>}
    </ModalProvider>
  );
}
