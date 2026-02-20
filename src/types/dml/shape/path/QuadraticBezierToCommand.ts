import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * A path command to draw a quadratic Bézier curve to an endpoint.
 */
export type QuadraticBezierToCommand = ['Q', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate];
