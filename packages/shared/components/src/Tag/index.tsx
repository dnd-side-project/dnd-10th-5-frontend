import {
  type HTMLFavolinkProps,
  createContext,
  favolink,
  forwardRef,
} from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './styles.css';
import * as theme from './theme.css';
import { Icon, type IconProps } from '../Icon';

const TAG_CLASSNAME = 'favolink-tag';

export type TagIconProps = IconProps;

export const TagIcon = forwardRef<TagIconProps, typeof Icon>(
  function TagIcon(props, ref) {
    const { children, ...restProps } = props;

    const { size } = useTagStylesContext();

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

    const { size } = useTagStylesContext();

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

type TagStylesContextDefaultValue = {
  size: styles.Size;
};

const [TagStylesContextProvider, useTagStylesContext] =
  createContext<TagStylesContextDefaultValue>({
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
    <TagStylesContextProvider value={{ size }}>
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
        {children}
      </favolink.span>
    </TagStylesContextProvider>
  );
});
