import { type CSSProperties } from 'react';

type InlineStyle =
  | CSSProperties
  | Record<string, number | string | null | undefined>
  | undefined;

export function mergeStyles(...styles: InlineStyle[]): InlineStyle {
  let mergedStyle: InlineStyle = {};

  for (const style of styles) {
    if (style) {
      mergedStyle = { ...mergedStyle, ...style };
    }
  }

  return Object.keys(mergedStyle).length ? mergedStyle : undefined;
}
