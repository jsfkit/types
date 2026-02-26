import type { AdjustCoordinate } from '../AdjustCoordinate.ts';

/**
 * A path command to move pen to a new position without drawing.
 *
 * @group Drawings
 */
export type MoveToCommand = ['M', AdjustCoordinate, AdjustCoordinate];
