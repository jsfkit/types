import type { ThemeCustomColor } from './ThemeCustomColor.ts';
import type { ThemeColorScheme } from './ThemeColorScheme.ts';
import type { ThemeFontScheme } from './ThemeFontScheme.ts';


/**
 * Workbook theme.
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
