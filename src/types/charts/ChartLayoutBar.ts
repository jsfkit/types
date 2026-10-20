import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartBarShape } from './ChartBarShape.ts';

/**
 * Settings for bar plots.
 *
 * @group Charts
 */
export type ChartLayoutBar = {
  /**
   * The kind of settings. These settings apply to a `bar` plot.
   */
  type: 'bar';

  /**
   * Space between category groups, as a percentage of the bar width (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;

  /**
   * How much bars in a group overlap, as a percentage of the bar width (-100 to 100). Negative
   * values add space between the bars.
   *
   * @min -100
   * @max 100
   * @default 0
   */
  overlap?: integer;

  /**
   * Shape of the bars in a 3D bar chart. A series can override this.
   *
   * @default "box"
   */
  shape?: ChartBarShape;

  /**
   * Depth of the gap between rows of series in a 3D bar chart, as a percentage of the bar width
   * (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapDepth?: integer;

  // This is OOXML `c:serLines`, which Excel calls series lines.
  /**
   * Lines that join each segment of a stacked bar to the same segment in the next bar. They
   * apply only to stacked bar plots that aren't 3D. When absent, there are none. An empty style
   * (`{}`) draws them with the default, 0.75pt `tx1` 35%/65%.
   */
  connectorLines?: Line;
};
