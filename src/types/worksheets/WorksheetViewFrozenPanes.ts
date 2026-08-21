import type { CellId } from '../CellId.ts';
import type { integer } from '../integer.ts';

/**
 * Frozen pane configuration for a worksheet view.
 *
 * Freezing divides a sheet into two or four regions, each called a pane. Two panes can be divided
 * horizontally or vertically, four panes divides a sheet into quadrants. All but one of the panes
 * is frozen (rows and columns are locked in place), and the panes' rows and columns remain visible
 * while you scroll.  The final pane scrolls as usual.
 *
 * Frozen panes (aka freeze panes) are most commonly used to freeze a table's header rows/columns in
 * place.
 *
 * - When {@link WorksheetViewFrozenPanes.columns} is non-zero and {@link
 *   WorksheetViewFrozenPanes.rows} is zero, a sheet has two panes split vertically
 * - When {@link WorksheetViewFrozenPanes.rows} is non-zero and {@link
 *   WorksheetViewFrozenPanes.columns} is zero, a sheet has two panes split horizontally
 * - When both {@link WorksheetViewFrozenPanes.columns} and {@link WorksheetViewFrozenPanes.rows}
 *   are non-zero, a sheet has four panes split into quadrants
 *
 * @group Workbooks
 */
export type WorksheetViewFrozenPanes = {
  // Discriminator to allow future support for split panes.
  type: 'frozen';
  /**
   * Vertical position of the split between the panes. Indicates the number of columns visible in
   * the leading pane.
   *
   * @defaultValue 0
   */
  columns?: integer;
  /**
   * Horizontal position of the split between the panes. Indicates the number of rows visible in the
   * top pane.
   *
   * @defaultValue 0
   */
  rows?: integer;
  /**
   * Cell visible at the top leading edge of the scrollable pane. Essentially the scroll position of
   * the non-frozen pane.
   */
  firstVisibleCell?: CellId;
  /**
   * The pane that has focus.
   *
   * "Start" means "left-most" in language written left-to-right, "right-most" in languages written
   * right-to-left.
   *
   * "End" means "right-most" in language written left-to-right, "left-most" in languages written
   * right-to-left.
   *
   * @defaultValue "topStart"
   */
  activePane?: 'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd';
};
