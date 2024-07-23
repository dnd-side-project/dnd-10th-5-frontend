import { styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsCustomData } from '../../make-style-variants-data';

const flexShrinkKeys = ['none', 'shrink'] as const;

const flexShrinkValues = [0, 1] as const;

const flexShrinkData = makeStyleVariantsCustomData(
  flexShrinkKeys,
  flexShrinkValues,
);

export const flexShrink = styleVariants(flexShrinkData, (flexShrinkValue) => ({
  flexShrink: flexShrinkValue,
}));
