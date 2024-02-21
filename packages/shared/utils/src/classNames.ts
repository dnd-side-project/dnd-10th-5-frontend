export function classNames(...classNames: unknown[]) {
  return classNames.filter(Boolean).join(' ');
}
