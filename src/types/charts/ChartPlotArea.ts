import type { Shape } from '../dml/shape/Shape.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';

/**
 * The plot area: the region that holds the data, with its axes, tick labels, and axis titles.
 *
 * @group Charts
 */
export type ChartPlotArea = {
  /**
   * Fill and outline of the plot area. By default, there are none.
   */
  shape?: Shape;

  /**
   * Manual position and size of the plot area. When absent, they're automatic.
   */
  layout?: ChartManualLayout;

  /**
   * Which rectangle the manual `layout` describes. Has no effect without a `layout`.
   *
   * | Value   | Rectangle
   * |---------|-------------------------------------------------------------------
   * | `outer` | The plot area including tick labels and axis titles.
   * | `inner` | Only the area the data is drawn in, excluding tick labels and axis titles.
   *
   * With `inner`, the data area is placed exactly at the rectangle, and the tick labels and axis
   * titles go outside it. With `outer`, everything fits inside the rectangle, so the data area is
   * smaller. Excel writes `inner` when the plot area is moved or resized.
   *
   * @default "outer"
   */
  layoutTarget?: 'inner' | 'outer';
};
