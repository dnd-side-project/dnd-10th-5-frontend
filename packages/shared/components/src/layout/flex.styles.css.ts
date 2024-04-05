import { style } from '@vanilla-extract/css';
import { createCSSPropertyStyleVariants } from './create-css-property-style-variants';

export const flexBase = style({
  display: 'flex',
});

export const flexJustify = createCSSPropertyStyleVariants('justifyContent', [
  '-moz-initial',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'inherit',
  'initial',
  'left',
  'normal',
  'revert',
  'revert-layer',
  'right',
  'space-around',
  'space-between',
  'space-evenly',
  'start',
  'stretch',
  'unset',
]);

export type FlexJustify = keyof typeof flexJustify;

export const flexAlign = createCSSPropertyStyleVariants('alignItems', [
  '-moz-initial',
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'inherit',
  'initial',
  'normal',
  'revert',
  'revert-layer',
  'self-end',
  'self-start',
  'start',
  'stretch',
  'unset',
]);

export type FlexAlign = keyof typeof flexAlign;

export const flexWrap = createCSSPropertyStyleVariants('flexWrap', [
  '-moz-initial',
  'inherit',
  'initial',
  'nowrap',
  'revert',
  'revert-layer',
  'unset',
  'wrap',
  'wrap-reverse',
]);

export type FlexWrap = keyof typeof flexWrap;

export const flexDirection = createCSSPropertyStyleVariants('flexDirection', [
  '-moz-initial',
  'column',
  'column-reverse',
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'row',
  'row-reverse',
  'unset',
]);

export type FlexDirection = keyof typeof flexDirection;
