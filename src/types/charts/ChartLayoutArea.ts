import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';

/**
 * Settings for area plots.
 *
 * @group Charts
 */
export type ChartLayoutArea = {
  /**
   * The kind of settings. These settings apply to an `area` plot.
   */
  type: 'area';

  /**
   * Vertical lines from each point down to the category axis. When absent, there are none. An
   * empty style (`{}`) draws them with the default, 0.75pt `tx1` 35%/65%.
   */
  dropLines?: Line;

  /**
   * Depth of the gap between rows of series in a 3D area chart, as a percentage of the bar width
   * (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapDepth?: integer;
};
