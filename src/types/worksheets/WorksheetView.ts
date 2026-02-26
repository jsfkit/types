import type { CellId } from '../CellId.ts';
import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';
import type { WorksheetLayoutScales } from './WorksheetLayoutScales.ts';

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
 *
 * @group Workbooks
 */
export type WorksheetView = {
  /**
   * The id of the workbook view this worksheet view belongs to.
   *
   * This is a zero-based index of the workbook view, as stored in the {@link Workbook.views} array.
   *
   * Within a single worksheet, each view must reference a distinct workbook view (i.e. no two views
   * in the same worksheet can share the same `workbookView` id). However, views from different
   * worksheets may reference the same workbook view.
   */
  workbookView: integer;
  /** Cell that is selected by default when the sheet is visible. */
  activeCell?: CellId;
  /** Ranges of cells that are selected by default when the sheet is visible. */
  activeRanges?: CellRange[];
  /**
   * The layout used to display the worksheet.
   *
   * @defaultValue "normal"
   */
  activeLayout?: 'normal' | 'pageLayout' | 'pageBreakPreview';
  /**
   * Scale (aka zoom level, aka magnification) applied when displaying a worksheet. Each different
   * layout has its own scale.
   */
  layoutScales?: WorksheetLayoutScales;
};
