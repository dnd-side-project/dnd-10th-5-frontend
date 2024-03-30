import { body3Medium } from '@favolink/styles/text.css';
import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { inputElementDirection } from './input-element.styles.css';

export const inputBase = style([
  body3Medium,
  {
    boxSizing: 'border-box',
    width: '100%',
    color: vars.color.gray1000,
    transition: 'border 0.2s ease',
    outline: 'none',
  },
]);

export const inputVariant = styleVariants({
  outline: {
    border: `1px solid ${vars.color.gray300}`,
    borderRadius: 8,
    padding: '10px 12px',

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray300,
      },
      '&:focus': {
        border: `1px solid ${vars.color.gray900}`,
      },
      '&::placeholder': {
        color: vars.color.gray500,
      },
    },
  },
  flushed: {
    border: 'none',
    borderBottom: `1px solid ${vars.color.gray300}`,
    padding: '10px 0',

    selectors: {
      '&:focus': {
        borderBottom: `1px solid ${vars.color.gray900}`,
      },
      '&::placeholder': {
        color: vars.color.gray500,
      },
    },
  },
});

export type InputVariant = keyof typeof inputVariant;

export const inputWithElement = style({
  selectors: {
    [`${inputElementDirection.left} ~ &`]: {
      paddingLeft: 42,
    },
    [`&:has(~ ${inputElementDirection.right})`]: {
      paddingRight: 42,
    },
  },
});
