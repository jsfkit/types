import type { Theme } from './Theme.ts';

// This is the OOXML theme override part (`a:themeOverride`).
/**
 * Parts of a theme that replace the theme in effect. Each part that's present replaces the whole
 * corresponding part of the theme. A chart uses this to keep its own colours and fonts in a
 * workbook with a different theme.
 *
 * The override's format scheme (fill, line, and effect styles) isn't kept, because JSF `Theme`
 * doesn't cover format schemes yet.
 *
 * @group Themes
 */
export type ThemeOverride = Partial<Pick<Theme, 'colorScheme' | 'fontScheme'>>;
