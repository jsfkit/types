import type { PivotSubtotalFunction } from './PivotSubtotalFunction.ts';

/**
 * The type of a pivot field item, indicating its role in the pivot table layout.
 *
 * - `'data'` — a regular data item representing a unique value from the field.
 * - `'default'` — the default subtotal item.
 * - Any {@link PivotSubtotalFunction} value — a specific subtotal aggregation item.
 * - `'grand'` — a grand total item.
 * - `'blank'` — a blank item (placeholder).
 *
 * @group PivotTables
 */
export type PivotItemType = PivotSubtotalFunction | 'data' | 'default' | 'grand' | 'blank';
