import type { Theme } from '../themes/Theme.ts';

// This is the OOXML theme override part (`a:themeOverride`).
/**
 * Parts of the workbook theme that a chart replaces. Each part that's present replaces the whole
 * corresponding part of the workbook theme for this chart.
 *
 * The override's format scheme (fill, line, and effect styles) isn't kept, because JSF `Theme`
 * doesn't cover format schemes yet.
 *
 * @group Charts
 */
export type ChartThemeOverride = Partial<Pick<Theme, 'colorScheme' | 'fontScheme'>>;
