// These names are a subset of the OOXML ST_ItemType enumeration (see PivotItemType for the full
// set), so PivotSubtotalFunction uses names like 'avg', 'countA', etc. These differ from the
// names in PivotDataFieldAggregation ('average', 'countNums', etc.) which come from the OOXML
// ST_DataConsolidateFunction enumeration — different OOXML constructs use different naming
// conventions.

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
