import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { display } from '../../styles';

export const boxVariants = recipe({
  variants: {
    display: {
      none: display.none,
      inline: display.inline,
      'inline-block': display['inline-block'],
      block: display.block,
    },
  },
});

export type BoxVariants = Exclude<
  RecipeVariants<typeof boxVariants>,
  undefined
>;
