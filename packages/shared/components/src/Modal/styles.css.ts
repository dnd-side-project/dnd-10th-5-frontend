import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

const flex = style({
  display: 'flex',
});

const flexGap = style([
  flex,
  {
    gap: 16,
  },
]);

export const content = style([
  flexGap,
  {
    position: 'relative',
    zIndex: 98,
    flexDirection: 'column',
    padding: 24,
    minWidth: 300,
    backgroundColor: vars.color.gray200,
    borderRadius: 20,
  },
]);

const baseOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const overlay = styleVariants({
  original: [
    baseOverlay,
    { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 96 },
  ],
  withContent: [baseOverlay, { zIndex: 97 }],
});

export type OverlayVariant = keyof typeof overlay;

export const header = style([
  flexGap,
  {
    flexDirection: 'column',
  },
]);

export const topBarLayout = styleVariants({
  single: [flex, { justifyContent: 'flex-end' }],
  couple: [flex, { justifyContent: 'space-between' }],
});

export type TopBarLayoutVariant = keyof typeof topBarLayout;

export const titleLayout = styleVariants({
  left: [flex, { justifyContent: 'flex-start' }],
  center: [flex, { justifyContent: 'center' }],
  right: [flex, { justifyContent: 'flex-end' }],
});

export type TitleLayoutVariant = keyof typeof titleLayout;

export const title = style({ color: vars.color.gray1000 });

export const footer = style([
  flex,
  {
    justifyContent: 'flex-end',
  },
]);
