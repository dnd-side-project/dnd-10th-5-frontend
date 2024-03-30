import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './link-styles.css';

export type LinkProps = HTMLFavolinkProps<'a'> & {
  isExternal?: boolean;
  color?: styles.LinkColor;
};

export const Link = forwardRef<LinkProps, 'a'>(function Link(props, ref) {
  const {
    children,
    className,
    color = 'black',
    isExternal = false,
    ...restProps
  } = props;

  return (
    <favolink.a
      {...restProps}
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      className={classNames(
        'favolink-link',
        styles.linkBase,
        styles.linkColor[color],
        className,
      )}
    >
      {children}
    </favolink.a>
  );
});
