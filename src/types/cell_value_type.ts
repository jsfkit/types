/** Blank stub cell that should be ignored by data processors. */
export type CELL_VALUE_BLANK = 'z';
/** Boolean cell value. */
export type CELL_VALUE_BOOLEAN = 'b';
/** Date cell value. */
export type CELL_VALUE_DATE = 'd';
/** Cell error value. */
export type CELL_VALUE_ERROR = 'e';
/** Numeric cell value. */
export type CELL_VALUE_NUMBER = 'n';
/** Text cell value. */
export type CELL_VALUE_STRING = 's';

/**
 * Defines the type of a value contained within a cell.
 */
export type CellValueType =
  | CELL_VALUE_BLANK |
  CELL_VALUE_BOOLEAN |
  CELL_VALUE_DATE |
  CELL_VALUE_ERROR |
  CELL_VALUE_NUMBER |
  CELL_VALUE_STRING;
