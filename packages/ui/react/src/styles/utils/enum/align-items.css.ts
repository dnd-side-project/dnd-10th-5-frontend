import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsCustomData } from '../../make-style-variants-data';

const alignItemsKeys = [
  'start',
  'center',
  'end',
  'baseline',
  'stretch',
] as const;

const alignItemsValues = [
  'flex-start',
  'center',
  'flex-end',
  'baseline',
  'stretch',
] satisfies CSSProperties['alignItems'];

const alignItemsData = makeStyleVariantsCustomData(
  alignItemsKeys,
  alignItemsValues,
);

export const alignItems = styleVariants(
  alignItemsData,
  (alignItemsDataValue) => ({
    alignItems: alignItemsDataValue,
  }),
);
