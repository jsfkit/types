import type { CellId } from '../cell_id';
import type { CellRange } from '../cell_range';
import type { integer } from '../integer';

/**
 * A worksheet view.
 *
 * A worksheet view is a display configuration for a particular worksheet. Worksheet view settings
 * can include:
 *
 * - Active cell
 * - Selected ranges
 * - View type (normal, page layout, or page break layout)
 * - Zoom level
 *
 * Currently JSF does not include all available settings for a worksheet.
 */
export type WorksheetView = {
  /**
   * The id of the workbook view this worksheet view belongs to.
   *
   * This is a zero-based index of the workbook view, as stored in the {@link Workbook.views} array.
   */
  workbookView: integer;
  /** Cell that is selected by default when the sheet is visible. */
  activeCell?: CellId;
  /** Range of cells that are selected by default when the sheet is visible. */
  activeRange?: CellRange;
};
