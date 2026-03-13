import type { ThemeCustomColor } from './ThemeCustomColor.ts';
import type { ThemeColorScheme } from './ThemeColorScheme.ts';
import type { ThemeFontScheme } from './ThemeFontScheme.ts';

/**
 * Workbook theme.
 *
 * This covers colours and fonts, but does not include fill styles, background fill styles, line
 * styles, and effect styles. This is left for a future date.
 *
 * @group Themes
 */
export type Theme = {
  /**
   * Theme name.
   *
   * @default ""
   */
  name?: string;
  /** Theme colour palette. */
  colorScheme: ThemeColorScheme;
  /** Theme major/minor font choice. */
  fontScheme: ThemeFontScheme;
  /**
   * Custom colour palettes.
   */
  customColors?: ThemeCustomColor[];
};
