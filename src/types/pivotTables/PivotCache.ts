import type { CellRange } from '../CellRange.ts';
import type { integer } from '../integer.ts';
import type { PivotCacheConsolidation } from './PivotCacheConsolidation.ts';
import type { PivotCacheExternal } from './PivotCacheExternal.ts';
import type { PivotCacheScenario } from './PivotCacheScenario.ts';
import type { PivotCacheWorksheet } from './PivotCacheWorksheet.ts';

/**
 * A single value in a pivot cache record. Each record is an array of these values, one per cache
 * field.
 *
 * - `number`, `string`, `boolean` represent inline values.
 * - `null` represents a missing value, paralleling `t: 'z'` in {@link PivotCacheSharedItem}.
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
export type PivotCache =
  PivotCacheWorksheet |
  PivotCacheExternal |
  PivotCacheConsolidation |
  PivotCacheScenario;
