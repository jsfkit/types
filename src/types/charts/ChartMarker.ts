import type { integer } from '../integer.ts';
import type { ChartMarkerSymbol } from './ChartMarkerSymbol.ts';
import type { ChartShape } from './ChartShape.ts';

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

  shape?: ChartShape;
};
