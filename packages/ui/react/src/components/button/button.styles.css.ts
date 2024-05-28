import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { h5Bold, h6SemiBold } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

export const button = recipe({
  base: {
    borderRadius: 8,
    cursor: 'pointer',
  },

  variants: {
    colorScheme: {
      gray: {
        backgroundColor: vars.color.gray[400],
        border: `1px solid ${vars.color.gray[400]}`,
        color: vars.color.gray[200],
      },
      black: {
        backgroundColor: vars.color.gray[1000],
        border: `1px solid ${vars.color.gray[1000]}`,
        color: 'white',
      },
      white: {
        backgroundColor: 'white',
        border: `1px solid ${vars.color.gray[300]}`,
        color: vars.color.gray[900],
      },
      red: {
        backgroundColor: vars.color.system[300],
        border: `1px solid ${vars.color.system[300]}`,
        color: 'white',
      },
    },
    size: {
      small: [h6SemiBold, { minWidth: 100, minHeight: 30 }],
      medium: [h6SemiBold, { minWidth: 202, minHeight: 40 }],
      large: [h5Bold, { minWidth: 332, minHeight: 44 }],
    },
  },

  defaultVariants: {
    colorScheme: 'white',
    size: 'medium',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
