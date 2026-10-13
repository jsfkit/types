import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';
import type { ChartPictureOptions } from './ChartPictureOptions.ts';

/**
 * The floor or a wall of a 3D chart or a contour chart.
 *
 * @group Charts
 */
export type ChartWall = {
  /**
   * Thickness of the wall, as a percentage of the largest dimension of the plot volume.
   *
   * @default 0
   */
  thickness?: integer;

  /**
   * Fill and outline of the wall or floor. By default, there are none.
   */
  shape?: Shape;

  /** How a picture fill is applied to the wall. */
  pictureOptions?: ChartPictureOptions;
};
