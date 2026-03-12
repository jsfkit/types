import type { integer } from '../integer.ts';
import type { PivotArea } from './PivotArea.ts';
import type { PivotConditionalFormatScope } from './PivotConditionalFormatScope.ts';
import type { PivotConditionalFormatType } from './PivotConditionalFormatType.ts';

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
