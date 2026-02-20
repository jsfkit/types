import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * A path command to draw a line from the current position to a new one.
 */
export type LineToCommand = ['L', AdjCoordinate, AdjCoordinate];
