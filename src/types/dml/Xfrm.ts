import type { Angle } from './Angle.ts';
import type { Extent } from './Extent.ts';
import type { Position } from './Position.ts';
import type { FlipAxis } from './shape/index.ts';

/**
 * Transform directions to be applied to drawn graphic objects.
 */
export type Xfrm = {
  /**
   * Which axes the shape should be flipped about.
   * @defaultValue "none"
   */
  flip: FlipAxis,

  /**
   * Rotation angle in 60,000ths of a degree.
   * @defaultValue 0
   */
  rot?: Angle,

  /**
   * Offset/position of the graphic object.
   */
  off?: Position,

  /** Extents/size of the graphic object. */
  ext?: Extent,

  // XXX: next two props only exist on groups, split to "GroupTransform2D"?
  /** Child offset - position of child elements within a group (only for groups) */
  chOff?: Position;

  /** Child extents - size of the child coordinate system within a group (only for groups) */
  chExt?: Extent;
};
