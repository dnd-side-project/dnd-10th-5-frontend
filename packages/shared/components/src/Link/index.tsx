import { favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import { type ComponentPropsWithoutRef } from 'react';
import * as styles from './styles.css';

const LINK_CLASSNAME = 'favolink-link';

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  isExternal?: boolean;
  color?: styles.Color;
};

const Link = forwardRef<LinkProps, 'a'>(function Link(props, ref) {
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
        LINK_CLASSNAME,
        styles.base,
        styles.color[color],
        className,
      )}
    >
      {children}
    </favolink.a>
  );
});

export default Link;
