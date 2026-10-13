import type { ChartScaleBand } from './ChartScaleBand.ts';
import type { ChartScaleContinuous } from './ChartScaleContinuous.ts';
import type { ChartScaleOrdinal } from './ChartScaleOrdinal.ts';
import type { ChartScalePoint } from './ChartScalePoint.ts';
import type { ChartScaleTime } from './ChartScaleTime.ts';

/**
 * A scale maps data values to a visual range, such as a position or a color.
 *
 * @group Charts
 */
export type ChartScale =
  ChartScaleBand |
  ChartScalePoint |
  ChartScaleContinuous |
  ChartScaleTime |
  ChartScaleOrdinal;
