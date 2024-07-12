import {
  type FavolinkComponents,
  type HTMLFavolinkProps,
  type JsxElements,
} from './factory';
import { forwardRef } from './forward-ref';
import { Slot } from './slot';

export function withAsChild<E extends JsxElements>(element: E) {
  const FavolinkComponent = forwardRef<HTMLFavolinkProps<E>, E>(
    function FavolinkComponent(props, forwardedRef) {
      const { asChild, ...restProps } = props;

      const Comp: any = asChild ? Slot : element;

      return <Comp ref={forwardedRef} {...restProps} />;
    },
  );

  return FavolinkComponent as FavolinkComponents[E];
}
