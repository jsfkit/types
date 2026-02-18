import type { Xfrm } from './Xfrm.ts';

/**
 * A chart or plot.
 */
export type GfxChart = {
  /** Type discriminator for a chart. */
  type: 'chart',

  /** Unique identifier for this chart. */
  id: string,

  /** Display name of the chart. */
  name: string,

  // XXX: Not a part of the spec yet but should point to a collection of charts (like bitmaps).
  /** ID */
  chartId: string,

  // XXX: Not sure this is really a boolean.
  // locked?: boolean,

  /** 2D transformation (position, rotation, scale). */
  xfrm?: Xfrm,
};
