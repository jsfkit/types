import type { ChartScaleCategoryBase } from './ChartScaleCategoryBase.ts';
import type { ChartScaleBase } from './ChartScaleBase.ts';

// This is OOXML `c:crossBetween val="midCat"` on the value axis that crosses this one.
/**
 * Categories placed on points, with the first and last on the edges of the axis. This is Excel's
 * "On tick marks" axis position.
 *
 * @group Charts
 */
export type ChartScalePoint = ChartScaleBase & ChartScaleCategoryBase & {
  /**
   * Categories placed on points.
   */
  type: 'point';
};
