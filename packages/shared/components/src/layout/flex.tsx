import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './flex.styles.css';

type FlexOptions = {
  justify?: styles.FlexJustify;
  align?: styles.FlexAlign;
  wrap?: styles.FlexWrap;
  direction?: styles.FlexDirection;
};

export type FlexProps = FlexOptions & HTMLFavolinkProps<'div'>;

export const Flex = forwardRef<FlexProps, 'div'>(function Flex(props, ref) {
  const {
    children,
    className,
    justify = 'normal',
    align = 'normal',
    wrap = 'nowrap',
    direction = 'row',
    ...restProps
  } = props;

  return (
    <favolink.div
      {...restProps}
      ref={ref}
      className={classNames(
        styles.flexBase,
        styles.flexJustify[justify],
        styles.flexAlign[align],
        styles.flexWrap[wrap],
        styles.flexDirection[direction],
        className,
      )}
    >
      {children}
    </favolink.div>
  );
});
