import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';
import type { ChartMarkerSymbol } from './ChartMarkerSymbol.ts';

/**
 * A marker drawn at each point of a line, scatter, or radar series.
 *
 * @group Charts
 */
export type ChartMarker = {
  /**
   * @default "auto"
   */
  symbol?: ChartMarkerSymbol;

  /**
   * Marker size in points (2-72).
   *
   * @min 2
   * @max 72
   * @default 5
   */
  size?: integer;

  /**
   * Fill and outline of the markers. By default, both are the series' automatic color, and the
   * outline is 0.75pt.
   */
  shape?: Shape;
};
