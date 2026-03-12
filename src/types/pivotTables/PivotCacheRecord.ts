import type { PivotCacheRecordValue } from './PivotCacheRecordValue.ts';

/**
 * A single record (row) of cached source data, with one value per cache field.
 *
 * @group PivotTables
 */
export type PivotCacheRecord = PivotCacheRecordValue[];
