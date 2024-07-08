import { cx } from '@favolink-ui/utils';
import { Portal, type PortalProps } from '../portal';

export type MenuPortalProps = PortalProps;

export function MenuPortal(props: PortalProps) {
  const { children, className, ...restProps } = props;

  return (
    <Portal {...restProps} className={cx('favolink-menu__portal', className)}>
      {children}
    </Portal>
  );
}
