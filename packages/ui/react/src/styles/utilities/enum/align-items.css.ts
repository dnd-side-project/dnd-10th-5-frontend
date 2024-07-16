import { styleVariants } from '@vanilla-extract/css';

export const alignItems = styleVariants({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  baseline: { alignItems: 'baseline' },
  stretch: { alignItems: 'stretch' },
});
