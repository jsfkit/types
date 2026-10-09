import type { ChartDrawingAnchorAbsoluteSize } from './ChartDrawingAnchorAbsoluteSize.ts';
import type { ChartDrawingAnchorRelative } from './ChartDrawingAnchorRelative.ts';

/**
 * How a shape drawn on top of a chart is anchored to the chart area.
 *
 * @group Charts
 */
export type ChartDrawingAnchor = ChartDrawingAnchorRelative | ChartDrawingAnchorAbsoluteSize;
