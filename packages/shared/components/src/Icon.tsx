import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';

const ICON_CLASSNAME = 'favolink-icon';

export type IconProps = HTMLFavolinkProps<'svg'>;

const Icon = forwardRef<IconProps, 'svg'>(function Icon(props, ref) {
  const { as: element, children, className, ...restProps } = props;

  const sharedProps = {
    ref,
    className: classNames(ICON_CLASSNAME, className),
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

export default Icon;
