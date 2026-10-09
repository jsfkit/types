import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Computes quartiles, whiskers, and outliers for box and whisker charts.
 *
 * @group Charts
 */
export type ChartBoxplotTransform = ChartTransformBase & {
  type: 'boxplot';
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

  /** Names of the generated fields. A name that's absent is the same as its key, such as `q1`. */
  as?: {
    min?: string;
    q1?: string;
    median?: string;
    q3?: string;
    max?: string;
    mean?: string;
  };
};
