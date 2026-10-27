import type { CFRuleBase } from '../CFRuleBase.ts';
import type { CFColorStop } from './CFColorStop.ts';

/**
 * Format cells with a background colour interpolated between two or three colour stops, according
 * to where each cell's value falls in the range.
 *
 * @group ConditionalFormatting
 */
export type CFColorScaleRule = CFRuleBase & {
  type: 'colorScale';
  /**
   * Colour stops in ascending threshold order (at least two). Two stops set the colours at the low
   * and high ends of the range. Three stops adds a midpoint. The array's length is left unlimited
   * to allow more stops to be supported in the future, but current implementations only support two
   * or three stops.
   */
  colorScale: CFColorStop[];
  /**
   * A condition, as a formula, that limits which cells show the colour scale. The colour scale is
   * shown only in cells where the formula returns a nonzero value. When absent, the colour scale is
   * shown in every cell of `ref`. Relative references are anchored to the first cell of `ref`.
   *
   * The formula should not include a leading `=`.
   */
  formula?: string;
};
