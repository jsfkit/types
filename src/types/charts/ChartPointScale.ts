import type { ChartCategoryScaleBase } from './ChartCategoryScaleBase.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';

/**
 * Categories placed on points, with the first and last on the edges of the axis. This is Excel's
 * "On tick marks" axis position, OOXML `c:crossBetween val="midCat"` on the value axis that
 * crosses this one.
 *
 * @group Charts
 */
export type ChartPointScale = ChartScaleBase & ChartCategoryScaleBase & {
  type: 'point';
};
