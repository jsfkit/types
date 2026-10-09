import type { ChartRelativePoint } from './ChartRelativePoint.ts';

/**
 * Anchors a shape by both corners, relative to the chart area. The shape moves and resizes with
 * the chart. This is OOXML `cdr:relSizeAnchor`.
 *
 * @group Charts
 */
export type ChartDrawingAnchorRelative = {
  type: 'relative';
  /** Top-left corner. */
  from: ChartRelativePoint;
  /** Bottom-right corner. */
  to: ChartRelativePoint;
};
