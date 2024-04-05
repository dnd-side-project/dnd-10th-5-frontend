import { styleVariants } from '@vanilla-extract/css';
import { type CSSProperties } from 'react';

export type CSSPropertyValue<Property extends keyof CSSProperties> = Exclude<
  CSSProperties[Property],
  object | undefined
>;

export function createCSSPropertyStyleVariants<
  PropertyKey extends keyof CSSProperties,
  PropertyValue extends CSSPropertyValue<PropertyKey>,
>(property: PropertyKey, propertyValues: PropertyValue[]) {
  const propertyValueRecord = propertyValues.reduce(
    (accumulator, currentPropertyValue) => ({
      ...accumulator,
      [currentPropertyValue]: currentPropertyValue,
    }),
    {} as Record<PropertyValue, PropertyValue>,
  );

  const propertyStyleVariants = styleVariants(
    propertyValueRecord,
    (propertyValue) => ({
      [property]: propertyValue,
    }),
  );

  return propertyStyleVariants;
}
