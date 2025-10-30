import type { PixelValue } from '../pixel_value';

/**
 * A collection of default properties that apply to cells, rows, or columns in the worksheet.
 */
export type WorksheetDefaults = {
  /** Default width of the UI-grid column. */
  colWidth: PixelValue;
  /** Default height of the UI-grid height. */
  rowHeight: PixelValue;
};
