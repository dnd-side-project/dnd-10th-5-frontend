import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

const tagLabelBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const tagLabelSize = styleVariants({
  small: [tagLabelBase, { minWidth: 14, minHeight: 14 }],
  medium: [tagLabelBase, { minWidth: 18, minHeight: 18 }],
});

export type TagLabelSize = keyof typeof tagLabelSize;

export const tagLabelAsIcon = style({
  color: vars.color.gray400,
});
