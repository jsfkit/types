import type { ChartScaleCategoryBase } from './ChartScaleCategoryBase.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';

// This is OOXML `c:crossBetween val="between"` on the value axis that crosses this one.
/**
 * Categories placed in bands, with bars or points centered in each band. This is Excel's "Between
 * tick marks" axis position.
 *
 * @group Charts
 */
export type ChartScaleBand = ChartScaleBase & ChartScaleCategoryBase & {
  /**
   * Categories placed in bands.
   */
  type: 'band';
};
