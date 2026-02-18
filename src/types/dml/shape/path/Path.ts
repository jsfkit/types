import type { PositiveCoordinate } from '../../PositiveCoordinate.ts';
import type { PathDataItem } from './PathDataItem.ts';
import type { PathFillMode } from './PathFillMode.js';

/**
 * Shape geometry path definition.
 *
 * Defines a single path within a custom shape's geometry, including
 * the path commands and rendering properties for that path.
 */
export type Path = {
  /** Whether this path can be extruded in 3D rendering. */
  extrusionOk: boolean,

  /** Whether this path should be stroked (outlined). */
  stroke: boolean,

  /** Fill mode for the path. */
  fill: PathFillMode,

  /**
   * Specifies the height, or maximum y coordinate that should be used for within the path
   * coordinate system. This value determines the vertical placement of all points within the
   * corresponding path as they will all be calculated using this height attribute as the max y
   * coordinate.
   */
  h: PositiveCoordinate,

  /**
   * Specifies the width, or maximum x coordinate that should be used for within the path
   * coordinate system. This value determines the horizontal placement of all points within
   * the corresponding path as they will all be calculated using this width attribute as the max
   * x coordinate.
   */
  w: PositiveCoordinate,

  /** Array of path commands (moveTo, lineTo, etc.) defining the path geometry. */
  d: PathDataItem[],
};
