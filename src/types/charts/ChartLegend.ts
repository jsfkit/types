import type { Shape } from '../dml/shape/Shape.ts';
import type { ChartLegendEntryRef } from './ChartLegendEntryRef.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * The chart legend.
 *
 * @group Charts
 */
export type ChartLegend = {
  /**
   * A scale that the legend shows, named by its `id`, for example a color gradient.
   *
   * When absent, the legend lists one entry per series, ordered by chart type, then by
   * {@link ChartPlot.axisGroup} (primary before secondary), then by series order (see
   * {@link ChartSeries.order}). Chart types rank by where their first plot appears in
   * {@link Chart.plots}, and line and area count as one type. For a
   * plot where {@link ChartPlot.varyColors} takes effect, it lists one entry per data point of
   * the drawn series instead, as Excel does for pie charts. Each trendline adds its own entry.
   */
  scale?: string;

  /**
   * Which side of the chart the legend is on. `topRight` is the top-right corner.
   *
   * @default "right"
   */
  position?: 'left' | 'right' | 'top' | 'bottom' | 'topRight';

  /**
   * Manual position and size of the legend. When absent, they're automatic.
   */
  layout?: ChartManualLayout;

  /**
   * Whether the legend overlaps the plot area instead of taking space from it. When `false`, space
   * is made for the legend at its `position`, whether or not a `layout` has moved it from there.
   * When `true`, no space is made, and the plot area takes that space too.
   *
   * @default false
   */
  overlay?: boolean;

  /**
   * Text style of the legend entries. By default, they're 9pt `tx1` 65%/35% in the minor font. See
   * {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;

  // Only legacy charts other than surface charts can hide entries. Excel doesn't let you delete
  // entries from a ChartEx chart's legend, and doesn't save a deleted surface band entry.
  /**
   * Legend entries that have been deleted, each identified by what it shows rather than by its
   * position, so the entries stay right whatever order the legend lists them in. When absent, no
   * entries are hidden.
   */
  hiddenEntries?: ChartLegendEntryRef[];

  /**
   * Fill and outline of the legend. By default, there are none.
   */
  shape?: Shape;
};
