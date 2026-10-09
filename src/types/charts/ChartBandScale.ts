import type { ChartCategoryScaleBase } from './ChartCategoryScaleBase.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';

/**
 * Categories placed in bands, with bars or points centered in each band. This is Excel's "Between
 * tick marks" axis position, OOXML `c:crossBetween val="between"` on the value axis that crosses
 * this one.
 *
 * @group Charts
 */
export type ChartBandScale = ChartScaleBase & ChartCategoryScaleBase & {
  type: 'band';
};
