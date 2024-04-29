export function mergeRecords(...records: Record<string, unknown>[]) {
  return Object.assign({}, ...records) as Record<string, unknown>;
}
