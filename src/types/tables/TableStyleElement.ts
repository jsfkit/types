import type { integer } from '../integer.ts';
import type { TableStyleElementType } from './TableStyleElementType.ts';

/**
 * The formatting of one region of a table or pivot table, within a
 * {@link TableStyleDefinition}.
 *
 * @group Workbooks
 */
export type TableStyleElement = {
  /** The table region this element's formatting applies to. */
  type: TableStyleElementType;
  /**
   * The number of consecutive rows or columns in each stripe band. Only meaningful for the
   * four stripe element types.
   *
   * @default 1
   */
  size?: integer;
  /**
   * Index of the differential style to overlay on the region's cells, into
   * {@link Workbook.diffStyles}. Only the properties present in that style apply; everything else
   * on a cell is left as-is. An element without a `dxfId` has no visual effect (a stripe element
   * may still carry a meaningful {@link size}).
   *
   * @see {@link Workbook.diffStyles}
   */
  dxfId?: integer;
};
