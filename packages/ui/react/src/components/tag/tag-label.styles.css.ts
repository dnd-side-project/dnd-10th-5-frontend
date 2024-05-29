import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const tagLabelAsIcon = style({
  color: vars.color.gray[400],
});

export const tagLabel = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    size: {
      small: { minWidth: 14, minHeight: 14 },
      medium: { minWidth: 18, minHeight: 18 },
    },
  },
});

export type TagLabelVariants = RecipeVariants<typeof tagLabel>;
