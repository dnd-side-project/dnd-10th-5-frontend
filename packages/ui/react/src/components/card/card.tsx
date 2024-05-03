import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  type HTMLFavolinkProps,
  extractProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './card.styles.css';
import {
  type FlexStyleProps,
  flexStyleProps,
  flexStyleVars,
} from '../../styles';

type CardStyleProps = Pick<
  FlexStyleProps,
  'alignItems' | 'flexDirection' | 'justifyContent'
>;

export type CardProps = CardStyleProps & HTMLFavolinkProps<'article'>;

export const Card = forwardRef<CardProps, 'article'>(function Card(props, ref) {
  const { flexDirection = 'column', ...restProps } = props;
  const { children, className, style, ..._restProps } = extractProps(
    restProps,
    flexStyleVars,
    flexStyleProps,
  );

  return (
    <favolink.article
      {..._restProps}
      ref={ref}
      className={cx('favolink-card', styles.cardBase, className)}
      style={{
        ...assignInlineVars({
          [flexStyleVars.flexDirection]: flexDirection,
        }),
        ...style,
      }}
    >
      {children}
    </favolink.article>
  );
});
