import type { integer } from '../integer.ts';
import type { PivotCacheBase } from './PivotCacheBase.ts';

/**
 * A pivot cache whose source data comes from an external data connection.
 *
 * @group PivotTables
 */
export type PivotCacheExternal = PivotCacheBase & {
  sourceType: 'external';
  connectionId: integer;
};
