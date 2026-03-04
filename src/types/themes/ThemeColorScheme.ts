import type { Color } from '../colors/Color.ts';

/**
 * Canonical theme colour palette.
 *
 * Consists of twelve colours that come together to form the colour scheme for a theme.
 */
export type ThemeColorScheme = {
  /** Colour scheme name. */
  name: string;
  /** The "light 1" colour. */
  lt1: Color;
  /** The "dark 1" colour. */
  dk1: Color;
  /** The "light 2" colour. */
  lt2: Color;
  /** The "dark 2" colour. */
  dk2: Color;
  /** Accent 1 colour. */
  accent1: Color;
  /** Accent 2 colour. */
  accent2: Color;
  /** Accent 3 colour. */
  accent3: Color;
  /** Accent 4 colour. */
  accent4: Color;
  /** Accent 5 colour. */
  accent5: Color;
  /** Accent 6 colour. */
  accent6: Color;
  /** Unvisited hyperlink colour. */
  hlink: Color;
  /** Visited hyperlink colour. */
  folHlink: Color;
};
