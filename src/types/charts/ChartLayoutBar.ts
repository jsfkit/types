import type { integer } from '../integer.ts';
import type { ChartBarShape } from './ChartBarShape.ts';

/**
 * Settings for bar plots.
 *
 * @group Charts
 */
export type ChartLayoutBar = {
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
};
