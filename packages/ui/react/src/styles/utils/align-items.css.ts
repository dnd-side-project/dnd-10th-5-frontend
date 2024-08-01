import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeCustomData } from '../make-data';
import { mapToProp } from '../map-to-prop';

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

const alignItemsData = makeCustomData(alignItemsKeys, alignItemsValues);

export const alignItems = styleVariants(
  alignItemsData,
  mapToProp('alignItems'),
);
