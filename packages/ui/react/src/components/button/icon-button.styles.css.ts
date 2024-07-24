import { heading } from '@favolink-ui/styles';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import * as tagStyles from '../tag/tag.css';

export const iconButton = recipe({
  base: {
    cursor: 'pointer',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    size: {
      small: [heading.h6Semibold, { padding: 8 }],
      medium: [heading.h5Semibold, { padding: 10 }],
      large: [heading.h4Semibold, { padding: 12 }],
    },
    colorScheme: tagStyles.colorVariant,
  },

  defaultVariants: {
    colorScheme: 'archiveBlack',
    size: 'small',
  },
});

export type IconButtonVariants = Exclude<
  RecipeVariants<typeof iconButton>,
  undefined
>;
