import type { GraphicAnchorAbsolute } from './GraphicAnchorAbsolute.ts';
import type { GraphicAnchorOneCell } from './GraphicAnchorOneCell.ts';
import type { GraphicAnchorTwoCell } from './GraphicAnchorTwoCell.ts';

/**
 * Specifies an anchor placeholder for a group, a shape, or a drawing element.
 *
 * @group Drawings
 */
export type GraphicAnchor =
  GraphicAnchorAbsolute |
  GraphicAnchorOneCell |
  GraphicAnchorTwoCell;
