import type { Extent } from '../dml/Extent.ts';
import type { ChartRelativePoint } from './ChartRelativePoint.ts';

/**
 * Anchors a shape's top-left corner relative to the chart area, with a fixed size. The shape moves
 * with the chart but keeps its size. This is OOXML `cdr:absSizeAnchor`.
 *
 * @group Charts
 */
export type ChartDrawingAnchorAbsoluteSize = {
  type: 'absoluteSize';
  /** Top-left corner. */
  from: ChartRelativePoint;
  /** Size in EMUs. */
  ext: Extent;
};
