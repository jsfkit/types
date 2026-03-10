import type { PivotCacheBase } from './PivotCacheBase.ts';
import type { PivotCacheWorksheetSource } from './PivotCacheWorksheetSource.ts';

/**
 * A pivot cache whose source data comes from a worksheet range or named range/table.
 *
 * @group PivotTables
 */
export type PivotCacheWorksheet = PivotCacheBase & {
  sourceType: 'worksheet';
  worksheetSource: PivotCacheWorksheetSource;
};
