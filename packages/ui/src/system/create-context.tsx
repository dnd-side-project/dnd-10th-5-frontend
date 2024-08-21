import {
  type ReactNode,
  createContext as createReactContext,
  useMemo,
  useContext as useReactContext,
} from 'react';

export function createContext<T extends object | null>(
  rootComponentName: string,
  defaultValue?: T,
) {
  const Context = createReactContext<T | undefined>(defaultValue);

  function Provider(props: T & { children: ReactNode }) {
    const { children, ...context } = props;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => context, Object.values(context)) as T;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  Provider.displayName = rootComponentName + 'Provider';

  function useContext(consumerName: string) {
    const context = useReactContext(Context);

    if (context) return context;

    if (defaultValue !== undefined) return defaultValue;

    const error = new Error(
      `\`${consumerName}\` must be used within \`${rootComponentName}\``,
    );

    error.name = 'ContextError';
    Error.captureStackTrace(error, useContext);

    throw error;
  }

  return [Provider, useContext] as const;
}
