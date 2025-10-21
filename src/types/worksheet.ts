import type { Cell } from './cell';
import type { CellId } from './cell_id';
import type { GridSize } from './grid_size';
import type { WorksheetDefaults } from './worksheet_defaults';

/** Worksheet is visible. */
export type WORKSHEET_VISIBLE = 0;
/** Worksheet is hidden. */
export type WORKSHEET_HIDDEN = 1;
/**
 * Worksheet is _very_ hidden.
 *
 * @see {@link https://exceloffthegrid.com/make-excel-sheets-very-hidden/}
 */
export type WORKSHEET_VERY_HIDDEN = 2;

/**
 * A rectangle of cells. A sheet within a spreadsheet.
 */
export type Worksheet = {
  /** Name of the worksheet. */
  name: string;
  /** The cells belonging to the worksheet that have some data attached. */
  cells: Record<CellId, Cell>;
  /** Widths and styles of the columns in the worksheet. */
  columns: GridSize[];
  /** Heights and styles of the rows in the worksheet. */
  rows: GridSize[];
  /** Ranges that capture which cells have been merged. */
  merges: string[];
  /** A collection of default properties that apply to cells, rows, or columns in the worksheet. */
  defaults: WorksheetDefaults;
  /**
   * Whether or not the sheet should be shown to a user in a UI displaying the workbook.
   */
  hidden?: WORKSHEET_VISIBLE | WORKSHEET_HIDDEN | WORKSHEET_VERY_HIDDEN;
  /** Indicates whether a hairline-grid should be drawn when displaying the sheet. */
  showGridLines?: boolean;
};
