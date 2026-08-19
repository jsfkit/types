import type { CellId } from '../CellId.ts';
import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';
import type { WorksheetLayoutScales } from './WorksheetLayoutScales.ts';
import type { WorksheetViewFrozenPanes } from './WorksheetViewFrozenPanes.ts';

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
   * Identifies which range within {@link WorksheetView.activeRanges} holds the cursor. Zero-based
   * index.
   *
   * Required when `activeRange` is not a single contiguous range. If this value is out of range,
   * use {@link WorksheetView.activeCell}.
   *
   * An active range index is required for cursor movement. Spreadsheet software generally allows a
   * user to press Tab to cycle though selected cells, cycling through cells in the currently
   * selected range before moving on to the next range selection. If cell ranges overlap (e.g. A1:E5
   * and D4:G8), it would be ambiguous which range is active when cell D4 is the selected cell. This
   * property removes that ambiguity.
   *
   * @defaultValue 0
   */
  activeRangeIndex?: integer;
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
  /** Indicates whether a hairline-grid should be drawn when displaying the worksheet. */
  showGridLines?: boolean;
  /**
   * Frozen panes.
   *
   * Freezing divides a sheet into two or four regions, each called a pane. All but one of the panes
   * is frozen (their rows and columns are locked in place), and the panes' rows and columns remain
   * visible while scrolling. The final pane scrolls as usual.
   */
  panes?: WorksheetViewFrozenPanes;
};
