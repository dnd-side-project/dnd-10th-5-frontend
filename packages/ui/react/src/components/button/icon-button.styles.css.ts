import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { enumStyles } from '../../styles/utils';
import * as tagStyles from '../tag/tag.styles.css';

const { heading } = enumStyles;

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
    colorScheme: tagStyles.colorScheme,
  },

  defaultVariants: {
    colorScheme: 'white',
    size: 'small',
  },
});

export type IconButtonVariants = Exclude<
  RecipeVariants<typeof iconButton>,
  undefined
>;
