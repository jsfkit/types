import type { PivotCacheBase } from './PivotCacheBase.ts';
import type { PivotCacheConsolidationSource } from './PivotCacheConsolidationSource.ts';

/**
 * A pivot cache whose source data consolidates multiple ranges.
 *
 * @group PivotTables
 */
export type PivotCacheConsolidation = PivotCacheBase & {
  sourceType: 'consolidation';
  consolidation: PivotCacheConsolidationSource;
};
