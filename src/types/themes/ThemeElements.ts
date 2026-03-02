import type { ThemeColorScheme } from './ThemeColorScheme.ts';
import type { ThemeFontScheme } from './ThemeFontScheme.ts';

/**
 * Theme formatting options. The workhorse of the theme.
 *
 * This is where the bulk of workbook's shared theme information is contained. Contains the colour
 * palette and chosen major/minor fonts.
 */
export type ThemeElements = {
  colorScheme: ThemeColorScheme;
  fontScheme: ThemeFontScheme;
};
