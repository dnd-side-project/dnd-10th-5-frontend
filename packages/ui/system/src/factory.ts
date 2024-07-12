import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefExoticComponent,
} from 'react';
import { withAsChild } from './with-as-child';

export type JsxElements = keyof JSX.IntrinsicElements;

export type FavolinkPropsWithRef<E extends ElementType> =
  ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

type FavolinkForwardRefComponent<E extends ElementType> =
  ForwardRefExoticComponent<FavolinkPropsWithRef<E>>;

export type FavolinkComponents = {
  [E in JsxElements]: FavolinkForwardRefComponent<E>;
};

export type HTMLProps<E extends JsxElements> = ComponentPropsWithoutRef<E>;

export type HTMLFavolinkProps<E extends JsxElements> = HTMLProps<E> & {
  asChild?: boolean;
};

function factory() {
  const cache = new Map<JsxElements, FavolinkComponents[JsxElements]>();

  return new Proxy(withAsChild, {
    get: (_, element: JsxElements) => {
      if (!cache.get(element)) {
        cache.set(element, withAsChild(element));
      }

      return cache.get(element);
    },
  });
}

export const favolink = factory() as unknown as FavolinkComponents;
