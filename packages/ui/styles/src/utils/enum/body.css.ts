import { type ComplexStyleRule, styleVariants } from '@vanilla-extract/css';
import { letterSpacing } from './letter-spacing.css';
import {
  makeStyleVariantsCustomData,
  makeStyleVariantsData,
} from '../../make-style-variants-data';

const weightKeys = ['regular', 'medium'] as const;

const weightValues = [400, 500] as const;

const weightData = makeStyleVariantsCustomData(weightKeys, weightValues);

const weight = styleVariants(weightData, (weightValue) => ({
  fontWeight: weightValue,
}));

const rowBodyKeys = ['body1', 'body2', 'body3', 'body4'] as const;

const rowBodyValues = [
  { fontSize: 18, lineHeight: '25px' },
  { fontSize: 16, lineHeight: '22px' },
  { fontSize: 14, lineHeight: '20px' },
  { fontSize: 12, lineHeight: '17px' },
] satisfies ComplexStyleRule[];

const rowBodyData = makeStyleVariantsCustomData(rowBodyKeys, rowBodyValues);

const rowBody = styleVariants(rowBodyData, (rowBodyValue) => [
  letterSpacing,
  rowBodyValue,
]);

const bodyKeys = [
  'body1Regular',
  'body1Medium',
  'body2Regular',
  'body2Medium',
  'body3Regular',
  'body3Medium',
  'body4Regular',
  'body4Medium',
] as const;

const bodyData = makeStyleVariantsData(bodyKeys);

export const body = styleVariants(bodyData, (_, bodyKey) => {
  const splitedKeys = bodyKey.split(/\d/);

  const rowBodyKey = (splitedKeys[0] +
    (bodyKey[4] as string)) as keyof typeof rowBody;
  const _weight = splitedKeys[1]?.toLowerCase() as keyof typeof weightData;

  return [rowBody[rowBodyKey], weight[_weight]];
});
