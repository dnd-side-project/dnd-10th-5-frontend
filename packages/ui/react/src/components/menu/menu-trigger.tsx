import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { composeRefs, cx, mergeFns } from '@favolink-ui/utils';
import { useMenuContext } from './menu.context';

export type MenuTriggerProps = HTMLFavolinkProps<'button'>;

export const MenuTrigger = forwardRef<MenuTriggerProps, 'button'>(
  function MenuTrigger(props, ref) {
    const { children, className, onClick, ...restProps } = props;

    const context = useMenuContext();

    return (
      <favolink.button
        {...restProps}
        ref={composeRefs(ref, context.triggerRef)}
        className={cx('favolink-menu__trigger', className)}
        onClick={mergeFns(() => {
          context.onOpenChange(!context.open);
        }, onClick)}
      >
        {children}
      </favolink.button>
    );
  },
);
