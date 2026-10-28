import type { integer } from '../../integer.ts';
import type { CFStyleRuleBase } from './CFStyleRuleBase.ts';

/**
 * Format cells whose values are among the highest or lowest in `ref`, depending on `direction`.
 *
 * @group ConditionalFormatting
 */
export type CFRankRule = CFStyleRuleBase & {
  type: 'rank';
  /**
   * How many cells to format, as a count or a percentage of the cells, depending on `unit`.
   *
   * When `unit` is `percent` the maximum is 100.
   *
   * @min 1
   * @max 1000
   */
  count: integer;
  /**
   * Whether `count` is a number of cells or a percentage of the cells in `ref`.
   *
   * @default "cells"
   */
  unit?: 'cells' | 'percent';
  /**
   * Whether to take the highest values (when `direction` is `top`) or the lowest values (when
   * `direction` is `bottom`).
   *
   * @default "top"
   */
  direction?: 'top' | 'bottom';
};
