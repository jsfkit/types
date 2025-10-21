import type { CellValueType } from './cell_value_type';
import type { Comment } from './comment';
import type { Integer } from './integer';

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
   */
  f?: string | Integer;
  /** The range of enclosing array if the formula is an array formula. */
  F?: string;
  /**
   * Cell hyperlink. Must be a URL.
   */
  l?: string;
  /**
   * An index to a style in the workbook's `styles`.
   *
   * @default 0
   */
  s?: Integer;
  /**
   * Comments associated with the cell.
   */
  c?: Comment[];
  /**
   * The type of the value contained in the cell. Cells with errors or dates must include this
   * property, but it's otherwise optional (the type can be inferred from the `v` property).
   */
  t?: CellValueType;
};
