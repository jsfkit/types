import type { CellRange } from '../CellRange.ts';

/**
 * A worksheet range source, identified by a cell range and sheet name.
 *
 * @group PivotTables
 */
export type PivotCacheWorksheetSourceRange = {
  /** Type discriminator for a worksheet range source. */
  type: 'range';
  /** The A1-style range reference to the source data, including headers. */
  ref: CellRange;
  /** The name of the sheet containing the source data. */
  sheet?: string;
};

/**
 * A named source (defined name or table), optionally scoped to a sheet.
 *
 * @group PivotTables
 */
export type PivotCacheWorksheetSourceName = {
  /** Type discriminator for a worksheet name source. */
  type: 'name';
  /** A defined name or table name that identifies the source data. */
  name: string;
  /** The name of the sheet, when `name` is a sheet-scoped defined name. */
  sheet?: string;
};

/**
 * Describes the source of a pivot cache's data when the source is a worksheet range or named
 * range/table. Either `ref` + `sheet` identifies a cell range, or `name` identifies a defined
 * name or table (with optional `sheet` for sheet-scoped names).
 *
 * @group PivotTables
 */
export type PivotCacheWorksheetSource =
  PivotCacheWorksheetSourceRange |
  PivotCacheWorksheetSourceName;
