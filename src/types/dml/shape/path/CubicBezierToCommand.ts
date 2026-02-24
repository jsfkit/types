import type { AdjustCoordinate } from '../AdjustCoordinate.ts';

/**
 * A path command to draw a cubic Bézier curve to an endpoint.
 */
export type CubicBezierToCommand = ['C', AdjustCoordinate, AdjustCoordinate, AdjustCoordinate, AdjustCoordinate, AdjustCoordinate, AdjustCoordinate];
