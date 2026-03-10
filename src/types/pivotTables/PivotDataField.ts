import type { integer } from '../integer.ts';
import type { PivotDataFieldAggregation } from './PivotDataFieldAggregation.ts';
import type { PivotShowDataAs } from './PivotShowDataAs.ts';

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
   * The aggregation function to apply (NB: not related to row/column subtotals configured
   * via {@link PivotField.subtotalFunctions}).
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
  /** The number format code for this data field's values (e.g. `"General"`, `"#,##0"`). */
  numFmt?: string;
};
