import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const textWrapValues = [
  'normal',
  'nowrap',
] satisfies CSSProperties['whiteSpace'];

const textWrapData = makeData(textWrapValues);

export const textWrap = styleVariants(textWrapData, mapToProp('whiteSpace'));
