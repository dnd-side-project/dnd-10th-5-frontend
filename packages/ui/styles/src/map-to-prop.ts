import { type ComplexStyleRule } from '@vanilla-extract/css';
import { type CSSProperties } from 'react';

export function mapToProp<P extends keyof CSSProperties>(prop: P) {
  return (value: number | string) => {
    const styleRule: ComplexStyleRule = {
      [prop]: value,
    };

    return styleRule;
  };
}
