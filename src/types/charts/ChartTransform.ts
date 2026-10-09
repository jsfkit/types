import type { ChartBinTransform } from './ChartBinTransform.ts';
import type { ChartBoxplotTransform } from './ChartBoxplotTransform.ts';
import type { ChartHierarchyTransform } from './ChartHierarchyTransform.ts';
import type { ChartWaterfallTransform } from './ChartWaterfallTransform.ts';

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
  ChartBinTransform |
  ChartBoxplotTransform |
  ChartWaterfallTransform |
  ChartHierarchyTransform;
