import type { ChartScaleBase } from './ChartScaleBase.ts';

// This is OOXML `c:crossBetween val="between"` on the value axis that crosses this one.
/**
 * Categories placed in bands, with bars or points centered in each band. This is Excel's "Between
 * tick marks" axis position.
 *
 * @group Charts
 */
export type ChartScaleBand = ChartScaleBase & {
  /**
   * Categories placed in bands.
   */
  type: 'band';

  // This is OOXML `c:auto`.
  /**
   * Whether the scale type was chosen automatically from the data. This is Excel's "Automatically
   * select based on data" axis type.
   *
   * The scale's `type` is always the type currently in effect, so a renderer uses it as it is.
   * When `auto` is `true`, an application that changes the data chooses the type again: a
   * `time` scale when the category values are dates, otherwise a `band` or `point` scale. When
   * it's `false`, the type is fixed, like Excel's "Text axis" and "Date axis" choices.
   *
   * @default false
   */
  auto?: boolean;
};
