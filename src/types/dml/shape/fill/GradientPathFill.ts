import type { PathFillType } from './PathFillType.ts';
import type { FlipAxis } from './FlipAxis.ts';
import type { GradientColorStop } from './GradientColorStop.ts';
import type { RelativeRect } from '../RelativeRect.ts';

/**
 * Path gradient fill (radial/shape gradient).
 *
 * Defines a gradient fill that radiates from a center point or follows
 * the shape's contour, creating circular, rectangular, or shape-based gradients.
 *
 * @group Drawings
 */
export type GradientPathFill = {
  /** Type discriminator for path gradient fills. */
  type: 'pathGradient';

  /** Array of color stops defining the gradient color transitions. */
  colorStops: GradientColorStop[],

  /** Path type determining the gradient shape (circle, rectangle, or shape contour). */
  path: PathFillType;

  /** Rectangle defining the gradient's focus area (relative coordinates). */
  fillToRect?: RelativeRect;

  /** Direction(s) in which to flip the gradient pattern. */
  flip?: FlipAxis;

  /** Whether the gradient should rotate when the shape is rotated. */
  rotWithShape?: boolean;
};
