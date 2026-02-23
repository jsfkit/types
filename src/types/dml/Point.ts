import type { EmuValue } from './EmuValue.ts';

/**
 * 2D position in EMUs.
 *
z * Represents a point in 2D space using absolute coordinates measured in EMUs.
 */
export type Point = {
  /** Horizontal position (X-axis). */
  x: EmuValue,

  /** Vertical position (Y-axis). */
  y: EmuValue
};
