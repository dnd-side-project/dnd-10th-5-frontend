import { composeRefs, mergeProps } from '@favolink-ui/utils';
import {
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  type Ref,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import { forwardRef } from './forward-ref';
import {
  type ComponentWithPolymorphic,
  type JsxElements,
  type PolymorphicProps,
} from './types';

export type FavolinkComponent<Component extends ElementType> =
  ComponentWithPolymorphic<Component, object>;

export function createPolymorphicComponent<Component extends ElementType>(
  component: Component,
) {
  const favolinkComponent = forwardRef<object, Component>(
    function favolinkComponent(props, ref) {
      const { as: asElement, asChild, children, ...restProps } = props;

      if (!asChild) {
        return createElement(
          asElement ?? component,
          {
            ref,
            ...restProps,
          },
          children,
        );
      }

      const onlyChild = Children.only(children);

      return isValidElement(onlyChild)
        ? cloneElement(onlyChild, {
            ...mergeProps(restProps, onlyChild.props),
            ref: ref
              ? composeRefs(ref, onlyChild.ref as Ref<any>)
              : (onlyChild.ref as Ref<any>),
          })
        : null;
    },
  );

  return favolinkComponent as FavolinkComponent<Component>;
}

export type HTMLFavolinkComponents = {
  [Element in JsxElements]: FavolinkComponent<Element>;
};

export type HTMLFavolinkProps<Element extends JsxElements> =
  ComponentPropsWithoutRef<Element> & PolymorphicProps;
