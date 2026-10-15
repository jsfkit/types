import type { ThemeColorMapName } from './ThemeColorMapName.ts';
import type { ThemeColorSlot } from './ThemeColorSlot.ts';

// This is OOXML `a:clrMap`, or `c:clrMapOvr` in a chart.
/**
 * Maps every theme colour name to a theme colour slot. A colour that uses a name such as `bg1` or
 * `tx1` ({@link SchemeColor}) gets its colour from the slot the name maps to.
 *
 * The default map translates `bg1` to `lt1`, `tx1` to `dk1`, `bg2` to `lt2`, and `tx2` to `dk2`,
 * and every other name to the slot with the same name. A map that swaps the light and dark slots
 * gives light text on a dark background.
 *
 * @group Themes
 */
export type ThemeColorMap = Record<ThemeColorMapName, ThemeColorSlot>;
