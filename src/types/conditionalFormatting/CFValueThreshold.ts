/**
 * A threshold at an explicit value.
 *
 * @group ConditionalFormatting
 */
export type CFValueThreshold = {
  /**
   * Defines how `value` is interpreted:
   *
   * - `num`: a value in the same units as the cells in the range
   * - `percent`: a percentage, from 0 to 100, of the way from the lowest value in the range to the
   *   highest
   * - `percentile`: a percentile, from 0 to 100, of the values in the range
   * - `formula`: a value in the same units as the cells in the range, produced by a formula
   */
  type: 'num' | 'percent' | 'percentile' | 'formula';
  /**
   * The threshold value. A number is a literal value. A string is always a formula (no leading
   * `=`), whatever the `type`. The formula's result is used in place of a literal number and is
   * interpreted according to `type`. For example, `{ type: 'percent', value: '$B$1' }` uses the
   * number in B1 as the percentage.
   */
  value: number | string;
};
