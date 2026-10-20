import type { GraphicAnchorRelative } from '../dml/anchor/GraphicAnchorRelative.ts';
import type { GraphicAnchorAbsoluteSize } from '../dml/anchor/GraphicAnchorAbsoluteSize.ts';

/**
 * How a shape drawn on top of a chart is anchored to the chart area.
 *
 * @group Charts
 */
export type ChartDrawingAnchor = GraphicAnchorRelative | GraphicAnchorAbsoluteSize;
