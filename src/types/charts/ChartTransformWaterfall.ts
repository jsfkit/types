import type { integer } from '../integer.ts';
import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Computes running start and end values for waterfall charts.
 *
 * @group Charts
 */
export type ChartTransformWaterfall = ChartTransformBase & {
  type: 'waterfall';
  field: string;
  categoryField: string;

  /**
   * Fields to accumulate separately, for example `['series']` for a running total per series.
   * When absent, all records form one running total.
   */
  groupBy?: string[];

  /**
   * Zero-based indexes of the records that are subtotals or totals. When absent, there are none.
   */
  subtotals?: integer[];

  /**
   * Names of the generated fields.
   */
  as: {
    start: string;
    end: string;
  };
};
