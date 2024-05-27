import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './card-footer.styles.css';
import { type FlexStyleProps, flexStyleVars } from '../../styles';

type CardFooterStyleProps = Pick<FlexStyleProps, 'justifyContent'>;

export type CardFooterProps = CardFooterStyleProps &
  HTMLFavolinkProps<'footer'>;

export const CardFooter = forwardRef<CardFooterProps, 'footer'>(
  function CardFooter(props, ref) {
    const { className, style, children, justifyContent, ...restProps } = props;

    return (
      <favolink.footer
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-card__footer',
          styles.cardFooterBase,
          className,
        )}
        style={{
          ...assignInlineVars({
            [flexStyleVars.justifyContent]: justifyContent,
          }),
          ...style,
        }}
      >
        {children}
      </favolink.footer>
    );
  },
);
