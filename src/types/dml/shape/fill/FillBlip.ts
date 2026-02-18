import type { Percentage } from '../Percentage.ts';
import type { RelativeRect } from '../RelativeRect.ts';
import type { Tile } from './Tile.js';

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

  // XXX: Normalize to 0-1 or 0-100?
  /** Opacity value (0-100000, where 100000 is fully opaque). */
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
