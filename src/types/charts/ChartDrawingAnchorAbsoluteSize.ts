import type { Extent } from '../dml/Extent.ts';
import type { ChartRelativePoint } from './ChartRelativePoint.ts';

// This is OOXML `cdr:absSizeAnchor`.
/**
 * Anchors a shape's top-left corner relative to the chart area, with a fixed size. The shape moves
 * with the chart but keeps its size.
 *
 * @group Charts
 */
export type ChartDrawingAnchorAbsoluteSize = {
  /**
   * Anchored by the top-left corner, with a fixed size.
   */
  type: 'absoluteSize';
  /**
   * Top-left corner.
   */
  from: ChartRelativePoint;
  /**
   * Size in EMUs.
   */
  ext: Extent;
};
