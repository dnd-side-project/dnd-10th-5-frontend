import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';

export type IconProps = HTMLFavolinkProps<'svg'>;

export const Icon = forwardRef<IconProps, 'svg'>(function Icon(props, ref) {
  const { as: element, children, className, ...restProps } = props;

  const sharedProps = {
    ref,
    className: cx('favolink-icon', className),
  };

  if (element && typeof element !== 'string') {
    return <favolink.svg as={element} {...sharedProps} {...restProps} />;
  }

  return (
    <favolink.svg {...sharedProps} {...restProps}>
      {children}
    </favolink.svg>
  );
});
