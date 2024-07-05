import { Children } from 'react';
import { useModalContext } from './modal.context';
import { Portal, type PortalProps } from '../portal/';

export type ModalPortalProps = PortalProps;

export function ModalPortal(props: ModalPortalProps) {
  const { children, ...restProps } = props;

  const { onOpen } = useModalContext();

  return (
    onOpen &&
    Children.map(children, (child) => {
      return (
        <Portal {...restProps} asChild>
          {child}
        </Portal>
      );
    })
  );
}
