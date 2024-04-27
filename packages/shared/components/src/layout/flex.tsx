import {
  type FlexStyleProps,
  flexStyleProps,
  flexStyleVars,
} from '@favolink/styles';
import {
  type HTMLFavolinkProps,
  extractProps,
  favolink,
  forwardRef,
} from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './flex.styles.css';

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
