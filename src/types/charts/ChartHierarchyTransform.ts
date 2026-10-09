import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Builds a hierarchy from a list of level fields. Used for treemap and sunburst charts.
 *
 * @group Charts
 */
export type ChartHierarchyTransform = ChartTransformBase & {
  type: 'hierarchy';

  /** Category fields from the outermost level to the innermost level. */
  levels: string[];

  valueField: string;
};
