import { Icon, type IconProps } from '@favolink-ui/icons';
import { forwardRef } from '@favolink-ui/system';
import { useTagStylesContext } from './tag.context';
import type * as styles from './tag.styles.css';

export type TagIconProps = IconProps;

export const TagIcon = forwardRef<TagIconProps, typeof Icon>(
  function TagIcon(props, ref) {
    const { children, ...restProps } = props;

    const { size } = useTagStylesContext();

    const iconSize: Record<styles.TagSize, typeof restProps> = {
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
