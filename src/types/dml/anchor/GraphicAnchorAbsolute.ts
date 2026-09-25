import type { Extent } from '../Extent.ts';
import type { Point } from '../Point.ts';
import type { EditAsMode } from './EditAsMode.ts';

/**
 * Specifies an absolute anchor placeholder for a group, a shape, or a drawing element.
 *
 * @group Drawings
 */
export type GraphicAnchorAbsolute = {
  /** Type discriminator for an absolute anchor. */
  type: 'absolute',

  /** The absolute position of the graphic in EMUs. */
  pos: Point,

  /** The size of the graphic in EMUs. */
  ext: Extent,

  /**
   * Controls how the anchor should be treated when editing happens.
   * @see {@link EditAsMode}
   */
  editAs?: EditAsMode,
};
