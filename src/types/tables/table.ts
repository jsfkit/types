import type { CellRange } from "../cell_range";
import type { TableColumn } from "./table_column";
import type { TableStyle } from "./table_style";

/**
 * A tabular data structure.
 *
 * The metadata contained in a table can be used to resolve structured references and evaluate
 * calculated columns.
 *
 * @see {@link https://support.microsoft.com/office/f5ed2452-2337-4f71-bed3-c8ae6d2b276e}
 */
export type Table = {
  /**
   * The name of the table. This name must adhere to the same restrictions as defined names in
   * Excel. In particular, it cannot contain spaces.
   */
  name: string;
  /**
   * The name of the sheet in which the table is located.
   */
  sheet: string;
  /**
   * A non-prefixed range reference to the area containing the table. The range shall include the
   * column headers.
   */
  ref: CellRange;
  /**
   * An array of column objects. They shall be ordered from left to right, so that the first column
   * corresponds to the leftmost column in the referenced range and the last column corresponds to
   * the rightmost column.
   */
  columns: TableColumn[];
  /**
   * A non-negative integer specifying the number of totals rows at the bottom of the table. Default
   * to 0 if absent.
   *
   * @default 0
   */
  totalsRowCount?: number;
  /**
   * A non-negative integer specifying the number of header rows at the top of the table. Default to
   * 1 if absent.
   * @default 1
   */
  headerRowCount?: number;
  /**
   * Presentation information for the table. When not present tables should be rendered using
   * `"TableStyleMedium2"` style with `showRowStripes` active.
   */
  style?: TableStyle;
};
