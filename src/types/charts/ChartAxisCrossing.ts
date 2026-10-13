/**
 * Which perpendicular axis an axis crosses, and where. The position is measured on the crossed
 * axis: `min` and `max` are its ends, and `value` is a value on its scale.
 *
 * @group Charts
 */
export type ChartAxisCrossing = (
  { type: 'auto' } |
  { type: 'min' } |
  { type: 'max' } |
  { type: 'value'; value: number }
) & {
  /**
   * ID of the axis that this axis crosses. When absent, it's the other axis of the same plot: a
   * plot's value axis crosses its category (or `x`) axis, and its category, `x`, and `depth` axes
   * cross its value axis.
   */
  axis?: string;
};
