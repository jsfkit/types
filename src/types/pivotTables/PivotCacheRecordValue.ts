import type { integer } from '../integer.ts';
import type { PivotCacheSharedItem } from './PivotCacheSharedItem.ts';

/**
 * A single value in a pivot cache record. Each record is an array of these values, one per cache
 * field.
 *
 * Most values are inline {@link PivotCacheSharedItem}s. The `{ x: integer }` variant is a
 * shared item index, referring to an entry in the corresponding field's
 * {@link PivotCacheField.sharedItems | sharedItems} array instead of repeating the value inline.
 *
 * @group PivotTables
 */
export type PivotCacheRecordValue =
  PivotCacheSharedItem |
  { x: integer };
