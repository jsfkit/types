import type { Shape } from '../dml/shape/Shape.ts';
import type { ChartLegendEntryRef } from './ChartLegendEntryRef.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartSideAlign } from './ChartSideAlign.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * The chart legend.
 *
 * @group Charts
 */
export type ChartLegend = {
  /**
   * ID of a scale that the legend shows, for example a color gradient.
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
   * Whether the legend is docked to a side of the chart, taking space from the plot area. A legend
   * that isn't docked floats over the chart, placed entirely by its `layout`, and `position`
   * doesn't apply. In OOXML, a legend with a manual layout and no `c:legendPos` isn't docked.
   *
   * @default true
   */
  docked?: boolean;

  /**
   * Which side of the chart the legend is on. `topRight` is the top-right corner, which only
   * legacy charts have (`c:legendPos val="tr"`).
   *
   * @default "right"
   */
  position?: 'left' | 'right' | 'top' | 'bottom' | 'topRight';

  /**
   * Where the legend sits along its side (ChartEx `align`). Doesn't apply to `topRight`.
   *
   * @default "center"
   */
  align?: ChartSideAlign;

  /**
   * Whether the legend overlaps the plot area instead of taking space from it.
   *
   * @default false
   */
  overlay?: boolean;

  /**
   * Legend entries that have been deleted, each identified by what it shows rather than by its
   * position, so the entries stay right whatever order the legend lists them in. When absent, no
   * entries are hidden.
   *
   * Only legacy charts other than surface charts can hide entries. Excel doesn't let you delete
   * entries from a ChartEx chart's legend, and doesn't save a deleted surface band entry.
   */
  hiddenEntries?: ChartLegendEntryRef[];

  /**
   * Fill and outline of the legend. By default, there are none.
   */
  shape?: Shape;

  /**
   * Text style of the legend entries. By default, they're 9pt `tx1` 65%/35% in the minor font. See
   * {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;

  /** Manual position and size of the legend. When absent, they're automatic. */
  layout?: ChartManualLayout;
};
