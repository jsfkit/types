/**
 * A threshold at an explicit value. `type` defines how `value` is interpreted:
 *
 * - `number`: a value in the same units as the cells in the range
 * - `percent`: a percentage, from 0 to 100, of the way from the lowest value in the range to the
 *   highest
 * - `percentile`: a percentile, from 0 to 100, of the values in the range
 * - `formula`: a formula (no leading `=`) whose result is read in the same units as the cells
 *
 * For `percent` and `percentile`, `value` may also be a formula (no leading `=`) whose result is
 * read as the percentage or percentile. For example, `{ type: 'percent', value: '$B$1' }` uses
 * the number in B1 as the percentage.
 *
 * @group ConditionalFormatting
 */
export type CFValueThreshold =
  { type: 'number'; value: number } |
  { type: 'percent' | 'percentile'; value: number | string } |
  { type: 'formula'; value: string };
