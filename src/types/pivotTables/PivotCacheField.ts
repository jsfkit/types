import type { PivotCacheFieldGroup } from './PivotCacheFieldGroup.ts';
import type { PivotCacheSharedItem } from './PivotCacheSharedItem.ts';
import type { PivotCacheSharedItemsMeta } from './PivotCacheSharedItemsMeta.ts';

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
