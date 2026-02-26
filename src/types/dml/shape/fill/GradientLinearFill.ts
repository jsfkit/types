import type { DmlAngle } from '../../DmlAngle.ts';
import type { FlipAxis } from './FlipAxis.ts';
import type { GradientColorStop } from './GradientColorStop.ts';

/**
 * Linear gradient fill.
 *
 * Defines a gradient fill that transitions between colors along a straight line,
 * with configurable angle, flip behavior, and color stops.
 *
 * @group Drawings
 */
export type GradientLinearFill = {
  /** Type discriminator for linear gradient fills. */
  type: 'linearGradient';

  /** Direction(s) in which to flip the gradient pattern. */
  flip?: FlipAxis;

  /** Whether the gradient should rotate when the shape is rotated. */
  rotWithShape?: boolean;

  /** Array of color stops defining the gradient color transitions. */
  colorStops: GradientColorStop[],

  /** Angle of the gradient direction in 60,000ths of a degree. */
  angle?: DmlAngle;

  /** Whether the gradient should scale with the shape dimensions. */
  scaled?: boolean;
};
