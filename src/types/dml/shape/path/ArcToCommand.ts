import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * A path command to draw an elliptical arc to an endpoint.
 */
export type ArcToCommand = ['A', AdjCoordinate, AdjCoordinate, AdjCoordinate, AdjCoordinate];
