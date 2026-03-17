/**
 * A shared item value in a pivot cache field. Each item represents a unique value found in the
 * source data for that field.
 *
 * A cache may contain items which longer appear in the source data, marked with `u: true`.
 *
 * @group PivotTables
 */
export type PivotCacheSharedItem =
  PivotCacheSharedItemStr |
  PivotCacheSharedItemNum |
  PivotCacheSharedItemBool |
  PivotCacheSharedItemDate |
  PivotCacheSharedItemErr |
  PivotCacheSharedItemNil;

/** A string shared item. @group PivotTables */
export type PivotCacheSharedItemStr = { t: 's'; v: string };
/** A numeric shared item. @group PivotTables */
export type PivotCacheSharedItemNum = { t: 'n'; v: number };
/** A boolean shared item. @group PivotTables */
export type PivotCacheSharedItemBool = { t: 'b'; v: boolean };
/** A date shared item (ISO 8601 string). @group PivotTables */
export type PivotCacheSharedItemDate = { t: 'd'; v: string };
/** An error shared item (e.g. `"#REF!"`). @group PivotTables */
export type PivotCacheSharedItemErr = { t: 'e'; v: string };
/** An empty/missing shared item. @group PivotTables */
export type PivotCacheSharedItemNil = { t: 'z' };
