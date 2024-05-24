import {
  type ComponentPropsWithRef,
  type ElementType,
  type ReactElement,
} from 'react';

export type JsxElements = keyof JSX.IntrinsicElements;

export type PolymorphicProps = {
  as?: ElementType;
  asChild?: boolean;
};

export type RightJoinProps<
  OriginalProps extends object,
  OverrideProps extends object,
> = Omit<OriginalProps, keyof OverrideProps> & OverrideProps;

export type MergePolymorpicProps<
  ComponentProps extends object,
  AsComponentProps extends object,
  Props extends object,
  AsComponent extends ElementType,
> = {
  as?: AsComponent;
  asChild?: boolean;
} & (
  | RightJoinProps<AsComponentProps, Props>
  | RightJoinProps<ComponentProps, Props>
);

export type ComponentWithPolymorphic<
  Component extends ElementType,
  Props extends object,
> = {
  <AsComponent extends ElementType>(
    props: MergePolymorpicProps<
      ComponentPropsWithRef<Component>,
      ComponentPropsWithRef<AsComponent>,
      Props,
      AsComponent
    >,
  ): ReactElement;
};
