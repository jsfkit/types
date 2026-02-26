import type { Extent } from './Extent.ts';
import type { Point } from './Point.ts';
import type { Xfrm } from './Xfrm.ts';

/**
 * Transform directions to be applied to group objects.
 *
 * @group Drawings
 */
export type XfrmGroup = Xfrm & {
  /** Child offset - position of child elements within a group. */
  chOff?: Point;

  /** Child extents - size of the child coordinate system within a group. */
  chExt?: Extent;
};
