import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './flex.styles.css';
import { extractProps } from '../../extract-props';
import {
  type FlexStyleProps,
  flexStyleProps,
  flexStyleVars,
} from '../../styles';

export type FlexProps = FlexStyleProps & HTMLFavolinkProps<'div'>;

export const Flex = forwardRef<FlexProps, 'div'>(function Flex(props, ref) {
  const { children, className, ...restProps } = extractProps(
    props,
    flexStyleVars,
    flexStyleProps,
  );

  return (
    <favolink.div
      {...restProps}
      ref={ref}
      className={cx(styles.flexBase, className)}
    >
      {children}
    </favolink.div>
  );
});
