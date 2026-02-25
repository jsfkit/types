/**
 * A colour in Microsoft's scRGB colour space.
 *
 * Equivalent to CSS `srgb-linear` colour space.
 */
export type ScRgbColor = {
  type: 'scrgb';
  /** Red value as a percentage. Can be outside the range 0-100. */
  red: number;
  /** Green value as a percentage. Can be outside the range 0-100. */
  green: number;
  /** Blue value as a percentage. Can be outside the range 0-100. */
  blue: number;
};
