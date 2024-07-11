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

type SlotProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

function isSlottable(child: ReactNode): child is ReactElement<SlottableProps> {
  return isValidElement(child) && child.type === Slottable;
}

export const Slot = forwardRef<HTMLElement, SlotProps>(
  function Slot(props, ref) {
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
              ...mergeProps(slotProps, newElement.props),
              ref: ref
                ? composeRefs(
                    ref,
                    (
                      newElement as ReactElement & {
                        ref: Ref<HTMLElement>;
                      }
                    ).ref,
                  )
                : (newElement as ReactElement & { ref: Ref<HTMLElement> }).ref,
            },
            newChildren,
          )
        : null;
    }

    const onlyChild = Children.only(children) as ReactNode & {
      ref: Ref<HTMLElement>;
    };

    return isValidElement(onlyChild)
      ? cloneElement(onlyChild, {
          ...mergeProps(slotProps, onlyChild.props),
          ref: ref ? composeRefs(ref, onlyChild.ref) : onlyChild.ref,
        })
      : null;
  },
);
