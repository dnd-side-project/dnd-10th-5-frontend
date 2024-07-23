import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const flexDirectionValues = [
  'row',
  'column',
  'row-reverse',
  'column-reverse',
] satisfies CSSProperties['flexDirection'];

const flexDirectionData = makeStyleVariantsData(flexDirectionValues);

export const flexDirection = styleVariants(
  flexDirectionData,
  (flexDirectionValue) => ({
    flexDirection: flexDirectionValue,
  }),
);
