import type { Line } from '../dml/shape/line/Line.ts';
import type { ChartUpDownBars } from './ChartUpDownBars.ts';

/**
 * Settings for candlestick plots (stock charts).
 *
 * @group Charts
 */
export type ChartLayoutCandlestick = {
  /**
   * The kind of settings. These settings apply to a `candlestick` plot.
   */
  type: 'candlestick';

  /**
   * Vertical lines from each point down to the category axis. When absent, there are none. An
   * empty style (`{}`) draws them with the default, 0.75pt `tx1` 35%/65%.
   */
  dropLines?: Line;

  /**
   * Lines from the highest to the lowest value in each category. These are the wicks. When
   * absent, there are none. An empty style (`{}`) draws them with the default, 0.75pt `tx1`
   * 75%/25%.
   */
  highLowLines?: Line;

  /**
   * Bars between the first and last series in each category. These are the candle bodies. When
   * absent, there are none.
   */
  upDownBars?: ChartUpDownBars;
};
