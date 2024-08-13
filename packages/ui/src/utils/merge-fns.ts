export function mergeFns<T extends (...args: any[]) => any>(
  ...fns: (T | undefined)[]
) {
  return function mergedFns(...args: Parameters<T>) {
    fns.forEach((fn) => {
      fn?.(...args);
    });
  };
}
