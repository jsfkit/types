import type { Color } from '../../../styles/Color.ts';
import type { Percentage } from '../Percentage.ts';

/**
 * Gradient color stop.
 *
 * Defines a color transition point within a gradient fill,
 * specifying both the position and color at that point.
 *
 * @group Drawings
 */
export type GradientColorStop = {
  /**
   * Position of this color stop within the gradient (0-100, where 0 is start and 100 is end).
   * @min 0
   * @max 100
   */
  offset: Percentage;

  /**
   * Color value at this gradient stop position.
   */
  color: Color;
};
