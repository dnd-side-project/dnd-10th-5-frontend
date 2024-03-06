import { type ElementType, createElement } from 'react';
import forwardRef from './forwardRef';
import { type ComponentWithAs, type DOMElements } from './types';

export type FavolinkComponent<
  Element extends ElementType,
  Props extends object,
> = ComponentWithAs<Element, Props>;

export default function createComponent<
  Element extends ElementType,
  Props extends object,
>(element: Element) {
  const favolinkComponent = forwardRef(function favolinkComponent(props, ref) {
    const { as: asComponent, ...restProps } = props;

    return createElement(asComponent ? asComponent : element, {
      ref,
      ...restProps,
    });
  });

  return favolinkComponent as FavolinkComponent<Element, Props>;
}

export type HTMLFavolinkComponents = {
  [Tag in DOMElements]: FavolinkComponent<Tag, object>;
};
