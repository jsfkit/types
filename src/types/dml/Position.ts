import type { Coordinate } from './Coordinate.ts';

/**
 * 2D position in EMUs.
 *
 * Represents a point in 2D space using absolute coordinates measured in EMUs.
 */
export type Position = {
  /** Horizontal position (X-axis). */
  x: Coordinate,

  /** Vertical position (Y-axis). */
  y: Coordinate
};
