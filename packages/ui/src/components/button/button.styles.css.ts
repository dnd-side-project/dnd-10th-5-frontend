import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { alignItems, display } from '../../styles';
import { archivePalette, globalVars, inherencePalette } from '../../theme.css';

const base = style([
  display['inline-flex'],
  alignItems.center,
  {
    cursor: 'pointer',
    textDecoration: 'none',
    boxSizing: 'border-box',
    appearance: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    padding: '8px 10px',
    minWidth: 72,
  },
]);

const colorVar = createVar();

const colorPalette = {
  ...archivePalette,
  ...inherencePalette,
};

const color = styleVariants(colorPalette, (_, colorPaletteKey) => ({
  vars: { [colorVar]: globalVars.palette[colorPaletteKey] },
}));

export const buttonVariants = recipe({
  base,

  variants: {
    color,
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
        backgroundColor: colorVar,
        border: `1px solid ${colorVar}`,
        color: globalVars.palette.white,
      },
      outline: {
        backgroundColor: 'inherit',
        border: `1px solid ${colorVar}`,
        color: globalVars.palette.gray1000,
      },
    },
    weight: {
      regular: [
        globalVars.text.text3,
        { fontWeight: globalVars.weight.text.medium },
      ],
      semibold: [
        globalVars.heading.h6,
        { fontWeight: globalVars.weight.heading.semibold },
      ],
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
    color: 'white',
    justify: 'center',
    variant: 'solid',
    weight: 'regular',
    radius: 'normal',
    width: undefined,
  },

  compoundVariants: [
    {
      variants: {
        color: 'black',
        variant: 'solid',
      },
      style: {
        ':disabled': {
          backgroundColor: globalVars.palette.gray400,
          border: `1px solid ${globalVars.palette.gray400}`,
          color: globalVars.palette.gray200,
        },
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
