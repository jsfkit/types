import type { AdjCoordinate } from '../AdjCoordinate.ts';

/**
 * A path command to move pen to a new position without drawing.
 */
export type MoveToCommand = ['M', AdjCoordinate, AdjCoordinate];
