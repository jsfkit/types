import type { ChartTransformBin } from './ChartTransformBin.ts';
import type { ChartTransformBoxplot } from './ChartTransformBoxplot.ts';
import type { ChartTransformHierarchy } from './ChartTransformHierarchy.ts';
import type { ChartTransformWaterfall } from './ChartTransformWaterfall.ts';

/**
 * Transforms describe data that a chart derives from its source data. Only the transforms that
 * spreadsheet charts produce are defined here.
 *
 * Statistical settings belong on the transform. Visual settings for the result belong on the
 * plot's {@link ChartPlotLayout}.
 *
 * @group Charts
 */
export type ChartTransform =
  ChartTransformBin |
  ChartTransformBoxplot |
  ChartTransformWaterfall |
  ChartTransformHierarchy;
