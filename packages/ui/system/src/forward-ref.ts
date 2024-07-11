import {
  type ElementRef,
  type ElementType,
  type ForwardRefRenderFunction,
  forwardRef as ReactForwardRef,
} from 'react';

export function forwardRef<Props extends object, Component extends ElementType>(
  render: ForwardRefRenderFunction<ElementRef<Component>, Props>,
) {
  return ReactForwardRef(render);
}
