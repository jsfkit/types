import type { CellValueType } from '../CellValueType.ts';
import type { integer } from '../integer.ts';

/**
 * The unit used for grouping a cache field's values.
 *
 * @group PivotTables
 */
export type PivotGroupBy =
  'range' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'quarters' | 'years';

/**
 * Range grouping properties that define how a cache field's values are grouped into intervals.
 *
 * @group PivotTables
 */
export type PivotCacheRangePr = {
  /**
   * Whether the start value is determined automatically from source data.
   *
   * @default true
   */
  autoStart?: boolean;
  /**
   * Whether the end value is determined automatically from source data.
   *
   * @default true
   */
  autoEnd?: boolean;
  /**
   * The grouping unit.
   *
   * @default 'range'
   */
  groupBy?: PivotGroupBy;
  /** Start value for numeric range grouping. */
  startNum?: number;
  /** End value for numeric range grouping. */
  endNum?: number;
  /** Start date for date range grouping (ISO 8601 datetime string). */
  startDate?: string;
  /** End date for date range grouping (ISO 8601 datetime string). */
  endDate?: string;
  /**
   * The interval size for each group.
   *
   * @default 1
   */
  groupInterval?: number;
};

/**
 * Field grouping information that defines how a cache field's values are grouped.
 *
 * @group PivotTables
 */
export type PivotCacheFieldGroup = {
  /** Index of the parent grouped field (for multi-level grouping). */
  par?: integer;
  /** Index of the base (source) cache field that this grouping is derived from. */
  base?: integer;
  /** Range grouping properties (for date or numeric range grouping). */
  rangePr?: PivotCacheRangePr;
  /** Discrete grouping: maps each shared item index to its group index. */
  discretePr?: integer[];
  /** The group item labels, representing each group's display value. */
  groupItems?: PivotCacheSharedItem[];
};

/**
 * A shared item value in a pivot cache field. Each item represents a unique value found in the
 * source data for that field.
 *
 * @group PivotTables
 */
export type PivotCacheSharedItem = {
  /** The data type of this shared item. Uses the same single-character codes as {@link CellValueType}. */
  t: CellValueType;
  /** The item's value. Absent when `t` is `'z'` (empty/missing). */
  v?: string | number | boolean;
};

/**
 * Metadata describing the type composition and value range of a cache field's data. These are
 * redundant when {@link PivotCacheField.sharedItems} contains items (the metadata can be derived),
 * but for fields whose data is stored only in records (no shared items), they preserve min/max
 * and type information that would otherwise be lost.
 *
 * @group PivotTables
 */
export type PivotCacheSharedItemsMeta = {
  /**
   * Whether the field contains blank (missing) values.
   *
   * @default false
   */
  containsBlank?: boolean;
  /**
   * Whether the field contains more than one data type (excluding blank and string).
   *
   * @default false
   */
  containsMixedTypes?: boolean;
  /**
   * Whether the field contains a mix of text and other types, or only text.
   *
   * @default true
   */
  containsSemiMixedTypes?: boolean;
  /**
   * Whether the field contains string values.
   *
   * @default true
   */
  containsString?: boolean;
  /**
   * Whether the field contains numeric values.
   *
   * @default false
   */
  containsNumber?: boolean;
  /**
   * Whether the field contains only integer numeric values (no fractions).
   *
   * @default false
   */
  containsInteger?: boolean;
  /**
   * Whether the field contains date values.
   *
   * @default false
   */
  containsDate?: boolean;
  /**
   * Whether the field contains non-date values.
   *
   * @default true
   */
  containsNonDate?: boolean;
  /** The minimum numeric value in the field. */
  minValue?: number;
  /** The maximum numeric value in the field. */
  maxValue?: number;
  /** The minimum date value in the field (ISO 8601 datetime string). */
  minDate?: string;
  /** The maximum date value in the field (ISO 8601 datetime string). */
  maxDate?: string;
};

/**
 * Describes a field (column) in a pivot cache. Each cache field corresponds to a column in the
 * source data range.
 *
 * @group PivotTables
 */
export type PivotCacheField = {
  /** The name of the field, typically matching the column header in the source data. */
  name: string;
  /**
   * The unique values found in this field's source data. Used for item indexing in pivot cache
   * records and pivot field items.
   */
  sharedItems?: PivotCacheSharedItem[];
  /**
   * Metadata about the shared items or record-level values for this field. When
   * {@link sharedItems} is populated, this can be derived from the items; when absent, it
   * preserves type/range information that would otherwise be lost.
   */
  sharedItemsMeta?: PivotCacheSharedItemsMeta;
  /** The number format code for this field's values (e.g. `"General"`, `"#,##0"`). */
  numFmt?: string;
  /** A formula for a calculated field, expressed in A1-style notation. */
  formula?: string;
  /**
   * Whether this field comes from the source database. When `false`, the field is a calculated
   * field not present in the original data source.
   *
   * @default true
   */
  databaseField?: boolean;
  /** Grouping information for this field (date ranges, numeric ranges, or discrete groups). */
  fieldGroup?: PivotCacheFieldGroup;
};
