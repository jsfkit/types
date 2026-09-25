/**
 * The aggregation function applied to a data field's values.
 * These correspond to Excel counterpart functions in the following way:
 *
 * | Value | Function | Description
 * |--- |--- |---
 * | `average` | AVERAGE | Calculates the average (mean).
 * | `count` | COUNT | Counts the number of values that are numbers.
 * | `countA` | COUNTA | Counts the number of values that are not "empty".
 * | `max` | MAX | Finds the largest value
 * | `min` | MIN | Finds the smallest value
 * | `product` | PRODUCT | Multiplies all numbers into a total.
 * | `stdDev` | STDDEV | Estimates standard deviation based on a sample.
 * | `stdDevP` | STDEV.P | Calculates standard deviation based on the entire population.
 * | `sum` | SUM | Adds all numbers into a total.
 * | `var` | VAR | Estimates variance based on a sample.
 * | `varP` | VAR.P | Calculates variance based on the entire population.
 *
 * @group PivotTables
 */
export type PivotDataFunction =
  'sum' |
  'count' |
  'average' |
  'max' |
  'min' |
  'product' |
  'countNums' |
  'stdDev' |
  'stdDevP' |
  'var' |
  'varP';
