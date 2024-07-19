import { cx, mergeStyles, toPx } from '@favolink-ui/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';

export function extractDynamicProps<
  P extends {
    style?: CSSProperties;
    className?: string;
    [key: string]: any;
  },
  S extends Record<string, string>,
>(props: P, dynamicVars: Record<string, string>, dynamicStyles: S) {
  const { className, style, ...restProps } = props;

  let composedClassName: string = '';
  let willAssignInlineVars: Record<string, string | null | undefined> = {};

  for (const prop in restProps) {
    if (prop in dynamicStyles) {
      composedClassName = cx(
        composedClassName,
        restProps[prop] && dynamicStyles[prop],
      );

      const regex = new RegExp(`${prop}Var`, 'g');

      for (const dynamicVar in dynamicVars) {
        if (regex.test(dynamicVar)) {
          willAssignInlineVars = {
            ...willAssignInlineVars,
            [dynamicVars[dynamicVar] as string]: toPx(restProps[prop]),
          };

          break;
        }
      }

      delete restProps[prop];
    }
  }

  const resultProps = {
    ...restProps,
    className: cx(composedClassName, className),
    style: mergeStyles(assignInlineVars(willAssignInlineVars), style),
  } as Omit<P, keyof S>;

  return resultProps;
}
