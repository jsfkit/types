import type { CellValueType } from './cell_value_type';
import type { Comment } from './comment';
import type { integer } from './integer';

/**
 * Data table configuration, present on the master cell of a data table range.
 * Represents an Excel What-If Analysis data table.
 */
export type DataTable = {
  /** Range of cells the data table manages (e.g., "D3:D5") */
  ref: string;
  /** Primary input cell reference to substitute */
  r1: string;
  /** Secondary input cell reference, for 2D data tables */
  r2?: string;
  /** Whether one-dimensional data table is a row (true) or a column (false/absent) */
  dtr?: boolean;
  /** Whether this is a two-dimensional data table */
  dt2D?: boolean;
};

/**
 * A spreadsheet cell.
 */
export type Cell = {
  /**
   * The value of the cell. The result of a calculation if the cell has a formula, otherwise safe to
   * assume that it's user-entered.
   *
   * @default null
   */
  v?: string | null | number | boolean;
  /**
   * Cell formula expression. When the value is a string it will be a formula with A1-style
   * references. When the value is a number is an index to a formula in the workbook's `formulas`
   * array.
   *
   * @see {@link Workbook.formulas}
   */
  f?: string | integer;
  /** The range of enclosing array if the formula is an array formula. */
  F?: string;
  /**
   * Cell hyperlink. Must be a URL.
   */
  l?: string;
  /**
   * An index to a style in the workbook's `styles`.
   *
   * @see {@link Workbook.styles}
   * @default 0
   */
  s?: integer;
  /**
   * Comments associated with the cell.
   *
   * @deprecated Use a worksheet's {@link Worksheet.notes | notes} and {@link Worksheet.comments | threaded comments} instead.
   */
  c?: Comment[];
  /**
   * The type of the value contained in the cell. Cells with errors or dates must include this
   * property, but it's otherwise optional (the type can be inferred from the {@link Cell.v}
   * property).
   */
  t?: CellValueType;
  /** Data table configuration. Present on the master cell of a data table range. */
  dt?: DataTable;
};
