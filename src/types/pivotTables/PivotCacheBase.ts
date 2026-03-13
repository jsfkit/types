import type { PivotCacheField } from './PivotCacheField.ts';
import type { PivotCacheRecord } from './PivotCacheRecord.ts';

/**
 * Shared properties for all pivot cache source types.
 *
 * @group PivotTables
 */
export type PivotCacheBase = {
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
   * Whether the cache definition is upgraded when refreshed.
   *
   * @default false
   */
  upgradeOnRefresh?: boolean;
  /**
   * Revision-tracking unique identifier. A GUID string like
   * `"{93AACE53-8F3A-A04A-893A-A439866B3165}"` assigned by Excel 2014+ for revision tracking.
   */
  uid?: string;
};
