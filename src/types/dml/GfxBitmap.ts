import type { Percentage, RelativeRect, ShapeProperties, TextBody } from './shape/index.ts';
import type { Xfrm } from './Xfrm.ts';

/**
 * Bitmap graphic / Picture.
 */
export type GfxBitmap = {
  /** Type discriminator for bitmap graphics. */
  type: 'bitmap',

  /** Unique identifier for this bitmap object. */
  id: string,

  /** Display name of the bitmap. */
  name: string,

  /**
   * Reference to the media/image resource to use.
   * @see {@link Workbook.images}.
   */
  mediaId: string,

  /** Optional description or alt text for the bitmap. */
  desc?: string,

  /** Visual styling properties (fill, line, effects, etc.). */
  shape?: ShapeProperties,

  /** Whether to lock the aspect ratio when resizing. */
  noChangeAspect?: boolean,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,

  /** Optional text content overlaid on the bitmap. */
  text?: TextBody,

  /**
   * Opacity value (0-100, where 100 is fully opaque).
   * @min 0
   * @max 100
   * @defaultValue 0
   */
  alpha?: Percentage,

  /** Rectangle defining how the image should be stretched (relative coordinates). */
  stretchRect?: RelativeRect,

  /** Rectangle defining the source crop area of the image (relative coordinates). */
  srcRect?: RelativeRect,
};
