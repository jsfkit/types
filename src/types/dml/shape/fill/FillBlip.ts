import type { Percentage } from '../Percentage.ts';
import type { RelativeRect } from '../RelativeRect.ts';
import type { Tile } from './Tile.ts';

/**
 * Image/bitmap fill (blip fill).
 *
 * Defines a fill using an embedded or linked image, with options for
 * tiling, stretching, cropping, and transparency.
 */
export type FillBlip = {
  /** Type discriminator for blip (image) fills. */
  type: 'blip';

  /**
   * Reference to the media/image resource to use for this fill.
   * @see {@link Workbook.images}.
   */
  mediaId: string,

  /**
   * Opacity value (0-100, where 100 is fully opaque).
   * @min 0
   * @max 100
   * @defaultValue 0
   */
  alpha?: Percentage,

  /** Rectangle defining the source crop area of the image (relative coordinates). */
  srcRect?: RelativeRect,

  /**
   * Rectangle defining how the image should be stretched to fill the
   * shape (relative coordinates).
   */
  stretchRect?: RelativeRect,

  /** Tiling properties for repeating the image pattern across the fill area. */
  tile?: Tile;
};
