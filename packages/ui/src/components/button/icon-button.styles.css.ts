import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../../theme.css';
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
      small: [
        globalVars.heading.h6,
        { padding: 8, fontweight: globalVars.weight.heading.semibold },
      ],
      medium: [
        globalVars.heading.h5,
        { padding: 10, fontweight: globalVars.weight.heading.semibold },
      ],
      large: [
        globalVars.heading.h4,
        { padding: 12, fontweight: globalVars.weight.heading.semibold },
      ],
    },
    colorScheme: tagStyles.color,
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
