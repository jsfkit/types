import type { integer } from '../integer.ts';

/**
 * Describes the position of the pivot table's header and data areas within its output range
 * ({@link PivotTable.ref | ref}).
 *
 * All offsets are 0-based from the top-left cell of {@link PivotTable.ref | ref}. The difference
 * `firstDataRow - firstHeaderRow` equals the number of column-field header rows.
 *
 * @group PivotTables
 */
export type PivotTableLocation = {
  /**
   * 0-based row offset from the top of {@link PivotTable.ref | ref} to the first row of the body
   * area (column-field items, or data if there are no column fields).
   */
  firstHeaderRow: integer;
  /**
   * 0-based row offset from the top of {@link PivotTable.ref | ref} to the first row containing
   * data values.
   */
  firstDataRow: integer;
  /**
   * 0-based column offset from the left of {@link PivotTable.ref | ref} to the first column
   * containing data values.
   */
  firstDataCol: integer;
  /**
   * Number of rows occupied by the page field area (see {@link PivotTable | PivotTable's type
   * description}). Layout depends on {@link PivotTable.pageOverThenDown | pageOverThenDown} and
   * {@link PivotTable.pageWrap | pageWrap}.
   *
   * @default 0
   */
  rowPageCount?: integer;
  /**
   * Number of columns occupied by the page field area (see {@link PivotTable | PivotTable's type
   * description}). Layout depends on {@link PivotTable.pageOverThenDown | pageOverThenDown} and
   * {@link PivotTable.pageWrap | pageWrap}.
   *
   * @default 0
   */
  colPageCount?: integer;
};
