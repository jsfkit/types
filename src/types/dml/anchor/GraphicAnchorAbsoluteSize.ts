import type { Extent } from '../Extent.ts';
import type { RelativePoint } from '../RelativePoint.ts';

// This is OOXML `cdr:absSizeAnchor`.
/**
 * Anchors a graphic's top-left corner relative to the area it's drawn in, with a fixed size. The
 * graphic moves with the area but keeps its size. Shapes drawn on a chart use this, relative to
 * the chart area.
 *
 * @group Drawings
 */
export type GraphicAnchorAbsoluteSize = {
  /**
   * Anchored by the top-left corner, with a fixed size.
   */
  type: 'absoluteSize';
  /**
   * Top-left corner.
   */
  from: RelativePoint;
  /**
   * Size in EMUs.
   */
  ext: Extent;
};
