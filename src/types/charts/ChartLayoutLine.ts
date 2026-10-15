import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartUpDownBars } from './ChartUpDownBars.ts';

/**
 * Settings for line plots.
 *
 * @group Charts
 */
export type ChartLayoutLine = {
  /**
   * The kind of settings. These settings apply to a `line` plot.
   */
  type: 'line';

  // This is the line chart's OOXML `c:marker` flag.
  /**
   * Whether the plot's series show markers by default. Excel sets this from the chart subtype
   * ("Line" or "Line with Markers"). A series' own {@link ChartSeries.marker} decides what's
   * actually drawn.
   *
   * @default false
   */
  showMarkers?: boolean;

  /**
   * Vertical lines from each point down to the category axis. When absent, there are none. An
   * empty style (`{}`) draws them with the default, 0.75pt `tx1` 35%/65%.
   */
  dropLines?: Line;

  /**
   * Lines from the highest to the lowest value in each category. When absent, there are none. An
   * empty style (`{}`) draws them with the default, 0.75pt `tx1` 75%/25%.
   */
  highLowLines?: Line;

  /**
   * Bars between the first and last series in each category. When absent, there are none.
   */
  upDownBars?: ChartUpDownBars;

  /**
   * Depth of the gap between rows of series in a 3D line chart, as a percentage of the bar width
   * (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapDepth?: integer;
};
