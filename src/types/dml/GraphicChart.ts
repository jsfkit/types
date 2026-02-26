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

  // XXX: Not a part of the spec yet but should point to a collection of charts (like bitmaps).
  /** ID */
  chartId: string,

  // XXX: Will be added in a future update.
  // locked?: any,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,
};
