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
   * The cells the rule applies to. The rule's formulas are written for the top-left cell of the
   * smallest rectangle that contains every range in `ref`. For every other cell, relative
   * references shift by that cell's distance from the top-left cell.
   *
   * @example
   * A formula rule has `ref: ['B2:B10']` and `formula: 'A2>100'`. The formula is written for B2,
   * and A2 is one column to the left of B2. Each cell's formula therefore refers to the cell one
   * column to its left:
   *
   * - B2: `A2>100`
   * - B3: `A3>100`
   * - B10: `A10>100`
   *
   * @example
   * A formula rule has `ref: ['D5:D10', 'B2:B4']` and `formula: 'A2>100'`. The smallest rectangle
   * that contains both ranges is B2:D10, so the formula is written for B2, not D5. Each cell's
   * formula refers to the cell one column to its left:
   *
   * - B2: `A2>100`
   * - B4: `A4>100`
   * - D7: `C7>100`
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
