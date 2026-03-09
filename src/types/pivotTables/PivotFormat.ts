import type { integer } from '../integer.ts';
import type { PivotArea } from './PivotArea.ts';

/**
 * A custom format applied to a specific region of a pivot table (OOXML `CT_Format`).
 *
 * Each format pairs a differential formatting record (referenced by {@link dxfId}) with
 * a {@link pivotArea} that defines which cells the format targets.
 *
 * @group PivotTables
 */
export type PivotFormat = {
  /**
   * Whether this format applies formatting or represents a blank override.
   *
   * @default 'formatting'
   */
  action?: 'formatting' | 'blank';
  /** Index into the workbook's differential formatting (dxf) table. */
  dxfId?: integer;
  /** The pivot table region this format applies to. */
  pivotArea: PivotArea;
};
