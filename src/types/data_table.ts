import type { CellId } from './cell_id';
import type { CellRange } from './cell_range';

/**
 * Data table configuration, present on the master cell of a data table range.
 * Represents an Excel What-If Analysis data table.
 */
export type DataTable = {
  /** Range of cells the data table manages (e.g., "D3:D5") */
  ref: CellRange;
  /** Primary input cell reference to substitute */
  r1: CellId;
  /** Secondary input cell reference, for 2D data tables */
  r2?: CellId;
  /** Whether one-dimensional data table is a row (true) or a column (false/absent) */
  dtr?: boolean;
  /** Whether this is a two-dimensional data table */
  dt2D?: boolean;
};
