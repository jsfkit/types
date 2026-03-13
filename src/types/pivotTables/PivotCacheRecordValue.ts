import type { integer } from '../integer.ts';
import type { PivotCacheSharedItem } from './PivotCacheSharedItem.ts';

/**
 * A single value in a pivot cache record. Each record is an array of these values, one per cache
 * field.
 *
 * Each value is either an inline {@link PivotCacheSharedItem} or an `{ x: integer }` shared item
 * index, referring to an entry in the corresponding field's
 * {@link PivotCacheField.sharedItems | sharedItems} array.
 *
 * @group PivotTables
 */
export type PivotCacheRecordValue =
  PivotCacheSharedItem |
  { t: 'x', v: integer };
