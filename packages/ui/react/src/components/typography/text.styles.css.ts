import { styleVariants } from '@vanilla-extract/css';
import {
  body1Medium,
  body1Regular,
  body2Medium,
  body2Regular,
  body3Medium,
  body3Regular,
  body4Medium,
  body4Regular,
} from '../../styles/text.css';

export const textScale = styleVariants({
  '1medium': [body1Medium],
  '1regular': [body1Regular],
  '2medium': [body2Medium],
  '2regular': [body2Regular],
  '3medium': [body3Medium],
  '3regular': [body3Regular],
  '4medium': [body4Medium],
  '4regular': [body4Regular],
});

export type TextScale = keyof typeof textScale;
