import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsCustomData } from '../../make-style-variants-data';

const justifyContentKeys = ['start', 'center', 'end', 'spaceBetween'] as const;

const justifyContentValues = [
  'flex-start',
  'center',
  'end',
  'space-between',
] satisfies CSSProperties['justifyContent'];

const justifyContentData = makeStyleVariantsCustomData(
  justifyContentKeys,
  justifyContentValues,
);

export const justifyContent = styleVariants(
  justifyContentData,
  (justifyContentValue) => ({ justifyContent: justifyContentValue }),
);
