import { Children, type ReactNode } from 'react';
import { type HTMLFavolinkProps } from './createComponent';
import { favolink } from './factory';
import { forwardRef } from './forwardRef';

type IconProps = HTMLFavolinkProps<'svg'>;

type CreateIconOptions = {
  d?: string;
  path?: ReactNode | ReactNode[];
  defaultProps?: IconProps;
};

export function createIcon(options: CreateIconOptions) {
  const { d: pathDefinition, path, defaultProps = {} } = options;
  const { viewBox = '0 0 20 20', ...restDefaultProps } = defaultProps;

  const Component = forwardRef<IconProps, 'svg'>(
    function Component(props, ref) {
      const pathElements = Children.toArray(path);

      return (
        <favolink.svg
          ref={ref}
          viewBox={viewBox}
          {...restDefaultProps}
          {...props}
        >
          {pathElements.length ? pathElements : <path d={pathDefinition} />}
        </favolink.svg>
      );
    },
  );

  return Component;
}
