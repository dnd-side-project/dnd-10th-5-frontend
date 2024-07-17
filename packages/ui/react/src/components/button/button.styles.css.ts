import { type ComplexStyleRule, createVar, style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { type CSSProperties } from 'react';
import { enumStyles } from '../../styles/utils';
import { vars } from '../../styles/vars.css';

const {
  body: { body3Regular },
  heading: { h6Semibold },
} = enumStyles;

function makeButtonColorSchemeVar(
  color: CSSProperties['color'],
): ComplexStyleRule {
  return {
    vars: {
      [colorScheme]: color as string,
    },
  };
}

const colorScheme = createVar();

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  boxSizing: 'border-box',
  appearance: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  padding: '8px 10px',
  minWidth: 72,
});

export const buttonVariants = recipe({
  base,

  variants: {
    colorScheme: {
      archiveBlack: makeButtonColorSchemeVar(vars.color.archive.black),
      archiveBlue: makeButtonColorSchemeVar(vars.color.archive.blue),
      archiveBrightGreen: makeButtonColorSchemeVar(
        vars.color.archive.brightGreen,
      ),
      archiveCoral: makeButtonColorSchemeVar(vars.color.archive.coral),
      archiveMint: makeButtonColorSchemeVar(vars.color.archive.mint),
      archivePink: makeButtonColorSchemeVar(vars.color.archive.pink),
      archivePurple: makeButtonColorSchemeVar(vars.color.archive.purple),
      archiveYellow: makeButtonColorSchemeVar(vars.color.archive.yellow),
      black: makeButtonColorSchemeVar(vars.color.gray[1000]),
      gray: makeButtonColorSchemeVar(vars.color.gray[400]),
      white: makeButtonColorSchemeVar('white'),
      red: makeButtonColorSchemeVar(vars.color.system[300]),
    },
    justify: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'start',
      },
    },
    variant: {
      solid: {
        backgroundColor: colorScheme,
        border: `1px solid ${colorScheme}`,
        color: 'white',
      },
      outline: {
        color: vars.color.gray[1100],
        backgroundColor: 'inherit',
        border: `1px solid ${colorScheme}`,
      },
    },
    text: {
      normal: [body3Regular],
      strength: [h6Semibold],
    },
    radius: {
      normal: {
        borderRadius: 8,
      },
      full: {
        borderRadius: 9999,
      },
    },
    width: {
      full: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    colorScheme: 'white',
    justify: 'center',
    variant: 'solid',
    text: 'normal',
    radius: 'normal',
    width: undefined,
  },

  compoundVariants: [
    {
      variants: {
        colorScheme: 'white',
        variant: 'solid',
      },
      style: {
        color: vars.color.gray[1100],
      },
    },
  ],
});

export type ButtonVariants = Exclude<
  RecipeVariants<typeof buttonVariants>,
  undefined
>;

export const buttonHasElement = style({
  gap: 10,
});

export const justifyStartButtonHasRightElement = style({
  display: 'inline-flex',
  alignItems: 'center',
  selectors: {
    [`${buttonVariants.classNames.variants.justify.start} &`]: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  },
});
