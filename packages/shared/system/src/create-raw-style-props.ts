import { type CSSProperties } from 'react';

export type StyleProps<Props extends keyof CSSProperties> = {
  [key in Props]?: CSSProperties[key];
};

export function createRawStyleProps<
  Props extends StyleProps<keyof CSSProperties>,
>(...styleProps: (keyof Props)[]) {
  return styleProps.reduce(
    (acc, styleProp) => ({ ...acc, [styleProp]: undefined }),
    {} as Record<keyof Props, undefined>,
  );
}
