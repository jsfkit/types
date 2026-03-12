/**
 * The scope of conditional formatting applied to a pivot table.
 *
 * - `'selection'` — applies to the selected cells only.
 * - `'data'` — applies to all data field cells.
 * - `'field'` — applies to field intersections.
 *
 * @group PivotTables
 */
export type PivotConditionalFormatScope = 'selection' | 'data' | 'field';
