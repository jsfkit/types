/**
 * A point in the chart area, as fractions of its width (`x`) and height (`y`), where 0 is the left
 * or top edge and 1 is the right or bottom edge.
 *
 * This is deliberately not JSF `Point`, which is in EMUs.
 *
 * @group Charts
 */
export type ChartRelativePoint = {
  /**
   * Horizontal position, as a fraction of the chart area's width.
   */
  x: number;
  /**
   * Vertical position, as a fraction of the chart area's height.
   */
  y: number;
};
