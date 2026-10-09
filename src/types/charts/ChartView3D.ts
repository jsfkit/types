import type { DmlAngle } from '../dml/DmlAngle.ts';
import type { integer } from '../integer.ts';

/**
 * How a 3D chart is viewed.
 *
 * Angles are in 60,000ths of a degree ({@link DmlAngle}), like other JSF angles. Other ranges are
 * Excel's own, so conversion is lossless.
 *
 * @group Charts
 */
export type ChartView3D = {
  /**
   * Rotation around the horizontal axis (-5400000 to 5400000, which is -90 to 90 degrees).
   *
   * @min -5400000
   * @max 5400000
   * @default 0
   */
  rotationX?: DmlAngle;

  /**
   * Rotation around the vertical axis (0 to 21600000, which is 0-360 degrees).
   *
   * @min 0
   * @max 21600000
   * @default 0
   */
  rotationY?: DmlAngle;

  /**
   * Depth of the chart, as a percentage of its width (20-2000).
   *
   * @min 20
   * @max 2000
   * @default 100
   */
  depth?: integer;

  /**
   * Height of the chart, as a percentage of its width (5-500). When absent, the height is
   * automatic.
   *
   * @min 5
   * @max 500
   */
  height?: integer;

  /**
   * Whether the axes stay at right angles regardless of rotation. When `true`, `perspective` has
   * no effect.
   *
   * @default false
   */
  rightAngleAxes?: boolean;

  /**
   * Perspective: Excel's field of view value (0-240), where 0 means no perspective.
   *
   * @min 0
   * @max 240
   * @default 30
   */
  perspective?: integer;
};
