import type { Angle } from './Angle.js';
import type { Extent } from './Extent.ts';
import type { Position } from './Position.ts';

/**
 * Transform directions to be applied to drawn graphic objects.
 */
export type Xfrm = {
  // XXX: normalize to something like { x: true, y: true }?
  /** Flip horizontally */
  flipH?: boolean,
  /** Flip vertically */
  flipV?: boolean,
  /** Rotation angle in 60,000ths of a degree  */
  rot?: Angle,
  /** Offset/position of the graphic object */
  off?: Position,
  /** Extents/size of the graphic object */
  ext?: Extent,

  // XXX: next two props only exist on groups, split to "GroupTransform2D"?
  /** Child offset - position of child elements within a group (only for groups) */
  chOff?: Position;
  /** Child extents - size of the child coordinate system within a group (only for groups) */
  chExt?: Extent;
};
