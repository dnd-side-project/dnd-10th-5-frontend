import {
  type ComplexStyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { type CSSProperties } from 'react';
import { body3Regular, h6SemiBold } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

function makeButtonArchiveColorScheme(
  color: CSSProperties['color'],
): ComplexStyleRule {
  return {
    selectors: {
      [`${buttonVariant.solid}&`]: {
        backgroundColor: color,
        border: `1px solid ${color}`,
        color: color === 'white' ? vars.color.gray[1100] : 'white',
      },
      [`${buttonVariant.outline}&`]: {
        color: vars.color.gray[1100],
        backgroundColor: 'inherit',
        border: `1px solid ${color}`,
      },
    },
  };
}

export const buttonVariants = recipe({
  base: {
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
  },
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'start',
      },
    },
    variant: {
      solid: {},
      outline: {},
    },
    text: {
      normal: [body3Regular],
      strength: [h6SemiBold],
    },
    radius: {
      full: {
        borderRadius: 9999,
      },
      normal: {
        borderRadius: 8,
      },
    },
    fullfill: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    justify: 'center',
    variant: 'solid',
    text: 'normal',
    radius: 'normal',
    fullfill: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonVariants>;

const { variant: buttonVariant } = buttonVariants.classNames.variants;

export const buttonColorScheme = styleVariants({
  archiveBlack: makeButtonArchiveColorScheme(vars.color.archive.black),
  archiveBlue: makeButtonArchiveColorScheme(vars.color.archive.blue),
  archiveBrightGreen: makeButtonArchiveColorScheme(
    vars.color.archive.brightGreen,
  ),
  archiveCoral: makeButtonArchiveColorScheme(vars.color.archive.coral),
  archiveMint: makeButtonArchiveColorScheme(vars.color.archive.mint),
  archivePink: makeButtonArchiveColorScheme(vars.color.archive.mint),
  archivePurple: makeButtonArchiveColorScheme(vars.color.archive.purple),
  archiveYellow: makeButtonArchiveColorScheme(vars.color.archive.yellow),
  black: makeButtonArchiveColorScheme(vars.color.gray[1000]),
  gray: makeButtonArchiveColorScheme(vars.color.gray[400]),
  white: makeButtonArchiveColorScheme('white'),
  red: makeButtonArchiveColorScheme(vars.color.system[300]),
});

export type ButtonColorScheme = keyof typeof buttonColorScheme;

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
