import type { PivotCacheBase } from './PivotCacheBase.ts';

/**
 * A pivot cache whose source data comes from scenarios.
 *
 * @group PivotTables
 */
export type PivotCacheScenario = PivotCacheBase & {
  sourceType: 'scenario';
};
