import type { Xfrm } from './Xfrm.ts';

/**
 * A chart or plot.
 *
 * @group Drawings
 */
export type GraphicChart = {
  /** Type discriminator for a chart. */
  type: 'chart',

  /** Unique identifier for this chart. */
  id: string,

  /** Display name of the chart. */
  name: string,

  /**
   * The key of the chart in {@link Workbook.charts}.
   */
  chartId: string,

  // XXX: Will be added in a future update.
  // locked?: any,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,
};
