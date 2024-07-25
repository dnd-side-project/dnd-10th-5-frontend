import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const flexDirectionValues = [
  'row',
  'column',
  'row-reverse',
  'column-reverse',
] satisfies CSSProperties['flexDirection'];

const flexDirectionData = makeData(flexDirectionValues);

export const flexDirection = styleVariants(
  flexDirectionData,
  mapToProp('flexDirection'),
);
