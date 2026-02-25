/**
 * Hue / saturation / lightness.
 *
 * Hue, saturation and lightness follow CSS Color Level 4 conventions, but using the range (0-100)
 * rather than (0-1).
 */
export type HslColor = {
  type: 'hsl';
  /**
   * Degrees (0-360). Must be positive.
   * @min 0
   * @max 360
   */
  hue: number;
  /** Percentage. */
  saturation: number;
  /** Percentage. */
  lightness: number;
};
