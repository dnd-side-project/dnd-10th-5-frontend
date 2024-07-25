import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeCustomData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const justifyContentKeys = ['start', 'center', 'end', 'spaceBetween'] as const;

const justifyContentValues = [
  'flex-start',
  'center',
  'end',
  'space-between',
] satisfies CSSProperties['justifyContent'];

const justifyContentData = makeCustomData(
  justifyContentKeys,
  justifyContentValues,
);

export const justifyContent = styleVariants(
  justifyContentData,
  mapToProp('justifyContent'),
);
