import type { ThemeColorScheme } from '../themes/ThemeColorScheme.ts';

/**
 * A theme color slot: one of the twelve colors in a theme's color scheme.
 *
 * @group Charts
 */
export type ChartThemeColorSlot = Exclude<keyof ThemeColorScheme, 'name'>;
