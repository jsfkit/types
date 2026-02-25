/**
 * Standard sRGB colour space.
 */
export type SrgbColor = {
  type: 'srgb';
  /**
   * CSS-style hex, e.g. `#FF0000`. Always six digits, always uppercase. No alpha channel.
   * @pattern ^#[A-F0-9]{6}$
   */
  value: string;
};
