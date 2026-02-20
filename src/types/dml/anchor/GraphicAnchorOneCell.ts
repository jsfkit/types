import type { CellOffset } from '../CellOffset.ts';
import type { Extent } from '../Extent.ts';

/**
 * Specifies a one cell anchor placeholder for a group, a shape, or a drawing element.
 */
export type GraphicAnchorOneCell = {
  /** Type discriminator for a one-cell anchor. */
  type: 'oneCell',

  /** The top/left position of the graphic in cell coordinates. */
  from: CellOffset,

  /** The size of the graphic in EMUs. */
  ext: Extent,
};
