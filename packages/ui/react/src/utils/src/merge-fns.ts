type AnyFunction<T = any> = (...args: T[]) => any;

export function mergeFns<T extends AnyFunction>(...fns: (T | undefined)[]) {
  return (...args: Parameters<T>) => {
    fns.forEach((fn) => {
      fn?.(...args);
    });
  };
}
