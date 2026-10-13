import type { integer } from '../integer.ts';
import type { ChartTransformBase } from './ChartTransformBase.ts';

/**
 * Computes running start and end values for waterfall charts.
 *
 * @group Charts
 */
export type ChartTransformWaterfall = ChartTransformBase & {
  /**
   * Computes running totals for a waterfall.
   */
  type: 'waterfall';
  /**
   * The field holding each column's change, or its value for a subtotal or total.
   */
  field: string;
  /**
   * The field holding each column's category.
   */
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
    /**
     * The field that receives where each column starts.
     */
    start: string;
    /**
     * The field that receives where each column ends.
     */
    end: string;
  };
};
