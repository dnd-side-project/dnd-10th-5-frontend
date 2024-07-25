import { styleVariants } from '@vanilla-extract/css';
import { makeCustomData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const flexShrinkKeys = ['none', 'shrink'] as const;

const flexShrinkValues = [0, 1] as const;

const flexShrinkData = makeCustomData(flexShrinkKeys, flexShrinkValues);

export const flexShrink = styleVariants(
  flexShrinkData,
  mapToProp('flexShrink'),
);
