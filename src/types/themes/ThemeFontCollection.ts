import type { ThemeSupplementalFont } from './ThemeSupplementalFont.ts';
import type { ThemeTextFont } from './ThemeTextFont.ts';

/**
 * A font collection from the theme.
 *
 * A font collection consists of a font definition for Latin, East Asian, and complex script. On top
 * of these, a font collection can also define a font for use in a specific language or languages.
 */
export type ThemeFontCollection = {
  /** Latin script defaults. */
  latin: ThemeTextFont;
  /** East Asian script defaults. */
  eastAsian: ThemeTextFont;
  /** Complex script defaults. */
  complexScript: ThemeTextFont;
  /**
   * Additional fonts used for language-specific fonts in themes. For example, one can specify a
   * font that gets used only within the Japanese language context.
   */
  supplemental?: ThemeSupplementalFont[];
};
