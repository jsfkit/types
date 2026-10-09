import type { Drawing } from '../dml/Drawing.ts';
import type { ChartDrawingAnchor } from './ChartDrawingAnchor.ts';

/**
 * Graphics drawn on top of a chart, with their position in the chart area.
 *
 * This is a JSF {@link Drawing} with a chart-relative anchor in place of a cell-grid anchor. The
 * `content` is JSF `Graphic` objects, so shapes, text boxes, connectors, pictures, and groups work
 * the same as in worksheet drawings. Positions inside the content (`xfrm`) are relative to the
 * anchor, as in worksheet drawings.
 *
 * @group Charts
 */
export type ChartDrawing = Omit<Drawing, 'anchor'> & {
  anchor: ChartDrawingAnchor;
};
