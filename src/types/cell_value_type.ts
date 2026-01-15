/**
 * Defines the type of a value contained within a cell.
 *
 * | Value | Type    | Notes                                                                    |
 * |-------|---------|--------------------------------------------------------------------------|
 * | `b`   | Boolean |                                                                          |
 * | `e`   | Error   | Formula error (cell value is the error code as a string)                 |
 * | `n`   | Number  | Either integer or float                                                  |
 * | `d`   | Date    | The {@link Cell.s | cell style} formats the integer cell value as a date |
 * | `s`   | Text    |                                                                          |
 * | `z`   | Empty   | Cell is empty                                                            |
 */
export type CellValueType =
  'b' |
  'e' |
  'n' |
  'd' |
  's' |
  'z';
