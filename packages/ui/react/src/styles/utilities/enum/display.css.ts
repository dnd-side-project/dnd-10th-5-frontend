import { styleVariants } from '@vanilla-extract/css';

export const display = styleVariants({
  block: { display: 'block' },
  inline: { display: 'inline' },
  inlineBlock: { display: 'inline-block' },
  flex: { display: 'flex' },
  inlineFlex: { display: 'inline-flex' },
  grid: { display: 'grid' },
  inlineGrid: { display: 'inline-grid' },
  none: { display: 'none' },
});
