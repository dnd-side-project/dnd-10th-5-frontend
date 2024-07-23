import { body, vars } from '@favolink-ui/styles';
import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { inputElement } from './input-element.styles.css';

export const inputWithElement = style({
  selectors: {
    [`${inputElement.classNames.variants.direction.left} ~ &`]: {
      paddingLeft: 42,
    },
    [`&:has(~ ${inputElement.classNames.variants.direction.right})`]: {
      paddingRight: 42,
    },
  },
});

export const input = recipe({
  base: [
    body.body3Medium,
    {
      boxSizing: 'border-box',
      width: '100%',
      color: vars.palette.gray1000,
      transition: 'border 0.2s ease',
      outline: 'none',
    },
  ],

  variants: {
    variant: {
      outline: {
        border: `1px solid ${vars.palette.gray300}`,
        borderRadius: 8,
        padding: '10px 12px',

        selectors: {
          '&:disabled': {
            backgroundColor: vars.palette.gray300,
          },
          '&:focus': {
            border: `1px solid ${vars.palette.gray900}`,
          },
          '&::placeholder': {
            color: vars.palette.gray500,
          },
        },
      },
      flushed: {
        border: 'none',
        borderBottom: `1px solid ${vars.palette.gray300}`,
        padding: '10px 0',

        selectors: {
          '&:focus': {
            borderBottom: `1px solid ${vars.palette.gray900}`,
          },
          '&::placeholder': {
            color: vars.palette.gray500,
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
  },
});

export type InputVariants = RecipeVariants<typeof input>;
