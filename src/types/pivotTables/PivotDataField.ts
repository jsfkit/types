import type { integer } from '../integer.ts';

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

/**
 * Controls how a data field's values are displayed relative to other values. For example,
 * `'percentOfTotal'` displays each value as a percentage of the grand total.
 *
 * The first 9 values (`'normal'` through `'index'`) are the standard set. The remaining values
 * (`'percentOfParentRow'` through `'rankDescending'`) are
 * {@link https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/2c5dee00-eff2-4b22-92b6-0738acd4475e | [MS-XLSX]}
 * extensions.
 *
 * @group PivotTables
 */
export type PivotShowDataAs =
  'normal' |
  'difference' |
  'percent' |
  'percentDiff' |
  'runTotal' |
  'percentOfRow' |
  'percentOfCol' |
  'percentOfTotal' |
  'index' |
  'percentOfParentRow' |
  'percentOfParentCol' |
  'percentOfParent' |
  'percentOfRunningTotal' |
  'rankAscending' |
  'rankDescending';

/**
 * Describes a data field in a pivot table. Data fields define the values that are aggregated and
 * displayed in the data area of the pivot table.
 *
 * @group PivotTables
 */
export type PivotDataField = {
  /**
   * The display name of the data field (e.g. "Sum of Revenue"). Derivable from the field name
   * and aggregation function, but Excel always writes it.
   */
  name?: string;
  /** Index into the pivot table's {@link PivotField} array (and the cache's field array). */
  fieldIndex: integer;
  /**
   * The aggregation function to apply. Not related to row/column subtotals configured
   * via {@link PivotField.subtotalFunctions}.
   *
   * @default 'sum'
   */
  subtotal?: PivotDataFieldAggregation;
  /**
   * How to display the aggregated values.
   *
   * @default 'normal'
   */
  showDataAs?: PivotShowDataAs;
  /**
   * The index of the base field used for "show data as" calculations (e.g. percent difference).
   * Only meaningful when {@link showDataAs} is set to a relative calculation mode.
   *
   * @default -1
   */
  baseField?: integer;
  /**
   * The index of the base item used for "show data as" calculations. Only meaningful when
   * {@link showDataAs} is set to a relative calculation mode.
   *
   * @default 1048832
   */
  baseItem?: integer;
  /**
   * The number format ID for this data field's values (an index into the workbook's format table).
   *
   * @default 0
   */
  numFmtId?: integer;
};
