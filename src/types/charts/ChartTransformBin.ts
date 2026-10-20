import type { ChartBinning } from './ChartBinning.ts';
import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Groups values into bins and counts them. Used for histogram and Pareto charts.
 *
 * @group Charts
 */
export type ChartTransformBin = ChartTransformBase & {
  /**
   * Groups values into bins.
   */
  type: 'bin';
  /**
   * The field holding the values to bin.
   */
  field: string;

  /**
   * Fields to bin separately, for example `['series']` to bin each series on its own. When absent,
   * all records are binned together.
   */
  groupBy?: string[];

  /**
   * How the values are divided into bins.
   */
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
    /**
     * The field that receives each bin's lower edge.
     */
    start: string;
    /**
     * The field that receives each bin's upper edge.
     */
    end: string;
    /**
     * The field that receives the number of values in each bin.
     */
    count: string;
    /**
     * Cumulative percentage, used for the Pareto line.
     */
    cumulative?: string;
  };
};
