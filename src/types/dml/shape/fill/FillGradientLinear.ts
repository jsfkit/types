import type { Angle } from '../../Angle.js';
import type { FlipAxis } from './FlipAxis.ts';
import type { GradientColorStop } from './GradientColorStop.ts';

/**
 * Linear gradient fill.
 *
 * Defines a gradient fill that transitions between colors along a straight line,
 * with configurable angle, flip behavior, and color stops.
 */
export type FillGradientLinear = {
  /** Type discriminator for linear gradient fills. */
  type: 'linearGradient';

  /** Direction(s) in which to flip the gradient pattern. */
  flip?: FlipAxis;

  /** Whether the gradient should rotate when the shape is rotated. */
  rotWithShape?: boolean;

  /** Array of color stops defining the gradient color transitions. */
  colorStops: GradientColorStop[],

  /** Angle of the gradient direction in degrees. */
  angle?: Angle;

  /** Whether the gradient should scale with the shape dimensions. */
  scaled?: boolean;
};
