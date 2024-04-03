import { forwardRef } from '@favolink/system';
import { Children, type ReactNode } from 'react';
import { Icon, type IconProps } from './icon';

type CreateIconOptions = {
  d?: string;
  path?: ReactNode | ReactNode[];
  defaultProps?: IconProps;
};

export function createIcon(options: CreateIconOptions) {
  const { d: pathDefinition, path, defaultProps = {} } = options;
  const { viewBox = '0 0 20 20', ...restDefaultProps } = defaultProps;

  const Component = forwardRef<IconProps, typeof Icon>(
    function Component(props, ref) {
      const pathElements = Children.toArray(path);

      return (
        <Icon ref={ref} viewBox={viewBox} {...restDefaultProps} {...props}>
          {pathElements.length ? (
            pathElements
          ) : (
            <path fill="currentColor" d={pathDefinition} />
          )}
        </Icon>
      );
    },
  );

  return Component;
}
