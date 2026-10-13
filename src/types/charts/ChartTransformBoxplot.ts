import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Computes quartiles, whiskers, and outliers for box and whisker charts.
 *
 * @group Charts
 */
export type ChartTransformBoxplot = ChartTransformBase & {
  /**
   * Computes box and whisker statistics.
   */
  type: 'boxplot';
  /**
   * The field holding the values to compute statistics for.
   */
  field: string;

  /**
   * Fields to compute statistics for separately, for example `['series', 'category']`. When
   * absent, all records are one group.
   */
  groupBy?: string[];

  /**
   * Whether quartiles include or exclude the median.
   *
   * @default "exclusive"
   */
  quartileMethod?: 'inclusive' | 'exclusive';

  /**
   * Names of the generated fields. A name that's absent is the same as its key, such as `q1`.
   */
  as?: {
    /**
     * The field that receives the low end of the lower whisker.
     */
    min?: string;
    /**
     * The field that receives the first quartile.
     */
    q1?: string;
    /**
     * The field that receives the median.
     */
    median?: string;
    /**
     * The field that receives the third quartile.
     */
    q3?: string;
    /**
     * The field that receives the high end of the upper whisker.
     */
    max?: string;
    /**
     * The field that receives the mean.
     */
    mean?: string;
  };
};
