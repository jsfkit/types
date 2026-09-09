/**
 * The aggregation function applied to a data field's values.
 *
 * Beware of the `'count'` false cognate: here it means "count of non-empty values" (like the
 * COUNTA worksheet function), while in {@link PivotSubtotalFunction} `'count'` means "count of
 * numeric values" (like the COUNT worksheet function). The `'countNums'` value here corresponds
 * to COUNT.
 *
 * Unlike {@link PivotSubtotalFunction}, the population standard deviation and variance values
 * here use a lowercase trailing `p`: `'stdDevp'` and `'varp'`, rather than
 * `'stdDevP'` and `'varP'`.
 *
 * @group PivotTables
 */
export type PivotDataFieldAggregation =
  'sum' |
  'count' |
  'average' |
  'max' |
  'min' |
  'product' |
  'countNums' |
  'stdDev' |
  'stdDevp' |
  'var' |
  'varp';
