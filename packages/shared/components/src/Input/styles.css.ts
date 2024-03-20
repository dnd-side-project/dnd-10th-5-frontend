import { body3Medium } from '@favolink/styles/text.css';
import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const groupBase = style({
  position: 'relative',
});

export const elementBase = style({
  width: 42,
  position: 'absolute',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const elementDirection = styleVariants({
  right: [elementBase, { top: 0, right: 0 }],
  left: [elementBase, { top: 0, left: 0 }],
});

export const base = style([
  body3Medium,
  {
    boxSizing: 'border-box',
    width: '100%',
    color: vars.color.gray1000,
    transition: 'border 0.2s ease',
    outline: 'none',
  },
]);

export const variant = styleVariants({
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

export type Variant = keyof typeof variant;

export const withElement = style({
  selectors: {
    [`${elementDirection.left} ~ &`]: {
      paddingLeft: 42,
    },
    [`&:has(~ ${elementDirection.right})`]: {
      paddingRight: 42,
    },
  },
});
