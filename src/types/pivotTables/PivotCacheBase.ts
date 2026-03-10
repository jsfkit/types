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
   * This is the transitional-format attribute (`refreshedDate`); the strict-format
   * equivalent is `refreshedDateIso`.
   */
  refreshedDate?: number;
  /**
   * When the cache was last refreshed, as an ISO 8601 date-time string.
   * This is the strict-format attribute (`refreshedDateIso`); the transitional-format
   * equivalent is `refreshedDate`.
   */
  refreshedDateIso?: string;
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
};
