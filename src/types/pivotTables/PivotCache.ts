import type { PivotCacheConsolidation } from './PivotCacheConsolidation.ts';
import type { PivotCacheExternal } from './PivotCacheExternal.ts';
import type { PivotCacheScenario } from './PivotCacheScenario.ts';
import type { PivotCacheWorksheet } from './PivotCacheWorksheet.ts';

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
