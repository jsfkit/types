import type { integer } from '../integer.ts';

// In OOXML, field index attributes are typed as xsd:unsignedInt, so the
// sentinel values -2 and -1 are serialized as 4294967294 (0xFFFFFFFE) and
// 4294967295 (0xFFFFFFFF) respectively. In JSF we use the signed values.

/**
 * A field index in a pivot table context. Either a non-negative index into the
 * pivot table's {@link PivotField} array (or the cache's field array when
 * `cacheIndex` is true), or one of the following sentinel values:
 *
 * - **`-2`** — the "Values" virtual field, representing the data area when a
 *   pivot table has multiple data fields.
 * - **`-1`** — no field (references nothing).
 *
 * @group PivotTables
 */
export type PivotFieldIndex = integer;
