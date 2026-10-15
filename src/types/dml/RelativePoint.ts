/**
 * A point in an area, as fractions of the area's width (`x`) and height (`y`), where 0 is the left
 * or top edge and 1 is the right or bottom edge. For a shape drawn on a chart, the area is the
 * chart area.
 *
 * This is deliberately not {@link Point}, which is in EMUs.
 *
 * @group Drawings
 */
export type RelativePoint = {
  /**
   * Horizontal position, as a fraction of the area's width.
   */
  x: number;
  /**
   * Vertical position, as a fraction of the area's height.
   */
  y: number;
};
