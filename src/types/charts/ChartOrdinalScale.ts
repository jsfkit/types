import type { Color } from '../colors/Color.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';

/**
 * Maps discrete values to discrete outputs, such as series names to colors.
 *
 * @group Charts
 */
export type ChartOrdinalScale = ChartScaleBase & {
  type: 'ordinal';

  /**
   * Explicit output colors. When absent, colors come from the theme accents.
   */
  range?: Color[];
};
