import type { Shape } from '../dml/shape/Shape.ts';
import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartLayoutArc } from './ChartLayoutArc.ts';
import type { ChartLayoutBar } from './ChartLayoutBar.ts';
import type { ChartLayoutBoxplot } from './ChartLayoutBoxplot.ts';
import type { ChartLayoutBubble } from './ChartLayoutBubble.ts';
import type { ChartLayoutFunnel } from './ChartLayoutFunnel.ts';
import type { ChartLayoutLine } from './ChartLayoutLine.ts';
import type { ChartLayoutRadar } from './ChartLayoutRadar.ts';
import type { ChartLayoutScatter } from './ChartLayoutScatter.ts';
import type { ChartLayoutSurface } from './ChartLayoutSurface.ts';
import type { ChartLayoutTreemap } from './ChartLayoutTreemap.ts';
import type { ChartLayoutWaterfall } from './ChartLayoutWaterfall.ts';

/**
 * Visual settings for a plot.
 *
 * The nested objects (`bar`, `line`, and so on) each apply only to plots with the matching mark.
 * The top-level settings apply to several marks, and each says which.
 *
 * @group Charts
 */
export type ChartPlotLayout = {
  bar?: ChartLayoutBar;
  line?: ChartLayoutLine;
  arc?: ChartLayoutArc;
  bubble?: ChartLayoutBubble;
  radar?: ChartLayoutRadar;
  scatter?: ChartLayoutScatter;
  boxplot?: ChartLayoutBoxplot;
  treemap?: ChartLayoutTreemap;
  waterfall?: ChartLayoutWaterfall;
  surface?: ChartLayoutSurface;
  funnel?: ChartLayoutFunnel;

  /**
   * Vertical lines from each point down to the category axis. Applies to `line`, `area`, and
   * `candlestick` plots. When absent, there are none. An empty style (`{}`) draws them with the
   * default, 0.75pt `tx1` 35%/65%.
   */
  dropLines?: Line;

  /**
   * Lines from the highest to the lowest value in each category. Applies to `line` and
   * `candlestick` plots. In a stock chart, these are the wicks. When absent, there are none. An
   * empty style (`{}`) draws them with the default, 0.75pt `tx1` 75%/25%.
   */
  highLowLines?: Line;

  /**
   * Bars between the first and last series in each category. Applies to `line` and `candlestick`
   * plots. In a stock chart, these are the candle bodies. When absent, there are none.
   */
  upDownBars?: {
    /**
     * Space between the bars, as a percentage of the bar width (0-500).
     *
     * @min 0
     * @max 500
     * @default 150
     */
    gapWidth?: integer;

    /**
     * Fill and outline of the up bars. By default, an `lt1` fill and a 0.75pt `tx1` 65%/35%
     * outline.
     */
    up?: Shape;

    /**
     * Fill and outline of the down bars. By default, a `dk1` 75%/25% fill and a 0.75pt `tx1`
     * 65%/35% outline.
     */
    down?: Shape;
  };

  /**
   * Series lines. In a stacked bar chart, they connect the bars of each series. In a pie-of-pie
   * or bar-of-pie chart, they connect the main pie to the secondary plot. When absent, there are
   * none. An empty style (`{}`) draws them with the default, 0.75pt `tx1` 35%/65%.
   */
  seriesLines?: Line;

  /**
   * Depth of the gap between rows of series in a 3D bar, line, or area chart, as a percentage of
   * the bar width (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapDepth?: integer;
};
