import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './link-styles.css';

export type LinkProps = HTMLFavolinkProps<'a'> &
  styles.LinkVariants & {
    isExternal?: boolean;
  };

export const Link = forwardRef<LinkProps, 'a'>(function Link(props, ref) {
  const {
    children,
    className,
    color,
    isExternal = false,
    ...restProps
  } = props;

  return (
    <favolink.a
      {...restProps}
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className={cx('favolink-link', styles.link({ color }), className)}
    >
      {children}
    </favolink.a>
  );
});
