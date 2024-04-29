import {
  type ComponentPropsWithoutRef,
  type ElementType,
  createElement,
} from 'react';
import { forwardRef } from './forward-ref';
import { type ComponentWithAs, type DOMElements } from './types';

export type FavolinkComponent<Element extends DOMElements> = ComponentWithAs<
  Element,
  object
>;

export function createComponent<Element extends DOMElements>(element: Element) {
  const favolinkComponent = forwardRef(function favolinkComponent(props, ref) {
    const { as: asElement, ...restProps } = props;

    return createElement(asElement ?? element, {
      ref,
      ...restProps,
    });
  });

  return favolinkComponent as FavolinkComponent<Element>;
}

export type HTMLFavolinkComponents = {
  [Element in DOMElements]: FavolinkComponent<Element>;
};

export type HTMLFavolinkProps<Element extends DOMElements> =
  ComponentPropsWithoutRef<Element> & { as?: ElementType };
