import type { Color } from '../../../styles/Color.ts';
import type { FillPatternStyle } from './PatternStyle.ts';

/**
 * Pattern fill.
 *
 * Defines a fill using a repeating pattern (dots, stripes, crosshatch, etc.)
 * with configurable foreground and background colors.
 *
 * @group Drawings
 */
export type PatternFill = {
  /** Type discriminator for pattern fills. */
  type: 'pattern';

  /** Foreground color of the pattern. */
  fg?: Color;

  /** Background color of the pattern. */
  bg?: Color;

  /** Pattern style defining the visual design (horizontal, vertical, diagonal, dots, etc.). */
  style?: FillPatternStyle;
};
