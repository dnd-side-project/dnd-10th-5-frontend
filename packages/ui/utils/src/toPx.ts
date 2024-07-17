export function toPx(value: number | string | undefined) {
  if (typeof value === 'undefined') {
    return;
  }

  if (typeof value === 'number') {
    return value + 'px';
  }

  return value;
}
