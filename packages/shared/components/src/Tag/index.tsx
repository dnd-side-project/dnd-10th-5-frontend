import {
  type HTMLFavolinkProps,
  createContext,
  favolink,
  forwardRef,
} from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './styles.css';
import * as theme from './theme.css';
import Icon, { type IconProps } from '../Icon';

const TAG_CLASSNAME = 'favolink-tag';

export type TagIconProps = IconProps;

export const TagIcon = forwardRef<TagIconProps, typeof Icon>(
  function TagIcon(props, ref) {
    const { children, ...restProps } = props;

    const { size } = useTagContext();

    const iconSize: Record<styles.Size, typeof restProps> = {
      small: { width: 14, height: 14 },
      medium: { width: 18, height: 18 },
    };

    return (
      <Icon {...iconSize[size]} {...restProps} ref={ref}>
        {children}
      </Icon>
    );
  },
);

export type TagLabelProps = HTMLFavolinkProps<'span'> & {
  isAsIcon?: boolean;
};

export const TagLabel = forwardRef<TagLabelProps, 'span'>(
  function TagText(props, ref) {
    const { children, className, isAsIcon, ...restProps } = props;

    const { size } = useTagContext();

    return (
      <favolink.span
        {...restProps}
        ref={ref}
        className={classNames(
          `${TAG_CLASSNAME}__label`,
          styles.label[size],
          isAsIcon && styles.labelAsIcon,
          className,
        )}
      >
        {children}
      </favolink.span>
    );
  },
);

type TagContextDefaultValue = {
  size: styles.Size;
};

const [TagProvider, useTagContext] = createContext<TagContextDefaultValue>({
  size: 'small',
});

export type TagProps = HTMLFavolinkProps<'span'> & {
  colorScheme?: styles.ColorScheme;
  size?: styles.Size;
};

export const Tag = forwardRef<TagProps, 'span'>(function Tag(props, ref) {
  const {
    children,
    className,
    colorScheme = 'white',
    size = 'small',
    ...restProps
  } = props;

  return (
    <favolink.span
      {...restProps}
      ref={ref}
      className={classNames(
        TAG_CLASSNAME,
        theme.color,
        styles.base,
        styles.size[size],
        styles.colorScheme[colorScheme],
        className,
      )}
    >
      <TagProvider size={size}>{children}</TagProvider>
    </favolink.span>
  );
});
