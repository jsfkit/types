import type { Coordinate } from '../../Coordinate.ts';
import type { FlipAxis } from './FlipAxis.ts';
import type { RectAlignment } from '../RectAlignment.ts';
import type { Percentage } from '../Percentage.ts';

/**
 * Tile settings for image fills.
 *
 * Defines how an image should be repeated (tiled) when used as a fill,
 * including scaling, alignment, offset, and flip transformations.
 */
export type Tile = {
  /** Additional horizontal offset after alignment, in EMUs. */
  tx?: Coordinate,

  /** Additional vertical offset after alignment, in EMUs. */
  ty?: Coordinate,

  /** Horizontal scale factor to apply to the source image (percentage, where 100000 = 100%). */
  sx?: Percentage,

  /** Vertical scale factor to apply to the source image (percentage, where 100000 = 100%). */
  sy?: Percentage,

  /** Direction(s) in which to flip the source image while tiling. */
  flip?: FlipAxis,

  /**
   * Alignment position for the first tile relative to the shape bounds (applied after
   * sx/sy scaling, before tx/ty offset).
   */
  align?: RectAlignment,
};
