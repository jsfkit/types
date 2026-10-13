import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';

/**
 * Settings for surface charts. A surface chart without {@link Chart.view3D} is a contour chart:
 * the surface seen from directly above.
 *
 * @group Charts
 */
export type ChartSurfaceLayout = {
  /**
   * Whether the surface is drawn as a wireframe, without fills.
   *
   * @default false
   */
  wireframe?: boolean;

  /**
   * Styles for the value bands of the surface. Bands follow the major units of the value axis,
   * starting from the lowest. A band without an entry has its automatic style.
   */
  bandFormats?: {
    /**
     * Zero-based index of the band.
     */
    index: integer;
    shape?: Shape;
  }[];
};
