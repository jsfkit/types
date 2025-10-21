import type { PixelValue } from './pixel_value';

/**
 * A size of a UI-grid measure over a range of items.
 *
 * GridSize information is run-length encoded. The start and end attributes indicate the range of
 * items that the `size` and `s` attributes affect. The range is expressed using integers, where
 * 1 corresponds to column A or row 1.
 *
 * GridSize may have a style-index (`s`) attribute like individual cells. The styling information on
 * the column should be used for all cells that are not present in the sheet's cell collection.
 */
export type GridSize = {
  /** A 1-based inclusive start index. */
  start: number;
  /** A 1-based inclusive end index. */
  end: number;
  /** The size of the grid item in pixels. */
  size: PixelValue;
  /** An index to a style in the workbook styles. */
  s?: number;
};
