import * as Styles from './checkbox.css';
import * as CheckboxPrimitive from './checkbox.primitive';
import { CheckIcon } from '../../icons';
import { type ComponentPropsWithout, forwardRef } from '../../system';
import { cx } from '../../utils';
import { type MarginVariants, extractMarginProps } from '../margin';

export type CheckboxProps = ComponentPropsWithout<
  typeof CheckboxPrimitive.Root,
  'asChild' | 'children' | 'color' | 'defaultValue'
> &
  MarginVariants &
  Styles.CheckboxVariants;

export const Checkbox = forwardRef<
  CheckboxProps,
  typeof CheckboxPrimitive.Root
>(function Checkbox(props, forwardedRef) {
  const { className, color, borderColor, size, ...restProps } =
    extractMarginProps(props);

  return (
    <CheckboxPrimitive.Root
      data-accent-color={color ?? 'black'}
      data-border-color={borderColor ?? 'gray700'}
      {...restProps}
      asChild={false}
      ref={forwardedRef}
      className={cx(
        'favolink-checkbox',
        Styles.checkboxVariants({ color, borderColor, size }),
        className,
      )}
    >
      <CheckboxPrimitive.Indicator asChild className={Styles.icon}>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = 'Checkbox';
