/**
 * The aggregation function applied to a data field's values.
 *
 * Beware of the `'count'` false cognate: here it means "count of non-empty values" (like the
 * COUNTA worksheet function), while in {@link PivotSubtotalFunction} `'count'` means "count of
 * numeric values" (like the COUNT worksheet function). The `'countNums'` value here corresponds
 * to COUNT.
 *
 * The population variants spell their trailing `p` in lowercase (`'stdDevp'`, `'varp'`), as
 * ST_DataConsolidateFunction does. {@link PivotSubtotalFunction} spells the same two functions
 * `'stdDevP'` and `'varP'`, after ST_ItemType.
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
