import { createElement } from 'react';
import forwardRef from './forwardRef';
import { type ComponentWithAs, type DOMElements } from './types';

export type FavolinkComponent<Element extends DOMElements> = ComponentWithAs<
  Element,
  object
>;

export default function createComponent<Element extends DOMElements>(
  element: Element,
) {
  const favolinkComponent = forwardRef(function favolinkComponent(props, ref) {
    const { as: asComponent, ...restProps } = props;

    return createElement(asComponent ? asComponent : element, {
      ref,
      ...restProps,
    });
  });

  return favolinkComponent as FavolinkComponent<Element>;
}

export type HTMLFavolinkComponents = {
  [Element in DOMElements]: FavolinkComponent<Element>;
};
