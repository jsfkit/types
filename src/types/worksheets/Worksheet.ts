import type { Cell } from '../Cell.ts';
import type { CellId } from '../CellId.ts';
import type { GridSize } from '../GridSize.ts';
import type { Note } from '../Note.ts';
import type { ThreadedComment } from '../comments/index.ts';
import type { Drawing } from '../dml/Drawing.ts';
import type { WorksheetDefaults } from './WorksheetDefaults.ts';
import type { WorksheetView } from './WorksheetView.ts';

/**
 * A rectangle of cells. A sheet within a spreadsheet.
 */
export type Worksheet = {
  /** Name of the worksheet. */
  name: string;
  /** The cells belonging to the worksheet that have some data attached. */
  cells: Record<CellId, Cell>;
  comments?: ThreadedComment[];
  notes?: Note[];
  /** Widths and styles of the columns in the worksheet. */
  columns?: GridSize[];
  /** Heights and styles of the rows in the worksheet. */
  rows?: GridSize[];
  /** Ranges that capture which cells have been merged. */
  merges?: string[];
  /** A collection of default properties that apply to cells, rows, or columns in the worksheet. */
  defaults?: WorksheetDefaults;
  /**
   * Whether or not the sheet should be shown to a user in a UI displaying the workbook.
   *
   * - 0 = sheet is visible
   * - 1 = sheet is hidden
   * - 2 = sheet is "very hidden"
   *
   * @see {@link https://exceloffthegrid.com/make-excel-sheets-very-hidden/}
   */
  hidden?: 0 | 1 | 2;
  /** Indicates whether a hairline-grid should be drawn when displaying the sheet. */
  showGridLines?: boolean;
  /** The different display configurations saved for the worksheet. */
  views?: WorksheetView[];
  /** A list of drawings that appear in this worksheet. */
  drawing?: Drawing[];
};
