import type { integer } from '../integer.ts';
import type { PivotArea } from './PivotArea.ts';

/**
 * A custom format applied to a specific region of a pivot table.
 *
 * Each format pairs a {@link PivotFormat.pivotArea | pivotArea} that defines which cells the
 * format targets with an action indicating whether formatting is applied or blanked.
 *
 * Formats are the durable representation of user formatting on pivot output: a consumer
 * re-resolves each format's area against the current layout and overlays its differential style on
 * every repaint, so the formatting follows the targeted region (an item's data cells, the grand
 * total row, ...) when the pivot reshapes, rather than sticking to cell coordinates.
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
  /** The pivot table region this format applies to. */
  pivotArea: PivotArea;
  /**
   * Index of the differential style to overlay on the area's cells, into
   * {@link Workbook.diffStyles}. Only the properties present in that style apply; everything else
   * on a cell is left as-is. Absent for `action: 'blank'`.
   *
   * @see {@link Workbook.diffStyles}
   */
  dxfId?: integer;
};
