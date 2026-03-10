import type { integer } from '../integer.ts';

/**
 * A single value in a pivot cache record. Each record is an array of these values, one per cache
 * field.
 *
 * - `number`, `string`, `boolean` represent inline values.
 * - `null` represents a missing value, paralleling `t: 'z'` in {@link PivotCacheSharedItem}.
 * - `{ d: string }` represents an inline date value (ISO 8601 string).
 * - `{ e: string }` represents an inline error value (e.g. `"#REF!"`).
 * - `{ x: integer }` represents a shared item index, referring to an entry in the corresponding
 *   field's {@link PivotCacheField.sharedItems | sharedItems} array.
 *
 * @group PivotTables
 */
export type PivotCacheRecordValue =
  number | string | boolean | null |
  { d: string; e?: never; x?: never } |
  { e: string; d?: never; x?: never } |
  { x: integer; d?: never; e?: never };
