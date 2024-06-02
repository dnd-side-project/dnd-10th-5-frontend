import {
  type Context,
  type Provider,
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

type CreatContextOptions<CreateContextDefaultValue> = {
  name?: string;
  hookName?: string;
  providerName?: string;
  errorEessage?: string;
  defaultValue?: CreateContextDefaultValue;
};

type CreateContextReturn<CreateContextDefaultValue> = [
  Provider<CreateContextDefaultValue>,
  () => CreateContextDefaultValue,
  Context<CreateContextDefaultValue>,
];

function getErrorMessage(hook: string, provider: string) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}

export function createContext<CreateContextDefaultValue>(
  options: CreatContextOptions<CreateContextDefaultValue>,
) {
  const {
    name,
    hookName = 'useContext',
    providerName = 'Provider',
    errorEessage,
    defaultValue,
  } = options;

  const Context = createReactContext<CreateContextDefaultValue | undefined>(
    defaultValue,
  );

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);

    if (!context) {
      const error = new Error(
        errorEessage ?? getErrorMessage(hookName, providerName),
      );

      error.name = 'ContextError';
      Error.captureStackTrace(error, useContext);

      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<CreateContextDefaultValue>;
}
