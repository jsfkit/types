import type { Cell } from './Cell.ts';
import type { CellId } from './CellId.ts';

/**
 * A simple container sheet for cell values within an external workbook.
 *
 * @group Workbooks
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
  /**
   * Indicates that no `<sheetData>` element was recorded for this sheet in the source
   * workbook, even though the sheet appears in `<sheetNames>`.
   *
   * - `undefined` (the common case) corresponds to `<sheetData sheetId=N>`
   * - `true` corresponds to `<sheetData>` element being missing for this sheet.
   *
   * The distinction matters because `<sheetData sheetId="N"/>` (empty but present) and
   * the absence of any `<sheetData>` element are distinct states under OOXML.
   *
   * When `noSheetData` is `true`, `cells` is expected to be empty (`{}`) and
   * `refreshError` unset. The jsdoc documents the invariant; the type doesn't enforce it,
   * and callers setting both risk silently losing `cells`/`refreshError` on emit.
   */
  noSheetData?: boolean;
};
