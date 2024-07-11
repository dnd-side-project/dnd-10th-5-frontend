import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefExoticComponent,
} from 'react';
import { withAsChild } from './with-as-child';

export type JsxElements = keyof JSX.IntrinsicElements;

export type FavolinkPropsWithRef<T extends ElementType> =
  ComponentPropsWithRef<T> & {
    asChild?: boolean;
  };

type FavolinkForwardRefComponent<T extends ElementType> =
  ForwardRefExoticComponent<FavolinkPropsWithRef<T>>;

export type FavolinkComponents = {
  [Tag in JsxElements]: FavolinkForwardRefComponent<Tag>;
};

export type HTMLFavolinkProps<T extends JsxElements> =
  ComponentPropsWithoutRef<T> & { asChild?: boolean };

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
