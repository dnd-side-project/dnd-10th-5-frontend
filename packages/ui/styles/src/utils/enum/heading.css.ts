import { type ComplexStyleRule, styleVariants } from '@vanilla-extract/css';
import { letterSpacing } from './letter-spacing.css';
import { makeCustomData, makeData } from '../../make-data';

const weightKeys = ['semibold', 'bold'] as const;

const weightValues = [600, 700] as const;

const weightData = makeCustomData(weightKeys, weightValues);

export const weight = styleVariants(weightData, (weightValue) => ({
  fontWeight: weightValue,
}));

const rowHeadingKeys = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] satisfies (keyof JSX.IntrinsicElements)[];

const rowHeadingValues = [
  { fontSize: 28, lineHeight: '39px' },
  { fontSize: 24, lineHeight: '34px' },
  { fontSize: 20, lineHeight: '28px' },
  { fontSize: 18, lineHeight: '25px' },
  { fontSize: 16, lineHeight: '22px' },
  { fontSize: 14, lineHeight: '20px' },
] satisfies ComplexStyleRule[];

const rowHeadingData = makeCustomData(rowHeadingKeys, rowHeadingValues);

const rowHeading = styleVariants(rowHeadingData, (rowHeadingDataValue) => [
  letterSpacing,
  rowHeadingDataValue,
]);

const headingKeys = [
  'h1Semibold',
  'h1Bold',
  'h2Semibold',
  'h2Bold',
  'h3Semibold',
  'h3Bold',
  'h4Semibold',
  'h4Bold',
  'h5Semibold',
  'h5Bold',
  'h6Semibold',
  'h6Bold',
] as const;

const headingData = makeData(headingKeys);

export const heading = styleVariants(headingData, (_, headingKey) => {
  const splitedKeys = headingKey.split(/\d/);

  const tag = (splitedKeys[0] +
    (headingKey[1] as string)) as keyof typeof rowHeading;
  const _weight = splitedKeys[1]?.toLowerCase() as keyof typeof weightData;

  return [rowHeading[tag], weight[_weight]];
});
