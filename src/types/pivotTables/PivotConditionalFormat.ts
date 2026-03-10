import type { integer } from '../integer.ts';
import type { PivotArea } from './PivotArea.ts';

/**
 * The scope of conditional formatting applied to a pivot table.
 *
 * - `'selection'` — applies to the selected cells only.
 * - `'data'` — applies to all data field cells.
 * - `'field'` — applies to field intersections.
 *
 * @group PivotTables
 */
export type PivotConditionalFormatScope = 'selection' | 'data' | 'field';

/**
 * The rule type for conditional formatting in a pivot table.
 *
 * - `'none'` — no specific rule type.
 * - `'all'` — applies to all values.
 * - `'row'` — applies to row values.
 * - `'column'` — applies to column values.
 *
 * @group PivotTables
 */
export type PivotConditionalFormatType = 'none' | 'all' | 'row' | 'column';

/**
 * A conditional formatting rule applied to regions of a pivot table.
 *
 * @group PivotTables
 */
export type PivotConditionalFormat = {
  /**
   * The scope of this conditional format.
   *
   * @default 'selection'
   */
  scope?: PivotConditionalFormatScope;
  /**
   * The rule type.
   *
   * @default 'none'
   */
  type?: PivotConditionalFormatType;
  /** The priority of this conditional formatting rule (1-based). */
  priority: integer;
  /** The pivot table regions this conditional format applies to. */
  pivotAreas: PivotArea[];
};
