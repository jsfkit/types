import type { integer } from '../integer.ts';

/**
 * Settings for pie-of-pie and bar-of-pie charts. The points that go to the secondary plot are
 * combined into a single "Other" slice in the main pie. A data point override or data label for
 * that slice uses the index right after the series' last point.
 *
 * @group Charts
 */
export type ChartLayoutOfPie = {
  /**
   * How points are chosen for the secondary plot.
   *
   * | Value      | Points in the secondary plot
   * |------------|------------------------------------------------------------------
   * | `auto`     | Excel's default choice.
   * | `position` | The last `splitValue` points of the series.
   * | `value`    | Points whose value is less than `splitValue`.
   * | `percent`  | Points whose share of the total is less than `splitValue` percent.
   * | `custom`   | The points listed in `customPoints`.
   *
   * @default "auto"
   */
  splitType?: 'auto' | 'position' | 'value' | 'percent' | 'custom';

  /**
   * The threshold or count for the `position`, `value`, and `percent` split types. When absent,
   * the split is the same as `auto`.
   */
  splitValue?: number;

  /**
   * For the `custom` split type, zero-based indexes of the points in the secondary plot.
   */
  customPoints?: integer[];

  /**
   * Size of the secondary plot, as a percentage of the main pie's size (5-200).
   *
   * @min 5
   * @max 200
   * @default 75
   */
  secondPlotSize?: integer;

  /**
   * Space between the main pie and the secondary plot, as a percentage of the main pie's radius
   * (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;
};
