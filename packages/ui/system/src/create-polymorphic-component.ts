import { composeRefs, mergeProps } from '@favolink-ui/utils';
import {
  Children,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
  type Ref,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import { forwardRef } from './forward-ref';
import { Slottable, type SlottableProps } from './slottable';
import {
  type ComponentWithPolymorphic,
  type JsxElements,
  type PolymorphicProps,
} from './types';

export function isSlottable(
  child: ReactNode,
): child is ReactElement<SlottableProps> {
  return isValidElement(child) && child.type === Slottable;
}

export type FavolinkComponent<Component extends ElementType> =
  ComponentWithPolymorphic<Component, object>;

export function createPolymorphicComponent<Component extends ElementType>(
  component: Component,
) {
  const favolinkComponent = forwardRef<object, Component>(
    function favolinkComponent(props, ref) {
      const { as: asElement, asChild, children, ...restProps } = props;

      if (!asChild) {
        return createElement(
          asElement ?? component,
          {
            ref,
            ...restProps,
          },
          children,
        );
      }

      const childrenArray = Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);

      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (Children.count(newElement) > 1) {
              return Children.only(null);
            }

            return isValidElement(newElement)
              ? ((newElement as ReactElement<{ children: ReactNode }>).props
                  .children as ReactNode)
              : null;
          } else {
            return child;
          }
        });

        return isValidElement(newElement)
          ? cloneElement(
              newElement as ReactElement,
              {
                ...mergeProps(restProps, newElement.props),
                ref: ref
                  ? composeRefs(
                      ref,
                      (newElement as ReactElement & { ref: Ref<any> }).ref,
                    )
                  : (newElement as ReactElement & { ref: Ref<any> }).ref,
              },
              newChildren,
            )
          : null;
      }

      const onlyChild = Children.only(children);

      return isValidElement(onlyChild)
        ? cloneElement(onlyChild, {
            ...mergeProps(restProps, onlyChild.props),
            ref: ref
              ? composeRefs(ref, onlyChild.ref as Ref<any>)
              : (onlyChild.ref as Ref<any>),
          })
        : null;
    },
  );

  return favolinkComponent as FavolinkComponent<Component>;
}

export type HTMLFavolinkComponents = {
  [Element in JsxElements]: FavolinkComponent<Element>;
};

export type HTMLFavolinkProps<Element extends JsxElements> =
  ComponentPropsWithoutRef<Element> & PolymorphicProps;
