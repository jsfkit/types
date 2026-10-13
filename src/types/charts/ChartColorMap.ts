import type { ChartColorMapName } from './ChartColorMapName.ts';
import type { ChartThemeColorSlot } from './ChartThemeColorSlot.ts';

// XXX: promote to Themes
// This is OOXML `c:clrMapOvr`.
/**
 * Maps every theme color name to a theme color slot.
 *
 * To resolve a theme color in a chart:
 *
 * 1. Translate the color's name through the color map. Slot names (`lt1`, `dk1`, `lt2`, `dk2`)
 *    are used as they are, and so is `phClr`, which refers to a style's color.
 * 2. Look up the slot in the chart's color scheme: `themeOverride.colorScheme` when present,
 *    otherwise the workbook theme's `colorScheme`.
 * 3. Apply the color's transforms.
 *
 * @group Charts
 */
export type ChartColorMap = Record<ChartColorMapName, ChartThemeColorSlot>;
