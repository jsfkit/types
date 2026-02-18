import type { Coordinate } from './Coordinate.ts';

/**
 * Specifies a point in the cell grid.
 */
export type CellOffset = {
  /** The row in which the point occurs, 1 indexed. */
  row: number,

  /** The offset within the row in which the point occurs, in EMUs. */
  rowOff: Coordinate,

  /** The column in which the point occurs, 1 indexed. */
  col: number,

  /** The position within the column in which the point occurs, in EMUs. */
  colOff: Coordinate,
};
