import { styleVariants } from '@vanilla-extract/css';
import { makeCustomData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const flexGrowKeys = ['none', 'grow'] as const;

const flexGrowValues = [0, 1] as const;

const flexGrowData = makeCustomData(flexGrowKeys, flexGrowValues);

export const flexGrow = styleVariants(flexGrowData, mapToProp('flexGrow'));
