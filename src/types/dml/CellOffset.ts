import type { EmuValue } from './EmuValue.ts';

/**
 * Specifies a point in the cell grid.
 *
 * @group Drawings
 */
export type CellOffset = {
  /** The row in which the point occurs, 1 indexed. */
  row: number,

  /** The offset within the row in which the point occurs, in EMUs. */
  rowOff: EmuValue,

  /** The column in which the point occurs, 1 indexed. */
  col: number,

  /** The position within the column in which the point occurs, in EMUs. */
  colOff: EmuValue,
};
