import { composeRefs, mergeProps } from '@favolink-ui/utils';
import {
  Children,
  type ElementRef,
  type ReactElement,
  type ReactNode,
  type Ref,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import {
  type FavolinkComponents,
  type FavolinkPropsWithRef,
  type JsxElements,
} from './factory';
import { forwardRef } from './forward-ref';
import { Slottable, type SlottableProps } from './slottable';

function isSlottable(child: ReactNode): child is ReactElement<SlottableProps> {
  return isValidElement(child) && child.type === Slottable;
}

export function withAsChild<Tag extends JsxElements>(Component: Tag) {
  type HTMLTagElement = ElementRef<Tag>;

  const FavolinkComponent = forwardRef<FavolinkPropsWithRef<Tag>, any>(
    function FavolinkComponent(props, ref) {
      const { asChild, children, ...restProps } = props;

      if (!asChild) {
        return createElement(
          Component,
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
                      (
                        newElement as ReactElement & {
                          ref: Ref<HTMLTagElement>;
                        }
                      ).ref,
                    )
                  : (newElement as ReactElement & { ref: Ref<HTMLTagElement> })
                      .ref,
              },
              newChildren,
            )
          : null;
      }

      const onlyChild = Children.only(children) as ReactNode & {
        ref: Ref<HTMLTagElement>;
      };

      return isValidElement(onlyChild)
        ? cloneElement(onlyChild, {
            ...mergeProps(restProps, onlyChild.props),
            ref: ref ? composeRefs(ref, onlyChild.ref) : onlyChild.ref,
          })
        : null;
    },
  );

  return FavolinkComponent as FavolinkComponents[Tag];
}
