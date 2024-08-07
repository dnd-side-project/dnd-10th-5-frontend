import { createPortal } from 'react-dom';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type PortalProps = HTMLFavolinkProps<'div'> & {
  container?: HTMLElement;
};

export const Portal = forwardRef<PortalProps, 'div'>(
  function Portal(props, ref) {
    const { container = globalThis.document.body, ...restProps } = props;

    return createPortal(
      <favolink.div {...restProps} ref={ref} className="favolink-portal" />,
      container,
    );
  },
);
