import type { ThemeColorMapName } from '../themes/ThemeColorMapName.ts';
import type { ThemeColorSlot } from '../themes/ThemeColorSlot.ts';

/**
 * Reference to a theme colour.
 *
 * A theme colour is defined in the workbook's theme. Theme colours are used to ensure a consistent
 * palette across a workbook.
 *
 * @group Colors
 */
export type SchemeColor = {
  type: 'theme';
  /**
   * Theme colour name.
   *
   * | Value      | Colour                                                                   |
   * |------------|--------------------------------------------------------------------------|
   * | `bg1`      | Background 1. Through the colour map, by default the `lt1` slot.         |
   * | `tx1`      | Text 1. Through the colour map, by default the `dk1` slot.               |
   * | `bg2`      | Background 2. Through the colour map, by default the `lt2` slot.         |
   * | `tx2`      | Text 2. Through the colour map, by default the `dk2` slot.               |
   * | `lt1`      | The theme's "light 1" slot.                                              |
   * | `dk1`      | The theme's "dark 1" slot.                                               |
   * | `lt2`      | The theme's "light 2" slot.                                              |
   * | `dk2`      | The theme's "dark 2" slot.                                               |
   * | `accent1`  | Accent 1. Each accent goes through the colour map, by default unchanged. |
   * | `accent2`  | Accent 2.                                                                |
   * | `accent3`  | Accent 3.                                                                |
   * | `accent4`  | Accent 4.                                                                |
   * | `accent5`  | Accent 5.                                                                |
   * | `accent6`  | Accent 6.                                                                |
   * | `hlink`    | Unvisited hyperlink. Through the colour map, by default unchanged.       |
   * | `folHlink` | Visited hyperlink. Through the colour map, by default unchanged.         |
   * | `phClr`    | The placeholder colour: the colour given by the style that uses it.      |
   *
   * The names that go through a colour map are {@link ThemeColorMapName}s, and the slots are
   * {@link ThemeColorSlot}s, which name colours in the theme's {@link ThemeColorScheme}.
   */
  value: ThemeColorMapName | ThemeColorSlot | 'phClr';
};
