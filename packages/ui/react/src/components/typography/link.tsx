import * as styles from './link.css';
import { Text, type TextProps } from './text';
import {
  type HTMLFavolinkProps,
  type RightJoinProps,
  forwardRef,
} from '../../system';
import { cx } from '../../utils';

export type LinkProps = RightJoinProps<
  Omit<TextProps, 'as'>,
  Omit<HTMLFavolinkProps<'a'>, 'color'>
> &
  styles.LinkVariants;

export const Link = forwardRef<LinkProps, 'a'>(
  function Link(props, forwardedRef) {
    const { children, className, asChild, underline, ...restProps } = props;

    return (
      <Text
        {...restProps}
        ref={forwardedRef}
        asChild
        className={cx(
          'favolink-link',
          styles.linkVariants({ underline }),
          className,
        )}
      >
        {asChild ? children : <a>{children}</a>}
      </Text>
    );
  },
);
