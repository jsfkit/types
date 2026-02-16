import type { Cell } from './Cell.ts';
import type { CellId } from './CellId.ts';

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
  /**
   * Indicates that the sheet data could not be refreshed/fetched from the external workbook.
   * In XLSX, this corresponds to the refreshError="1" attribute on sheetData.
   */
  refreshError?: boolean;
};
