import type { Shape } from '../dml/shape/Shape.ts';

/**
 * Fill and outline for a chart element. This is the subset of a JSF {@link Shape} that applies
 * to chart elements, so a converter can reuse the same DrawingML reader as for drawings.
 *
 * @group Charts
 */
export type ChartShape = Pick<Shape, 'fill' | 'line'>;
