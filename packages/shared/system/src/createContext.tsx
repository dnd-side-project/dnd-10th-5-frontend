import {
  type Context,
  type ReactNode,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

export type ContextProviderProps<ContextDefaultValue> = ContextDefaultValue & {
  children: ReactNode;
};

type CreateContextReturn<CreateContextDefaultValue> = [
  (props: ContextProviderProps<CreateContextDefaultValue>) => JSX.Element,
  () => CreateContextDefaultValue,
  Context<CreateContextDefaultValue>,
];

export function createContext<CreateContextDefaultValue>(
  defaultValue: CreateContextDefaultValue,
): CreateContextReturn<CreateContextDefaultValue> {
  const Context = createReactContext<CreateContextDefaultValue>(defaultValue);

  function useContext() {
    const context = useReactContext(Context);

    return context;
  }

  function ContextProvider(
    props: ContextProviderProps<CreateContextDefaultValue>,
  ) {
    const { children, ...restProps } = props;

    return (
      <Context.Provider value={restProps as CreateContextDefaultValue}>
        {children}
      </Context.Provider>
    );
  }

  return [ContextProvider, useContext, Context];
}
