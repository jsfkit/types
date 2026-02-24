import type { CellOffset } from '../CellOffset.ts';

/**
 * Specifies a two-cell anchor placeholder for a group, a shape, or a drawing element.
 */
export type GraphicAnchorTwoCell = {
  /** Type discriminator for a two-cell anchor. */
  type: 'twoCell',

  /** The top/left position of the graphic in cell coordinates. */
  from: CellOffset,

  /** The bottom/right position of the graphic in cell coordinates. */
  to: CellOffset,
};
