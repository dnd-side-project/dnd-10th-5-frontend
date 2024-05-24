import { type ElementType } from 'react';
import {
  type FavolinkComponent,
  type HTMLFavolinkComponents,
  createComponent,
} from './create-component';
import { type JsxElements } from './types';

export type FavolinkFactory = {
  <Component extends ElementType>(
    component: Component,
  ): FavolinkComponent<Component>;
};

export type FavolinkFactoryFn = FavolinkFactory & HTMLFavolinkComponents;

function factory() {
  const cache = new Map<JsxElements, FavolinkComponent<JsxElements>>();

  return new Proxy(createComponent, {
    apply: (_, __, options: [ElementType]) => {
      return createComponent(...options);
    },
    get: (_, element: JsxElements) => {
      if (!cache.get(element)) {
        cache.set(element, createComponent(element));
      }

      return cache.get(element);
    },
  });
}

export const favolink = factory() as FavolinkFactoryFn;
