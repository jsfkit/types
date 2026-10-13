import type { ChartBinning } from './ChartBinning.ts';
import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Groups values into bins and counts them. Used for histogram and Pareto charts.
 *
 * @group Charts
 */
export type ChartTransformBin = ChartTransformBase & {
  type: 'bin';
  field: string;

  /**
   * Fields to bin separately, for example `['series']` to bin each series on its own. When absent,
   * all records are binned together.
   */
  groupBy?: string[];

  binning: ChartBinning;

  /**
   * Materialized bin boundaries. These allow exact rendering when a source application's
   * automatic binning can't be reproduced.
   */
  resolvedBoundaries?: number[];

  /**
   * Names of the generated fields.
   */
  as: {
    start: string;
    end: string;
    count: string;
    /**
     * Cumulative percentage, used for the Pareto line.
     */
    cumulative?: string;
  };
};
