import { type Placement, usePosition } from '@favolink-ui/hooks';
import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { composeRefs, cx } from '@favolink-ui/utils';
import * as styles from './menu-content.styles.css';
import { useMenuContext } from './menu.context';

export type MenuContentProps = HTMLFavolinkProps<'div'> & {
  placement?: Placement;
  sideOffset?: number;
};

export const MenuContent = forwardRef<MenuContentProps, 'div'>(
  function MenuContent(props, ref) {
    const {
      children,
      className,
      placement = 'bottom',
      sideOffset = 0,
      style,
      ...restProps
    } = props;

    const { open, triggerRef, containerRef } = useMenuContext();

    const coordinate = usePosition(
      triggerRef,
      containerRef,
      placement,
      sideOffset,
    );

    return (
      <favolink.div
        {...restProps}
        ref={composeRefs(ref, containerRef)}
        className={cx(
          `favolink-menu__list`,
          styles.baseList,
          styles.listContainerisVisibility[open ? 'true' : 'false'],
          className,
        )}
        style={{ ...coordinate, ...style }}
      >
        {children}
      </favolink.div>
    );
  },
);
