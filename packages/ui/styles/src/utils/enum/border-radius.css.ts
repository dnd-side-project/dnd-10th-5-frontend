import { styleVariants } from '@vanilla-extract/css';
import { makeCustomData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const borderRadiusKeys = ['normal', 'full'] as const;

const borderRadiusValues = [8, 9999] as const;

const borderRadiusData = makeCustomData(borderRadiusKeys, borderRadiusValues);

export const borderRadius = styleVariants(
  borderRadiusData,
  mapToProp('borderRadius'),
);
