import type { Cell } from './cell';
import type { CellId } from './cell_id';

/**
 * A simple container sheet for cell values within an external workbook.
 */
export type ExternalWorksheet = {
  /**
   * Name of the worksheet.
   */
  name: string;
  /**
   * The cells belonging to the worksheet that have any data attached.
   *
   * Typically, these will have only values and calculation directives attached as they will not
   * be rendered by a spreadsheet application.
   */
  cells: Record<CellId, Cell>;
};
