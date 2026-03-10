import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';
import type { PivotCacheField } from './PivotCacheField.ts';

/**
 * A single value in a pivot cache record. Each record is an array of these values, one per cache
 * field.
 *
 * - `number`, `string`, `boolean` represent inline values.
 * - `null` represents a missing value, paralleling
 *   `{ type: 'missing' }` in {@link PivotCacheSharedItem}.
 * - `{ d: string }` represents an inline date value (ISO 8601 string).
 * - `{ e: string }` represents an inline error value (e.g. `"#REF!"`).
 * - `{ x: integer }` represents a shared item index, referring to an entry in the corresponding
 *   field's {@link PivotCacheField.sharedItems | sharedItems} array.
 *
 * @group PivotTables
 */
export type PivotCacheRecordValue =
  number | string | boolean | null |
  { d: string; e?: never; x?: never } |
  { e: string; d?: never; x?: never } |
  { x: integer; d?: never; e?: never };

/**
 * A single record (row) of cached source data, with one value per cache field.
 *
 * @group PivotTables
 */
export type PivotCacheRecord = PivotCacheRecordValue[];

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
    ref?: never;
    /** The name of the sheet, when `name` is a sheet-scoped defined name. */
    sheet?: string;
    /** A defined name or table name that identifies the source data. */
    name: string;
  };

/**
 * One of the source ranges in a consolidation-source pivot cache.
 *
 * @group PivotTables
 */
export type PivotCacheConsolidationRangeSet = {
  /** The A1-style range reference. */
  ref?: CellRange;
  /** The sheet containing this range. */
  sheet?: string;
  /** Index into the first page field's items. */
  i1?: integer;
  /** Index into the second page field's items. */
  i2?: integer;
  /** Index into the third page field's items. */
  i3?: integer;
  /** Index into the fourth page field's items. */
  i4?: integer;
};

/**
 * Describes the source of a pivot cache's data when it consolidates multiple ranges (via the
 * legacy PivotTable Wizard).
 *
 * @group PivotTables
 */
export type PivotCacheConsolidationSource = {
  /**
   * Whether Excel automatically creates page fields.
   *
   * @default true
   */
  autoPage?: boolean;
  /** Page fields. Each inner array is one page field's item names. Up to 4. */
  pages?: string[][];
  /** The source ranges being consolidated. */
  rangeSets: PivotCacheConsolidationRangeSet[];
};

/**
 * A pivot cache stores a snapshot of the source data used by one or more pivot tables. It contains
 * field definitions, shared item pools, and optionally the full set of cached records.
 *
 * @group PivotTables
 */
export type PivotCache = (
  { sourceType: 'worksheet'; worksheetSource: PivotCacheWorksheetSource } |
  { sourceType: 'external'; connectionId: integer } |
  { sourceType: 'consolidation'; consolidation: PivotCacheConsolidationSource } |
  { sourceType: 'scenario' }
) & {
  /**
   * The fields (columns) in the cache, in source-data order. Each entry parallels the
   * corresponding pivot table's {@link PivotTable.fields | fields} array by index.
   */
  fields: PivotCacheField[];
  /**
   * The cached data records. Each record is an array of values corresponding to the cache fields.
   * When absent, the pivot table relies on the source data directly.
   */
  records?: PivotCacheRecord[];

  // --- Cache metadata ---

  /**
   * Name of the user who last refreshed the cache.
   */
  refreshedBy?: string;
  /**
   * When the cache was last refreshed, as a serial date number (e.g. `39536.657`).
   */
  refreshedDate?: number;
  /**
   * Number of records in the cache. Redundant with `records.length` when records are present,
   * but preserved for roundtrip fidelity.
   */
  recordCount?: integer;
  /**
   * Whether cache records are saved with the workbook.
   *
   * @default true
   */
  saveData?: boolean;
  /**
   * Whether the cache is refreshed on file open.
   *
   * @default false
   */
  refreshOnLoad?: boolean;
  /**
   * Whether refresh is enabled for this cache.
   *
   * @default true
   */
  enableRefresh?: boolean;
  /**
   * Opaque OOXML extension elements from `<extLst>`, preserved for round-trip fidelity.
   * Each entry is the raw XML string of an `<ext>` child element (including the `<ext>` tags).
   */
  extensions?: string[];
  /**
   * Revision-tracking unique identifier (OOXML `xr:uid`). A GUID string like
   * `"{93AACE53-8F3A-A04A-893A-A439866B3165}"` assigned by Excel 2014+ for revision tracking.
   */
  uid?: string;
  /**
   * Whether the cache definition is upgraded when refreshed.
   *
   * @default false
   */
  upgradeOnRefresh?: boolean;
};
