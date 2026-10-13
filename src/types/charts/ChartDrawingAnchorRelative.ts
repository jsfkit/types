import type { ChartRelativePoint } from './ChartRelativePoint.ts';

// This is OOXML `cdr:relSizeAnchor`.
/**
 * Anchors a shape by both corners, relative to the chart area. The shape moves and resizes with
 * the chart.
 *
 * @group Charts
 */
export type ChartDrawingAnchorRelative = {
  type: 'relative';
  /**
   * Top-left corner.
   */
  from: ChartRelativePoint;
  /**
   * Bottom-right corner.
   */
  to: ChartRelativePoint;
};
