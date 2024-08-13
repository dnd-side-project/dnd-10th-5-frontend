import {
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardRefExoticComponent,
} from 'react';
import { forwardRef } from './forward-ref';
import { Slot } from './slot';

type JsxElements = keyof JSX.IntrinsicElements;

type AsChildProp = {
  asChild?: boolean;
};

type FavolinkPropsWithRef<E extends ElementType> = AsChildProp &
  ComponentPropsWithRef<E>;

type FavolinkForwardRefComponent<E extends ElementType> =
  ForwardRefExoticComponent<FavolinkPropsWithRef<E>>;

type FavolinkComponents = {
  [E in JsxElements]: FavolinkForwardRefComponent<E>;
};

export type HTMLProps<E extends JsxElements> = ComponentPropsWithoutRef<E>;

export type HTMLFavolinkProps<E extends JsxElements> = AsChildProp &
  HTMLProps<E>;

export type HTMLFavolinkPropsWithout<
  E extends JsxElements,
  O extends
    | Omit<string, keyof HTMLFavolinkProps<E>>
    | keyof HTMLFavolinkProps<E>,
> = Omit<HTMLFavolinkProps<E>, O & string>;

export type ComponentPropsWithout<
  T extends ElementType,
  O extends
    | Omit<string, keyof ComponentPropsWithoutRef<T>>
    | keyof ComponentPropsWithoutRef<T>,
> = Omit<ComponentPropsWithoutRef<T>, O & string>;

export type RemovedProps = 'color' | 'defaultChecked' | 'defaultValue';

export type RightJoinProps<T extends object, O extends object> = O &
  Omit<T, keyof O>;

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

function withAsChild<E extends JsxElements>(element: E) {
  const FavolinkComponent = forwardRef<HTMLFavolinkProps<E>, E>(
    function FavolinkComponent(props, forwardedRef) {
      const { asChild, ...restProps } = props;

      const Comp: any = asChild ? Slot : element;

      return <Comp ref={forwardedRef} {...restProps} />;
    },
  );

  FavolinkComponent.displayName = `Favolink.${element}`;

  return FavolinkComponent as FavolinkComponents[E];
}
