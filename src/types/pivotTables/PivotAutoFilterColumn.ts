import type { integer } from '../integer.ts';
import type { PivotCustomFilterCriterion } from './PivotCustomFilterCriterion.ts';

/**
 * A filter column within an auto-filter, specifying the filter criteria for a single column.
 *
 * @group PivotTables
 */
export type PivotAutoFilterColumn = {
  /** The 0-based column index within the auto-filter range. */
  colId: integer;
  /** Top-10 filter: show top/bottom N items by count, percent, or sum. */
  top10?: {
    /**
     * Whether to show the top items (true) or bottom items (false).
     *
     * @default true
     */
    top?: boolean;
    /**
     * Whether filtering is by percent (true) or count (false).
     *
     * @default false
     */
    percent?: boolean;
    /** The number of items (or percent) to show. */
    val: number;
    /** The actual cutoff value used for filtering. */
    filterVal?: number;
  };
  /** Custom filter criteria (up to two conditions with AND/OR logic). */
  customFilters?: {
    /**
     * Whether the two filters are combined with AND (true) or OR (false).
     *
     * @default false
     */
    and?: boolean;
    filters: PivotCustomFilterCriterion[];
  };
};
