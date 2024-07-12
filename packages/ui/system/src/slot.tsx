import { composeRefs, mergeProps } from '@favolink-ui/utils';
import {
  Children,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type Ref,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { Slottable, type SlottableProps } from './slottable';

function isSlottable(child: ReactNode): child is ReactElement<SlottableProps> {
  return isValidElement(child) && child.type === Slottable;
}

type ReactElementWithRef = ReactElement & { ref: Ref<HTMLElement> };

type SlotCloneProps = HTMLAttributes<HTMLElement> & {
  children: ReactElementWithRef;
};

const SlotClone = forwardRef<HTMLElement, SlotCloneProps>(
  function SlotClone(props, forwardedRef) {
    const { children, ...slotProps } = props;

    return isValidElement(children)
      ? cloneElement(children, {
          ...mergeProps(slotProps, children.props),
          ref: forwardedRef
            ? composeRefs(forwardedRef, children.ref)
            : children.ref,
        })
      : null;
  },
);

type SlotProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const Slot = forwardRef<HTMLElement, SlotProps>(
  function Slot(props, forwardedRef) {
    const { children, ...slotProps } = props;

    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);

    if (slottable) {
      const newElement = slottable.props.children;

      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (Children.count(newElement) > 1) {
            return Children.only(null);
          }

          return isValidElement<{ children: ReactNode }>(newElement)
            ? newElement.props.children
            : null;
        } else {
          return child;
        }
      });

      return isValidElement(newElement) ? (
        <SlotClone {...slotProps} ref={forwardedRef}>
          {
            cloneElement(
              newElement,
              undefined,
              newChildren,
            ) as ReactElementWithRef
          }
        </SlotClone>
      ) : null;
    }

    const onlyChild = Children.only(children);

    return (
      <SlotClone {...slotProps} ref={forwardedRef}>
        {onlyChild as ReactElementWithRef}
      </SlotClone>
    );
  },
);
