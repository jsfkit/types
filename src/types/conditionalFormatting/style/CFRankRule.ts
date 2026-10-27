import type { integer } from '../../integer.ts';
import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose values are among the highest or lowest in `ref`, depending on `direction`.
 * When `percent` is `true`, `rank` is a percentage of the cells in `ref` rather than a count.
 *
 * @group ConditionalFormatting
 */
export type CFRankRule = CFStyleRuleBase & {
  type: 'rank';
  /**
   * How many cells to format. Either a count (default) or a percentage of the cells (when `percent`
   * is `true`).
   *
   * When `percent` is `true` the maximum is 100.
   *
   * @min 1
   * @max 1000
   */
  rank: integer;
  /**
   * Whether `rank` is a percentage of the cell count rather than a count.
   *
   * @default false
   */
  percent?: boolean;
  /**
   * Whether to take the highest values (when `direction` is `top`) or the lowest values (when
   * `direction` is `bottom`).
   *
   * @default "top"
   */
  direction?: 'top' | 'bottom';
};
