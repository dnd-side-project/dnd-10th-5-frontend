import { useMenuContext } from './menu.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { composeRefs, cx, mergeFns } from '../../utils';

const TRIGGER_NAME = 'MenuTrigger';

export type MenuTriggerProps = HTMLFavolinkProps<'button'>;

export const MenuTrigger = forwardRef<MenuTriggerProps, 'button'>(
  function MenuTrigger(props, ref) {
    const { children, className, onClick, ...restProps } = props;

    const context = useMenuContext(TRIGGER_NAME);

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

MenuTrigger.displayName = TRIGGER_NAME;
