import type { ThemeColorScheme } from '../themes/ThemeColorScheme.ts';

// XXX: change to list type and promote to Themes
/**
 * A theme color slot: one of the twelve colors in a theme's color scheme.
 *
 * @group Charts
 */
export type ChartThemeColorSlot = Exclude<keyof ThemeColorScheme, 'name'>;
