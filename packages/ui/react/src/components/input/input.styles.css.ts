import { style, styleVariants } from '@vanilla-extract/css';
import { inputElementDirection } from './input-element.styles.css';
import { body3Medium } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

export const inputBase = style([
  body3Medium,
  {
    boxSizing: 'border-box',
    width: '100%',
    color: vars.color.gray[1000],
    transition: 'border 0.2s ease',
    outline: 'none',
  },
]);

export const inputVariant = styleVariants({
  outline: {
    border: `1px solid ${vars.color.gray[300]}`,
    borderRadius: 8,
    padding: '10px 12px',

    selectors: {
      '&:disabled': {
        backgroundColor: vars.color.gray[300],
      },
      '&:focus': {
        border: `1px solid ${vars.color.gray[900]}`,
      },
      '&::placeholder': {
        color: vars.color.gray[500],
      },
    },
  },
  flushed: {
    border: 'none',
    borderBottom: `1px solid ${vars.color.gray[300]}`,
    padding: '10px 0',

    selectors: {
      '&:focus': {
        borderBottom: `1px solid ${vars.color.gray[900]}`,
      },
      '&::placeholder': {
        color: vars.color.gray[500],
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
