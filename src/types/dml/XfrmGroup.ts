import type { Extent } from './Extent.ts';
import type { Position } from './Position.ts';
import type { Xfrm } from './Xfrm.ts';

/**
 * Transform directions to be applied to group objects.
 */
export type XfrmGroup = Xfrm & {
  /** Child offset - position of child elements within a group. */
  chOff?: Position;

  /** Child extents - size of the child coordinate system within a group. */
  chExt?: Extent;
};
