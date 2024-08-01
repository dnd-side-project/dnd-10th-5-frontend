import { type CSSProperties } from 'react';
import { mergeFns } from './merge-fns';

type Props = {
  [key: string]: any;
};

function clsx(...classValues: (string | undefined)[]) {
  return classValues
    .map((str) => str?.trim())
    .filter(Boolean)
    .join(' ');
}

const eventRegex = /^on[A-Z]/;

export function mergeProps<T extends Props>(...propsList: T[]) {
  const resultProps: Props = {};

  for (const currentProps of propsList) {
    for (const propName in resultProps) {
      if (
        eventRegex.test(propName) &&
        typeof resultProps[propName] === 'function' &&
        typeof currentProps[propName] === 'function'
      ) {
        resultProps[propName] = mergeFns(
          currentProps[propName],
          resultProps[propName],
        );

        continue;
      }

      if (propName === 'className' || propName === 'class') {
        resultProps[propName] = clsx(
          resultProps[propName] as string | undefined,
          currentProps[propName] as string | undefined,
        );

        continue;
      }

      if (propName === 'style') {
        resultProps[propName] = Object.assign(
          {},
          resultProps[propName] ?? {},
          currentProps[propName] ?? {},
        ) as CSSProperties;

        continue;
      }

      resultProps[propName] = (
        currentProps[propName] !== undefined
          ? currentProps[propName]
          : resultProps[propName]
      ) as string;
    }

    for (const propName in currentProps) {
      if (resultProps[propName] === undefined) {
        resultProps[propName] = currentProps[propName];
      }
    }
  }

  return resultProps;
}
