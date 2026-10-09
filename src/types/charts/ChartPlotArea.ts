import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartShape } from './ChartShape.ts';

/**
 * The plot area: the region the data is drawn in, inside the axes.
 *
 * @group Charts
 */
export type ChartPlotArea = {
  shape?: ChartShape;

  /** Manual position and size of the plot area. When absent, they're automatic. */
  layout?: ChartManualLayout;

  /**
   * Which rectangle `layout` describes.
   *
   * | Value   | Rectangle
   * |---------|-------------------------------------------------------------------
   * | `outer` | The plot area including tick labels and axis titles.
   * | `inner` | Only the area the data is drawn in, excluding tick labels and axis titles.
   *
   * @default "outer"
   */
  layoutTarget?: 'inner' | 'outer';
};
