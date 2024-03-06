import { type ComponentPropsWithRef, type ElementType } from 'react';

export type DOMElements = keyof JSX.IntrinsicElements;

export type RightJoinProps<
  OriginalProps extends object,
  OverrideProps extends object,
> = Omit<OriginalProps, keyof OverrideProps> & OverrideProps;

export type PropsMergeWithAs<
  ComponentProps extends object,
  AsComponentProps extends object,
  Props extends object,
  AsComponent extends ElementType,
> = {
  as?: AsComponent;
} & (
  | RightJoinProps<AsComponentProps, Props>
  | RightJoinProps<ComponentProps, Props>
);

export type ComponentWithAs<
  Component extends ElementType,
  Props extends object,
> = {
  <AsComponent extends ElementType>(
    props: PropsMergeWithAs<
      ComponentPropsWithRef<Component>,
      ComponentPropsWithRef<AsComponent>,
      Props,
      AsComponent
    >,
  ): JSX.Element;
};
