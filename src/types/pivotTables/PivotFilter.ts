import type { integer } from '../integer.ts';
import type { PivotAutoFilterColumn } from './PivotAutoFilterColumn.ts';
import type { PivotFilterType } from './PivotFilterType.ts';

/**
 * An advanced filter applied to a pivot table field.
 *
 * Pivot filters implement features like "Show Top 10", "Show items where value > X",
 * and date-based filters.
 *
 * @group PivotTables
 */
export type PivotFilter = {
  /** Index of the pivot field this filter applies to. */
  fieldIndex: integer;
  /** The filter type. */
  type: PivotFilterType;
  /** Unique identifier for this filter within the pivot table. */
  id: integer;
  /**
   * Evaluation order for multiple filters. Lower values are evaluated first.
   *
   * @default 0
   */
  evalOrder?: integer;
  /** Member property field index (OLAP). */
  mpFld?: integer;
  /** Measure hierarchy index (OLAP). */
  iMeasureHier?: integer;
  /** Measure field index used for value-based filters. */
  iMeasureFld?: integer;
  /** Display name for the filter. */
  name?: string;
  /** Description of the filter. */
  description?: string;
  /** First string value for comparison-based filters. */
  stringValue1?: string;
  /** Second string value for between/not-between filters. */
  stringValue2?: string;
  /** Auto-filter criteria that implement this pivot filter. */
  autoFilter?: {
    /** The reference range for the auto-filter. */
    ref?: string;
    /** Filter columns with their criteria. */
    filterColumns?: PivotAutoFilterColumn[];
  };
};
