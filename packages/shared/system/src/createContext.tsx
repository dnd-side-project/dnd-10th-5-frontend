import {
  type Context,
  type Provider,
  type ReactNode,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

export type ContextProviderProps<ContextDefaultValue> = ContextDefaultValue & {
  children: ReactNode;
};

type CreateContextReturn<CreateContextDefaultValue> = [
  Provider<CreateContextDefaultValue>,
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

  return [Context.Provider, useContext, Context];
}
