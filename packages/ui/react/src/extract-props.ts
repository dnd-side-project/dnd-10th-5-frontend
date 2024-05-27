import { mergeRecords } from '@favolink-ui/utils';
import { type createVar } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import { type FlexStyleProps } from './styles';

export function extractProps<
  Props extends {
    className?: string;
    style?: CSSProperties;
    [key: string]: any;
  },
  CSSVarFuntion extends ReturnType<typeof createVar>,
  Styles extends ReturnType<typeof assignInlineVars>,
>(
  props: Props,
  vars: Record<string, CSSVarFuntion>,
  ...styleProps: Record<string, undefined>[]
) {
  const { style, ...restProps } = props;
  const copiedRestProps = { ...restProps };
  const copiedVars = { ...vars };
  const allStyleProps = mergeRecords(...styleProps);
  const willAssignInlineStyle = {} as Record<CSSVarFuntion, string>;

  for (const styleProp in allStyleProps) {
    if (styleProp in copiedRestProps) {
      delete copiedRestProps[styleProp];

      const regex = new RegExp(`\\w*${styleProp}\\w*`, 'i');

      for (const _var in copiedVars) {
        if (regex.test(copiedVars[_var] as CSSVarFuntion)) {
          delete copiedVars[_var];

          willAssignInlineStyle[vars[_var] as CSSVarFuntion] = props[
            styleProp
          ] as string;

          break;
        }
      }
    }
  }

  return {
    ...(copiedRestProps as Omit<Props, keyof FlexStyleProps | 'style'>),
    style: {
      ...assignInlineVars(willAssignInlineStyle),
      ...style,
    } as CSSProperties & Styles,
  };
}
