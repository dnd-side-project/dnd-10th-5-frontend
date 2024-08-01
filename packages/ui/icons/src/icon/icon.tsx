import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '../../../react/src/system';
import { cx } from '../../../react/src/utils';

export type IconProps = HTMLFavolinkProps<'svg'>;

export const Icon = forwardRef<IconProps, 'svg'>(function Icon(props, ref) {
  const { children, className, ...restProps } = props;

  return (
    <favolink.svg
      ref={ref}
      className={cx('favolink-icon', className)}
      {...restProps}
    >
      {children}
    </favolink.svg>
  );
});
