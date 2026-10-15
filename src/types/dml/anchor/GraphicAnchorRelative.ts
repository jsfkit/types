import type { RelativePoint } from '../RelativePoint.ts';

// This is OOXML `cdr:relSizeAnchor`.
/**
 * Anchors a graphic by both corners, relative to the area it's drawn in. The graphic moves and
 * resizes with the area. Shapes drawn on a chart use this, relative to the chart area.
 *
 * @group Drawings
 */
export type GraphicAnchorRelative = {
  /**
   * Anchored by both corners.
   */
  type: 'relative';
  /**
   * Top-left corner.
   */
  from: RelativePoint;
  /**
   * Bottom-right corner.
   */
  to: RelativePoint;
};
