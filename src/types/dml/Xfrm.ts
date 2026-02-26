import type { DmlAngle } from './DmlAngle.ts';
import type { Extent } from './Extent.ts';
import type { Point } from './Point.ts';
import type { FlipAxis } from './shape/index.ts';

/**
 * Transform directions to be applied to drawn graphic objects.
 *
 * @group Drawings
 */
export type Xfrm = {
  /**
   * Which axes the shape should be flipped about.
   * @defaultValue "none"
   */
  flip?: FlipAxis,

  /**
   * Rotation angle in 60,000ths of a degree.
   * @defaultValue 0
   */
  rot?: DmlAngle,

  /**
   * Offset/position of the graphic object.
   */
  off?: Point,

  /** Extents/size of the graphic object. */
  ext?: Extent,
};
