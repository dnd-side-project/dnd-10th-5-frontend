import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefRenderFunction,
  forwardRef as ReactForwardRef,
} from 'react';
import { type ComponentWithAs, type RightJoinProps } from './types';

export default function forwardRef<
  Props extends object,
  Component extends ElementType,
>(
  render: ForwardRefRenderFunction<
    any,
    RightJoinProps<ComponentPropsWithoutRef<Component>, Props> & {
      as?: ElementType;
    }
  >,
) {
  return ReactForwardRef(render) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
