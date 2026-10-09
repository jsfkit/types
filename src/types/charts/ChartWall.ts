import type { integer } from '../integer.ts';
import type { ChartPictureOptions } from './ChartPictureOptions.ts';
import type { ChartShape } from './ChartShape.ts';

/**
 * The floor or a wall of a 3D chart.
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

  shape?: ChartShape;

  /** How a picture fill is applied to the wall. */
  pictureOptions?: ChartPictureOptions;
};
