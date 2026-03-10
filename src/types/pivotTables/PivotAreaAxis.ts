import type { PivotFieldAxis } from './PivotFieldAxis.ts';

/**
 * The axis a pivot area targets. Extends {@link PivotFieldAxis} with an additional `'values'`
 * option for the data-values axis.
 *
 * @group PivotTables
 */
export type PivotAreaAxis = PivotFieldAxis | 'values';
