import type { Graphic } from '../dml/Graphic.ts';
import type { ChartDrawingAnchor } from './ChartDrawingAnchor.ts';

/**
 * A graphic drawn on top of a chart, with its position in the chart area.
 *
 * This is the chart counterpart of a worksheet {@link Drawing}: the same graphic content, with an
 * anchor in the chart area instead of on the cell grid. The graphic is a {@link Graphic}, so
 * shapes, text boxes, connectors, pictures, and groups work the same as in worksheet drawings.
 * Positions inside it (`xfrm`) are relative to the anchor.
 *
 * @group Charts
 */
export type ChartDrawing = {
  /**
   * Where the graphic is placed, relative to the chart area.
   */
  anchor: ChartDrawingAnchor;

  /**
   * The graphic.
   */
  content: Graphic;
};
