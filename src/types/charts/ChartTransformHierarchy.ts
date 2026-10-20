import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Builds a hierarchy from a list of level fields. Used for treemap and sunburst charts.
 *
 * @group Charts
 */
export type ChartTransformHierarchy = ChartTransformBase & {
  /**
   * Builds a hierarchy.
   */
  type: 'hierarchy';

  /**
   * Category fields from the outermost level to the innermost level.
   */
  levels: string[];

  /**
   * The field holding each record's value, which sizes its tile or segment.
   */
  valueField: string;
};
