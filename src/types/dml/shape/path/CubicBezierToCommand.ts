import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * A path command to draw a cubic Bézier curve to an endpoint.
 */
export type CubicBezierToCommand = ['C', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate];
