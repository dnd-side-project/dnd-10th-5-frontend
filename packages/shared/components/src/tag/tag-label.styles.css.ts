import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const tagLabelBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const tagLabelSize = styleVariants({
  small: { minWidth: 14, minHeight: 14 },
  medium: { minWidth: 18, minHeight: 18 },
});

export type TagLabelSize = keyof typeof tagLabelSize;

export const tagLabelAsIcon = style({
  color: vars.color.gray400,
});
