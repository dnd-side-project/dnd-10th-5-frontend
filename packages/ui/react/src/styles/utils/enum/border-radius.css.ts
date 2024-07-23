import { styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsCustomData } from '../../make-style-variants-data';

const borderRadiusKeys = ['normal', 'full'] as const;

const borderRadiusValues = [8, 9999] as const;

const borderRadiusData = makeStyleVariantsCustomData(
  borderRadiusKeys,
  borderRadiusValues,
);

export const borderRadius = styleVariants(
  borderRadiusData,
  (borderradiusValue) => ({ borderRadius: borderradiusValue }),
);
