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

    const context = useMenuContext();

    const coordinate = usePosition(
      context.open,
      context.triggerRef,
      context.containerRef,
      placement,
      sideOffset,
    );

    return (
      context.open && (
        <favolink.div
          {...restProps}
          ref={composeRefs(ref, context.containerRef)}
          className={cx(
            `favolink-menu__content`,
            styles.contentBase,
            className,
          )}
          style={{ ...coordinate, ...style }}
        >
          {children}
        </favolink.div>
      )
    );
  },
);
