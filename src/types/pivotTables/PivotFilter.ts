import type { integer } from '../integer.ts';

/**
 * The type of a pivot table filter (OOXML `ST_PivotFilterType`).
 *
 * @group PivotTables
 */
export type PivotFilterType =
  // Aggregate types
  'unknown' | 'count' | 'percent' | 'sum' |
  // Caption comparisons
  'captionEqual' | 'captionNotEqual' |
  'captionBeginsWith' | 'captionNotBeginsWith' |
  'captionEndsWith' | 'captionNotEndsWith' |
  'captionContains' | 'captionNotContains' |
  'captionGreaterThan' | 'captionGreaterThanOrEqual' |
  'captionLessThan' | 'captionLessThanOrEqual' |
  'captionBetween' | 'captionNotBetween' |
  // Value comparisons
  'valueEqual' | 'valueNotEqual' |
  'valueGreaterThan' | 'valueGreaterThanOrEqual' |
  'valueLessThan' | 'valueLessThanOrEqual' |
  'valueBetween' | 'valueNotBetween' |
  // Date comparisons
  'dateEqual' | 'dateNotEqual' |
  'dateOlderThan' | 'dateOlderThanOrEqual' |
  'dateNewerThan' | 'dateNewerThanOrEqual' |
  'dateBetween' | 'dateNotBetween' |
  // Relative date periods
  'tomorrow' | 'today' | 'yesterday' |
  'nextWeek' | 'thisWeek' | 'lastWeek' |
  'nextMonth' | 'thisMonth' | 'lastMonth' |
  'nextQuarter' | 'thisQuarter' | 'lastQuarter' |
  'nextYear' | 'thisYear' | 'lastYear' |
  'yearToDate' |
  // Quarter filters
  'Q1' | 'Q2' | 'Q3' | 'Q4' |
  // Month filters
  'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' |
  'M7' | 'M8' | 'M9' | 'M10' | 'M11' | 'M12';

/**
 * A single criterion within a custom auto-filter, specifying an operator and comparison value
 * (OOXML `CT_CustomFilter`).
 *
 * @group PivotTables
 */
export type PivotCustomFilterCriterion = {
  operator?: 'lessThan' | 'lessThanOrEqual' | 'equal' | 'notEqual' |
    'greaterThanOrEqual' | 'greaterThan';
  val?: string;
};

/**
 * A filter column within an auto-filter, specifying the filter criteria for a single column
 * (simplified representation of OOXML `CT_FilterColumn`).
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

/**
 * An advanced filter applied to a pivot table field (OOXML `CT_PivotFilter`).
 *
 * Pivot filters implement features like "Show Top 10", "Show items where value > X",
 * and date-based filters.
 *
 * @group PivotTables
 */
export type PivotFilter = {
  /** Index of the pivot field this filter applies to. */
  fieldIndex: integer;
  /** The filter type. */
  type: PivotFilterType;
  /** Unique identifier for this filter within the pivot table. */
  id: integer;
  /**
   * Evaluation order for multiple filters. Lower values are evaluated first.
   *
   * @default 0
   */
  evalOrder?: integer;
  /** Member property field index (OLAP). */
  mpFld?: integer;
  /** Measure hierarchy index (OLAP). */
  iMeasureHier?: integer;
  /** Measure field index used for value-based filters. */
  iMeasureFld?: integer;
  /** Display name for the filter. */
  name?: string;
  /** Description of the filter. */
  description?: string;
  /** First string value for comparison-based filters. */
  stringValue1?: string;
  /** Second string value for between/not-between filters. */
  stringValue2?: string;
  /** Auto-filter criteria that implement this pivot filter. */
  autoFilter?: {
    /** The reference range for the auto-filter. */
    ref?: string;
    /** Filter columns with their criteria. */
    filterColumns?: PivotAutoFilterColumn[];
  };
};
