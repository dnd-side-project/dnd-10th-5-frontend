import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { h4SemiBold, h5SemiBold, h6SemiBold } from '../../styles/text.css';
import * as tagStyles from '../tag/tag.styles.css';

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
      small: [h6SemiBold, { padding: 8 }],
      medium: [h5SemiBold, { padding: 10 }],
      large: [h4SemiBold, { padding: 12 }],
    },
    colorScheme: tagStyles.colorScheme,
  },

  defaultVariants: {
    colorScheme: 'white',
    size: 'small',
  },
});

export type IconButtonVariants = RecipeVariants<typeof iconButton>;
