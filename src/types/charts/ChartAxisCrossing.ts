/**
 * Which perpendicular axis an axis crosses, and where. The position is measured on the crossed
 * axis: `min` and `max` are its ends, and `value` is a value on its scale.
 *
 * @group Charts
 */
export type ChartAxisCrossing = ({
  /**
   * Crosses at zero on the crossed axis, or at its end nearest zero when zero is outside its
   * range. On a category axis, this is the start of the axis.
   */
  type: 'auto';
} | {
  /**
   * Crosses at the crossed axis's minimum.
   */
  type: 'min';
} | {
  /**
   * Crosses at the crossed axis's maximum.
   */
  type: 'max';
} | {
  /**
   * Crosses at a value on the crossed axis's scale.
   */
  type: 'value';
  /**
   * The value to cross at, on the crossed axis's scale. For a category axis, this is a category
   * number, counting from 1.
   */
  value: number;
}) & {
  /**
   * ID of the axis that this axis crosses. When absent, it's the other axis of the same plot: a
   * plot's value axis crosses its category (or `x`) axis, and its category, `x`, and `depth` axes
   * cross its value axis.
   */
  axis?: string;
};
