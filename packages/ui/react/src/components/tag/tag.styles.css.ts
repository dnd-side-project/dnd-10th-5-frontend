import { style, styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { archivePalette, vars } from '../../styles';
import { enumStyles } from '../../styles/utils';

const {
  body: { body3Medium, body4Medium },
} = enumStyles;

export const colorScheme = styleVariants(
  archivePalette,
  (archivePaletteValue, archivePaletteKey) => ({
    color: vars.palette[archivePaletteKey],
    backgroundColor: archivePaletteValue,
    border: `1px solid ${archivePaletteValue}`,
  }),
);

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  borderRadius: 100,
});

export const tag = recipe({
  base,

  variants: {
    colorScheme,
    size: {
      small: [body4Medium, { padding: '4px 8px' }],
      medium: [body3Medium, { padding: '8px 14px' }],
    },
  },

  defaultVariants: {
    colorScheme: 'archiveBlack',
    size: 'small',
  },
});

export type TagVariants = Exclude<RecipeVariants<typeof tag>, undefined>;
