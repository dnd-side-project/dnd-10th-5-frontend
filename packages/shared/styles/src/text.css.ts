import { style } from '@vanilla-extract/css';

const common = style({
  letterSpacing: 0,
});

const h1 = style([
  common,
  {
    fontSize: 28,
    lineHeight: '39px',
  },
]);

export const h1SemiBold = style([
  h1,
  {
    fontWeight: 600,
  },
]);

export const h1Bold = style([
  h1,
  {
    fontWeight: 700,
  },
]);

const h2 = style([
  common,
  {
    fontSize: 24,
    lineHeight: '34px',
  },
]);

export const h2SemiBold = style([
  h2,
  {
    fontWeight: 600,
  },
]);

export const h2Bold = style([
  h2,
  {
    fontWeight: 700,
  },
]);

const h3 = style([
  common,
  {
    fontSize: 20,
    lineHeight: '28px',
  },
]);

export const h3SemiBold = style([
  h3,
  {
    fontWeight: 600,
  },
]);

export const h3Bold = style([
  h3,
  {
    fontWeight: 700,
  },
]);

const h4 = style([
  common,
  {
    fontSize: 18,
    lineHeight: '25px',
  },
]);

export const h4SemiBold = style([
  h4,
  {
    fontWeight: 600,
  },
]);

export const h4Bold = style([
  h4,
  {
    fontWeight: 700,
  },
]);

const h5 = style([
  common,
  {
    fontSize: 16,
    lineHeight: '22px',
  },
]);

export const h5SemiBold = style([
  h5,
  {
    fontWeight: 600,
  },
]);

export const h5Bold = style([
  h5,
  {
    fontWeight: 700,
  },
]);

const h6 = style([
  common,
  {
    fontSize: 14,
    lineHeight: '20px',
  },
]);

export const h6SemiBold = style([
  h6,
  {
    fontWeight: 600,
  },
]);

export const h6Bold = style([
  h6,
  {
    fontWeight: 700,
  },
]);

const body1 = style([
  common,
  {
    fontSize: 18,
    lineHeight: '25px',
  },
]);

export const body1Regular = style([
  body1,
  {
    fontWeight: 400,
  },
]);

export const body1Medium = style([
  body1,
  {
    fontWeight: 500,
  },
]);

const body2 = style([
  common,
  {
    fontSize: 16,
    lineHeight: '22px',
  },
]);

export const body2Regular = style([
  body2,
  {
    fontWeight: 400,
  },
]);

export const body2Medium = style([
  body2,
  {
    fontWeight: 500,
  },
]);

const body3 = style([
  common,
  {
    fontSize: 14,
    lineHeight: '20px',
  },
]);

export const body3Regular = style([
  body3,
  {
    fontWeight: 400,
  },
]);

export const body3Medium = style([
  body3,
  {
    fontWeight: 500,
  },
]);

const body4 = style([
  common,
  {
    fontSize: 12,
    lineHeight: '17px',
  },
]);

export const body4Regular = style([
  body4,
  {
    fontWeight: 400,
  },
]);

export const body4Medium = style([
  body4,
  {
    fontWeight: 500,
  },
]);
