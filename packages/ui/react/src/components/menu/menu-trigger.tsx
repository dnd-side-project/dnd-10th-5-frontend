import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { composeRefs, mergeFns } from '@favolink-ui/utils';
import { useMenuContext } from './menu.context';

export type MenuTriggerProps = HTMLFavolinkProps<'button'>;

export const MenuTrigger = forwardRef<MenuTriggerProps, 'button'>(
  function MenuTrigger(props, ref) {
    const { children, onClick, ...restProps } = props;

    const { triggerRef, onOpenChange, open } = useMenuContext();

    return (
      <favolink.button
        {...restProps}
        ref={composeRefs(ref, triggerRef)}
        onClick={mergeFns(() => {
          onOpenChange(!open);
        }, onClick)}
      >
        {children}
      </favolink.button>
    );
  },
);
