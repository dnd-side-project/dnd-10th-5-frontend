import { type ComplexStyleRule } from '@vanilla-extract/css';

type KebabToCamelCase<T extends string> = T extends `${infer T1}-${infer T2}`
  ? `${Lowercase<T1>}${Capitalize<KebabToCamelCase<T2>>}`
  : T;

function kebabToCamelCase<T extends string>(value: T) {
  return value.replace(/-./g, (match) =>
    match.charAt(1).toUpperCase(),
  ) as KebabToCamelCase<T>;
}

export function makeData<T extends readonly string[]>(dataValues: T) {
  const data = dataValues.reduce(
    (prevData, value) => ({ ...prevData, [kebabToCamelCase(value)]: value }),
    {} as Record<KebabToCamelCase<T[number]>, T[number]>,
  );

  return data;
}

export function makeCustomData<
  K extends readonly string[],
  V extends readonly (ComplexStyleRule | number | string)[],
>(customKeys: K, dataValues: V) {
  const data = customKeys.reduce(
    (prevData, customKey, index) => {
      const dataValue = dataValues[index];

      return { ...prevData, [customKey]: dataValue };
    },
    {} as Record<K[number], V[number]>,
  );

  return data;
}
