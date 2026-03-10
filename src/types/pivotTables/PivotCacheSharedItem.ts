import type { CellValueType } from '../CellValueType.ts';

/**
 * A shared item value in a pivot cache field. Each item represents a unique value found in the
 * source data for that field.
 *
 * @group PivotTables
 */
export type PivotCacheSharedItem = {
  /** The data type of this shared item. Uses the same single-character codes as {@link CellValueType}. */
  t: CellValueType;
  /** The item's value. Absent when `t` is `'z'` (empty/missing). */
  v?: string | number | boolean;
};
