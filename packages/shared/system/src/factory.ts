import {
  type FavolinkComponent,
  type HTMLFavolinkComponents,
  createComponent,
} from './createComponent';
import { type DOMElements } from './types';

type FavolinkFactory = {
  <Element extends DOMElements>(element: Element): FavolinkComponent<Element>;
};

function factory() {
  const cache = new Map<DOMElements, FavolinkComponent<DOMElements>>();

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
