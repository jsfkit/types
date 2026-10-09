import type { ChartBandScale } from './ChartBandScale.ts';
import type { ChartContinuousScale } from './ChartContinuousScale.ts';
import type { ChartOrdinalScale } from './ChartOrdinalScale.ts';
import type { ChartPointScale } from './ChartPointScale.ts';
import type { ChartTimeScale } from './ChartTimeScale.ts';

/**
 * A scale maps data values to a visual range, such as a position or a color.
 *
 * @group Charts
 */
export type ChartScale =
  ChartBandScale |
  ChartPointScale |
  ChartContinuousScale |
  ChartTimeScale |
  ChartOrdinalScale;
