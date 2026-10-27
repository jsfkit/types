import type { CellId } from '../CellId.ts';
import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';

/**
 * Properties shared by every conditional formatting rule.
 *
 * @group ConditionalFormatting
 */
export type CFRuleBase = {
  /**
   * The cells the rule applies to. Relative references in any formula the rule holds are written as
   * seen from the top-left cell of the first range, and shift for each other cell the rule is
   * evaluated on.
   *
   * @example
   * An expression rule with `ref: ['B2:B10', 'D2:D10']` and `formula: 'A2>100'` is written as seen
   * from B2. For B2 it tests A2, for B5 it tests A5, and for D7 it tests C7.
   */
  ref: (CellRange | CellId)[];
  /**
   * Whether the rule was created on a pivot table.
   *
   * @default false
   */
  pivot?: boolean;
  /**
   * Evaluation order across the whole sheet. Lower values are evaluated first.
   */
  priority: integer;
};
