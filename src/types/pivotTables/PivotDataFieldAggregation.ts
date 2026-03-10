/**
 * The aggregation function applied to a data field's values.
 *
 * Beware of the `'count'` false cognate: here it means "count of non-empty values" (like the
 * COUNTA worksheet function), while in {@link PivotSubtotalFunction} `'count'` means "count of
 * numeric values" (like the COUNT worksheet function). The `'countNums'` value here corresponds
 * to COUNT.
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
  'stdDevP' |
  'var' |
  'varP';
