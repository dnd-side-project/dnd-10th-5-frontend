import { type ElementType } from 'react';
import {
  type FavolinkComponent,
  type HTMLFavolinkComponents,
  createPolymorphicComponent,
} from './create-polymorphic-component';
import { type JsxElements } from './types';

export type FavolinkFactory = {
  <Component extends ElementType>(
    component: Component,
  ): FavolinkComponent<Component>;
};

export type FavolinkFactoryFn = FavolinkFactory & HTMLFavolinkComponents;

function factory() {
  const cache = new Map<JsxElements, FavolinkComponent<JsxElements>>();

  return new Proxy(createPolymorphicComponent, {
    apply: (_, __, options: [ElementType]) => {
      return createPolymorphicComponent(...options);
    },
    get: (_, element: JsxElements) => {
      if (!cache.get(element)) {
        cache.set(element, createPolymorphicComponent(element));
      }

      return cache.get(element);
    },
  });
}

export const favolink = factory() as FavolinkFactoryFn;
