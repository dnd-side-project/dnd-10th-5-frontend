import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { alignItems, display } from '../../styles';
import { archivePalette, globalVars, inherencePalette } from '../../theme.css';

const base = style([
  display.inlineFlex,
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

const colorSchemeVar = createVar();

const colorSchemePalette = {
  ...archivePalette,
  ...inherencePalette,
};

const colorScheme = styleVariants(
  colorSchemePalette,
  (_, colorSchemePaletteKey) => ({
    vars: { [colorSchemeVar]: globalVars.palette[colorSchemePaletteKey] },
  }),
);

export const buttonVariants = recipe({
  base,

  variants: {
    colorScheme,
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
        backgroundColor: colorSchemeVar,
        border: `1px solid ${colorSchemeVar}`,
        color: globalVars.palette.white,
      },
      outline: {
        backgroundColor: 'inherit',
        border: `1px solid ${colorSchemeVar}`,
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
    colorScheme: 'white',
    justify: 'center',
    variant: 'solid',
    weight: 'regular',
    radius: 'normal',
    width: undefined,
  },

  compoundVariants: [
    {
      variants: {
        colorScheme: 'black',
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
