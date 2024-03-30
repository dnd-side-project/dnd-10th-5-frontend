import { h4SemiBold, h5SemiBold, h6SemiBold } from '@favolink/styles/text.css';
import { style, styleVariants } from '@vanilla-extract/css';
import * as tagStyles from '../tag/tag.styles.css';

export const base = style({
  cursor: 'pointer',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const size = styleVariants({
  small: [h6SemiBold, { padding: 8 }],
  medium: [h5SemiBold, { padding: 10 }],
  large: [h4SemiBold, { padding: 12 }],
});

export type Size = keyof typeof size;

export const colorScheme = tagStyles.tagColorScheme;

export type ColorScheme = tagStyles.TagColorScheme;
