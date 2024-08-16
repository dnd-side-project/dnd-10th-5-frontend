import { type ComplexStyleRule } from '@vanilla-extract/css';

export function makeData<T extends readonly string[]>(dataValues: T) {
  const data = dataValues.reduce(
    (prevData, value) => ({ ...prevData, [value]: value }),
    {} as Record<T[number], T[number]>,
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
