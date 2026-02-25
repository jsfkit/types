import type { AutoColor } from './AutoColor.ts';
import type { ColorTransform } from './ColorTransform.ts';
import type { HslColor } from './HslColor.ts';
import type { IndexedColor } from './IndexedColor.ts';
import type { PresetColor } from './PresetColor.ts';
import type { ScRgbColor } from './ScRgbColor.ts';
import type { SrgbColor } from './SrgbColor.ts';
import type { SystemColor } from './SystemColor.ts';
import type { ThemeColor } from './ThemeColor.ts';

/**
 * A colour, which can be used is various parts of a workbook. The base colour can be transformed
 * using a list of colour transformations.
 *
 * The base colour must be defined using one of the following colour models:
 *
 * - {@link SrgbColor}: Standard sRGB colour space, defined by a CSS-style hex string (e.g.
 *   `#FF0000`).
 * - {@link ScRgbColor}: A colour in Microsoft's scRGB colour space, defined by red, green, and blue
 *   values as percentages.
 * - {@link HslColor}: A colour in HSL colour space, defined by hue, saturation, and lightness
 *   values.
 * - {@link SystemColor}: An OS-defined system colour (e.g. window text, highlight), defined using
 *   one of an enumerated set of values.
 * - {@link ThemeColor}: A reference to a theme colour.
 * - {@link PresetColor}: A preset colour, similar to CSS's defined colours.
 * - {@link AutoColor}: Colour choice left to the application.
 * - {@link IndexedColor}: A legacy colour indexing scheme.
 */
export type Color = (
  SrgbColor |
  ScRgbColor |
  HslColor |
  SystemColor |
  ThemeColor |
  PresetColor |
  AutoColor |
  IndexedColor
) & {
  /**
   * Optional list of colour transformations to apply to the base colour.
   *
   * The transformations must be applied in order, and each transformation must be applied to the
   * result of the previous one. There can be multiple transformations of the same type.
   *
   * The transformations are defined by {@link ColorTransform}, which includes operations such as
   * tinting, shading, and saturation adjustments.
   */
  transforms?: ColorTransform[];
};
