import type { PivotGroupBy } from './PivotGroupBy.ts';

/**
 * Range grouping properties that define how a cache field's values are grouped into intervals.
 *
 * @group PivotTables
 */
export type PivotCacheRangePr = {
  /**
   * Whether the start value is determined automatically from source data.
   *
   * @default true
   */
  autoStart?: boolean;
  /**
   * Whether the end value is determined automatically from source data.
   *
   * @default true
   */
  autoEnd?: boolean;
  /**
   * The grouping unit.
   *
   * @default 'range'
   */
  groupBy?: PivotGroupBy;
  /** Start value for numeric range grouping. */
  startNum?: number;
  /** End value for numeric range grouping. */
  endNum?: number;
  /** Start date for date range grouping (ISO 8601 datetime string). */
  startDate?: string;
  /** End date for date range grouping (ISO 8601 datetime string). */
  endDate?: string;
  /**
   * The interval size for each group.
   *
   * @default 1
   */
  groupInterval?: number;
};
