import type { Extent } from '../Extent.ts';
import type { Point } from '../Point.ts';

/**
 * Specifies an absolute anchor placeholder for a group, a shape, or a drawing element.
 */
export type GraphicAnchorAbsolute = {
  /** Type discriminator for an absolute anchor. */
  type: 'absolute',

  /** The absolute position of the graphic in EMUs. */
  pos: Point,

  /** The size of the graphic in EMUs. */
  ext: Extent,
};
