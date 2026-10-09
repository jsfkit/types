/**
 * Where an axis crosses the axis it's perpendicular to.
 *
 * @group Charts
 */
export type ChartAxisCrossing =
  { type: 'auto' } |
  { type: 'min' } |
  { type: 'max' } |
  { type: 'value'; value: number };
