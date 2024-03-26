import {
  type Context,
  type Provider,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

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
