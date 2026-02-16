import type { integer } from '../integer.ts';

/**
 * A workbook view.
 *
 * A workbook view is the display settings that apply to the entire workbook. Workbook view settings
 * include:
 *
 * - Active sheet
 * - Window size and position
 * - Window state (whether the window is maximised, minimised, etc)
 * - Scroll bar visibility
 *
 * Currently JSF does not include all available settings for a workbook.
 */
export type WorkbookView = {
  /**
   * Index to the active sheet in this workbook view. The default value is 0 (first sheet).
   *
   * @defaultValue 0
   */
  activeSheet?: integer
};
