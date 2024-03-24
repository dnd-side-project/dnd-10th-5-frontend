import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './styles.css';

const TEXT_CLASSNAME = 'favolink-text';

export type TextProps = HTMLFavolinkProps<'p'> & {
  scale?: styles.Scale;
};

export const Text = forwardRef<TextProps, 'p'>(function Text(props, ref) {
  const { children, className, scale = '2regular', ...restProps } = props;

  return (
    <favolink.p
      {...restProps}
      ref={ref}
      className={classNames(TEXT_CLASSNAME, styles.scale[scale], className)}
    >
      {children}
    </favolink.p>
  );
});
