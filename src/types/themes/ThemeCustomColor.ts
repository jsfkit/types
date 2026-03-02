import type { Color } from '../colors/Color.ts';

/**
 * A custom colour, used to add extra colours to a theme.
 */
export type ThemeCustomColor = {
  name?: string;
  color: Color;
};
