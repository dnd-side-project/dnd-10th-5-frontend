import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars, weightText } from '../../theme.css';

const size = styleVariants({
  '1': [globalVars.text.text1],
  '2': [globalVars.text.text2],
  '3': [globalVars.text.text3],
  '4': [globalVars.text.text4],
});

const weight = styleVariants(weightText, (_, weightKey) => ({
  fontWeight: globalVars.weight.text[weightKey],
}));

export const textVariants = recipe({
  variants: {
    size,
    weight,
  },

  defaultVariants: {
    size: '1',
    weight: 'regular',
  },
});

export type TextVariants = Exclude<
  RecipeVariants<typeof textVariants>,
  undefined
>;
