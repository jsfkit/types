import type { AdjustCoordinate } from '../AdjustCoordinate.ts';

/**
 * A path command to draw a quadratic Bézier curve to an endpoint.
 */
export type QuadraticBezierToCommand = ['Q', AdjustCoordinate, AdjustCoordinate, AdjustCoordinate, AdjustCoordinate];
