import {
  type Context,
  type Provider,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

type CreatContextOptions<T> = {
  name?: string;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  defaultValue?: T;
};

type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>];

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext<T>(options: CreatContextOptions<T>) {
  const {
    name,
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
    defaultValue,
  } = options;

  const Context = createReactContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);

    if (!context) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName),
      );

      error.name = 'ContextError';
      Error.captureStackTrace(error, useContext);

      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
