import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';

/**
 * Bars between the first and last series in each category of a line or candlestick plot. A bar
 * is an up bar when the last series' value is higher than the first's, and a down bar otherwise.
 *
 * @group Charts
 */
export type ChartUpDownBars = {
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
