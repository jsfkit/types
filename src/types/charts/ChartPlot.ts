import type { ChartDataLabels } from './ChartDataLabels.ts';
import type { ChartEncoding } from './ChartEncoding.ts';
import type { ChartMark } from './ChartMark.ts';
import type { ChartPlotLayout } from './ChartPlotLayout.ts';
import type { ChartSeries } from './ChartSeries.ts';

/**
 * A group of series drawn with one mark and one set of scales.
 *
 * A chart can layer any number of plots, for example a bar plot and a line plot that share a
 * category scale. Excel's "combo chart" is only a menu shortcut for this, not a separate type.
 *
 * @group Charts
 */
export type ChartPlot = {
  id: string;

  mark: ChartMark;

  /**
   * ID of the input dataset or transform.
   */
  data: string;

  /**
   * @default "cartesian"
   */
  coordinates?: 'cartesian' | 'polar';

  // In OOXML, each chart type on each axis group is its own chart element.
  /**
   * Whether the plot uses the chart's primary or secondary axes. A plot uses one axis group, so
   * bars on both groups are two plots.
   *
   * The plot's scales and axes are still named through `encoding`. This says which group they
   * belong to, which the legend order and export depend on.
   *
   * A chart has at most two axis groups, and each group has its own category (or X) axis and
   * value axis, even when one of them is hidden. An arc plot (pie, doughnut, pie-of-pie, or
   * bar-of-pie) has no axes, but it still takes up an axis group of its own. So a chart with an arc
   * plot can have axis-based plots on the other group only.
   *
   * @default "primary"
   */
  axisGroup?: 'primary' | 'secondary';

  /**
   * How series are arranged relative to each other.
   *
   * A horizontal bar chart is a `bar` plot that encodes the category on `y` and the value on `x`.
   *
   * @default "standard"
   */
  grouping?: 'standard' | 'clustered' | 'stacked' | 'percentStacked';

  /**
   * Whether each data point gets its own color, rather than each series. Pie charts usually
   * set this.
   *
   * This only takes effect when the plot draws exactly one series. With more than one, colors
   * are per series, and the flag is kept so it round-trips.
   *
   * @default false
   */
  varyColors?: boolean;

  encoding: ChartEncoding;

  /**
   * Logical series in this plot, in ascending {@link ChartSeries.order}.
   *
   * The series define the plot's data through their bindings. An importer creates one entry for
   * every series in the source, including series with no data and series that aren't drawn (such
   * as all but the first series of a pie), so each keeps its name, ranges, formatting, and
   * position. A plot whose source has no series has an empty list.
   */
  series: ChartSeries[];

  /**
   * Data labels for every series in the plot. A series' `labels` override these property by
   * property. When absent, the plot has no labels of its own.
   */
  labels?: ChartDataLabels;

  layout?: ChartPlotLayout;
};
