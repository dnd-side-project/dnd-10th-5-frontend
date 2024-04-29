import { style, styleVariants } from '@vanilla-extract/css';
import { h4SemiBold, h5SemiBold, h6SemiBold } from '../../styles/text.css';
import * as tagStyles from '../tag/tag.styles.css';

export const iconButtonBase = style({
  cursor: 'pointer',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const iconButtonSize = styleVariants({
  small: [h6SemiBold, { padding: 8 }],
  medium: [h5SemiBold, { padding: 10 }],
  large: [h4SemiBold, { padding: 12 }],
});

export type IconButtonSize = keyof typeof iconButtonSize;

export const iconButtoncolorScheme = tagStyles.tagColorScheme;

export type IconButtonColorScheme = tagStyles.TagColorScheme;
