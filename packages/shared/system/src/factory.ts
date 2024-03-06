import { type ElementType } from 'react';
import createComponent, {
  type FavolinkComponent,
  type HTMLFavolinkComponents,
} from './createComponent';
import { type DOMElements } from './types';

type FavolinkFactory = {
  <Element extends ElementType, Props extends object>(
    element: Element,
  ): FavolinkComponent<Element, Props>;
};

function factory() {
  const cache = new Map<DOMElements, FavolinkComponent<DOMElements, object>>();

  return new Proxy(createComponent, {
    apply: (_, __, options: [DOMElements]) => {
      return createComponent(...options);
    },
    get: (_, element: DOMElements) => {
      if (!cache.get(element)) {
        cache.set(element, createComponent(element));
      }

      return cache.get(element);
    },
  }) as FavolinkFactory & HTMLFavolinkComponents;
}

export const favolink = factory();
