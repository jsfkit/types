import type { ChartDataPoint } from './ChartDataPoint.ts';

/**
 * Style and label overrides for a point in a filtered-out category.
 *
 * @group Charts
 */
export type ChartFilteredPoint = Omit<ChartDataPoint, 'index'> & {
  /**
   * Cell reference of the point's value, for example `Sheet1!$B$3`.
   */
  ref: string;
};
