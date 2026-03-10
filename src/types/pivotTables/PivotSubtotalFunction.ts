/**
 * The subtotal aggregation functions that can be applied to a pivot field.
 *
 * Beware of the `'count'` false cognate: here it means "count of numeric values" (like the COUNT
 * worksheet function), while in {@link PivotDataFieldAggregation} `'count'` means "count of
 * non-empty values" (like the COUNTA worksheet function).
 *
 * @group PivotTables
 */
export type PivotSubtotalFunction =
  'sum' |
  'countA' |
  'avg' |
  'max' |
  'min' |
  'product' |
  'count' |
  'stdDev' |
  'stdDevP' |
  'var' |
  'varP';
