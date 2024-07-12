import {
  type ElementRef,
  type ElementType,
  type ForwardRefRenderFunction,
  forwardRef as ReactForwardRef,
} from 'react';

export function forwardRef<P extends object, E extends ElementType>(
  render: ForwardRefRenderFunction<ElementRef<E>, P>,
) {
  return ReactForwardRef(render);
}
