import type { GraphicAnchor } from './anchor/GraphicAnchor.ts';
import type { Graphic } from './Graphic.ts';

/**
 * A drawing.
 *
 * A drawing is a collection of any graphic objects that should be displayed in a worksheet as
 * well as information on how they are positioned within the cell-grid.
 */
export type Drawing = {
  /** Defines how the drawing is placed onto a worksheet's cell-grid. */
  anchor: GraphicAnchor,
  /** The graphical elements that make up the drawing. */
  content: Graphic[],
};
