import type { AdjustCoordinate } from '../AdjustCoordinate.ts';

/**
 * A path command to draw a line from the current position to a new one.
 */
export type LineToCommand = ['L', AdjustCoordinate, AdjustCoordinate];
