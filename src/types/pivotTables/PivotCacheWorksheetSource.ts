import type { CellRange } from '../CellRange.ts';

/**
 * Describes the source of a pivot cache's data when the source is a worksheet range or named
 * range/table. Either `ref` + `sheet` identifies a cell range, or `name` identifies a defined
 * name or table (with optional `sheet` for sheet-scoped names).
 *
 * @group PivotTables
 */
export type PivotCacheWorksheetSource =
  {
    /** The A1-style range reference to the source data, including headers. */
    ref: CellRange;
    /** The name of the sheet containing the source data. */
    sheet: string;
    /** A defined name or table name that identifies the source data. */
    name?: string;
  } |
  {
    /** The name of the sheet, when `name` is a sheet-scoped defined name. */
    sheet?: string;
    /** A defined name or table name that identifies the source data. */
    name: string;
  };
