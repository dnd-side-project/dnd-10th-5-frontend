import { styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsCustomData } from '../../make-style-variants-data';

const flexGrowKeys = ['none', 'grow'] as const;

const flexGrowValues = [0, 1] as const;

const flexGrowData = makeStyleVariantsCustomData(flexGrowKeys, flexGrowValues);

export const flexGrow = styleVariants(flexGrowData, (flexGrowValue) => ({
  flexGrow: flexGrowValue,
}));
