import { type StyleProps, createRawStyleProps } from '@favolink-ui/system';

export type FlexStyleProps = StyleProps<
  | 'alignItems'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'justifyContent'
>;

export const flexStyleProps = createRawStyleProps<FlexStyleProps>(
  'alignItems',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'justifyContent',
);
