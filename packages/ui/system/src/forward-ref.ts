import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefRenderFunction,
  forwardRef as ReactForwardRef,
} from 'react';
import {
  type ComponentWithPolymorphic,
  type PolymorphicProps,
  type RightJoinProps,
} from './types';

export function forwardRef<Props extends object, Component extends ElementType>(
  render: ForwardRefRenderFunction<
    any,
    PolymorphicProps &
      RightJoinProps<ComponentPropsWithoutRef<Component>, Props>
  >,
) {
  return ReactForwardRef(render) as unknown as ComponentWithPolymorphic<
    Component,
    Props
  >;
}
