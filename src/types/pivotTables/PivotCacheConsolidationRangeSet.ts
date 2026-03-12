import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';

/**
 * One of the source ranges in a consolidation-source pivot cache.
 *
 * @group PivotTables
 */
export type PivotCacheConsolidationRangeSet = {
  /** The A1-style range reference. */
  ref?: CellRange;
  /** The sheet containing this range. */
  sheet?: string;
  /** Index into the first page field's items. */
  i1?: integer;
  /** Index into the second page field's items. */
  i2?: integer;
  /** Index into the third page field's items. */
  i3?: integer;
  /** Index into the fourth page field's items. */
  i4?: integer;
};
