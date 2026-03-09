import type { integer } from '../integer.ts';

/**
 * Describes a page (filter) field in a pivot table. Page fields allow the user to filter the
 * entire pivot table to show only data matching a selected item.
 *
 * @group PivotTables
 */
export type PivotPageField = {
  /** Index into the pivot table's {@link PivotField} array (and the cache's field array). */
  fieldIndex: integer;
  /**
   * The index of the currently selected item in the field's items list. When absent, all items are
   * shown (no filter applied).
   */
  selectedItem?: integer;
  /**
   * An optional name override for the page field (OOXML `name` attribute). Identifies the field
   * in formulas and programmatic access (e.g. GETPIVOTDATA).
   */
  name?: string;
  /**
   * Display caption for the page field (OOXML `cap` attribute). Shown in the pivot table UI but
   * not used for programmatic field identification.
   */
  caption?: string;
  /**
   * Hierarchy index for OLAP page fields (OOXML `hier` attribute).
   *
   * @default -1
   */
  hierarchy?: integer;
};
