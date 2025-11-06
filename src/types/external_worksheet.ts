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
   * Typically, these will have only values attached, as external worksheet cells serve purely as
   * inputs to formulas in other sheets.
   */
  cells: Record<CellId, Cell>;
};
