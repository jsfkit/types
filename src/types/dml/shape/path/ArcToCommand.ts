import type { AdjustCoordinate } from '../AdjustCoordinate.ts';

/**
 * A path command to draw an elliptical arc to an endpoint.
 */
export type ArcToCommand = ['A', AdjustCoordinate, AdjustCoordinate, AdjustCoordinate, AdjustCoordinate];
