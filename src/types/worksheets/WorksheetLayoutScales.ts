import type { integer } from '../integer.ts';

/**
 * Visual scale (aka zoom level, aka magnification) applied when displaying a worksheet.
 *
 * Each of the three layouts has its own scale. A scale is represented as a percentage, with `100`
 * (100%) being the default 1:1 scale. When a layout has no explicit scale, use 100%.
 *
 * @group Workbooks
 */
export type WorksheetLayoutScales = {
  /**
   * Zoom level for normal view.
   *
   * @min 10
   * @max 400
   * @defaultValue 100
   * */
  normal?: integer;
  /**
   * Zoom level for page layout view.
   *
   * @min 10
   * @max 400
   * @defaultValue 100
   */
  pageLayout?: integer;
  /**
   * Zoom level for page break preview (aka sheet layout view).
   *
   * @min 10
   * @max 400
   * @defaultValue 100
   */
  pageBreakPreview?: integer;
};
