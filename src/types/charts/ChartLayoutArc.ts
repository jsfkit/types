import type { DmlAngle } from '../dml/DmlAngle.ts';
import type { Percentage } from '../dml/shape/Percentage.ts';
import type { ChartLayoutOfPie } from './ChartLayoutOfPie.ts';

/**
 * Settings for arc plots: pie, doughnut, pie-of-pie, and bar-of-pie charts.
 *
 * @group Charts
 */
export type ChartLayoutArc = {
  /**
   * The kind of settings. These settings apply to an `arc` plot.
   */
  type: 'arc';

  /**
   * The kind of pie. This decides which series are drawn:
   *
   * | Value      | Draws
   * |------------|-----------------------------------------------------------------
   * | `pie`      | Only the first series that isn't hidden, in plotting order.
   * | `doughnut` | Every series that isn't hidden, as rings from the inside out.
   * | `pieOfPie` | Like `pie`, with some points moved to a second, smaller pie.
   * | `barOfPie` | Like `pie`, with some points moved to a stacked bar.
   *
   * A pie's other series are kept, but not drawn. They aren't marked `hidden`, so they appear
   * when the chart is changed to a type that draws every series.
   *
   * @default "pie"
   */
  variant?: 'pie' | 'doughnut' | 'pieOfPie' | 'barOfPie';

  /**
   * Where the first slice starts, clockwise from the top, in 60,000ths of a degree (0 to 21600000,
   * which is 0-360 degrees).
   *
   * @min 0
   * @max 21600000
   * @default 0
   */
  startAngle?: DmlAngle;

  /**
   * Size of the doughnut hole, as a percentage of the chart diameter (10-90). Applies only when
   * `variant` is `doughnut`.
   *
   * @min 10
   * @max 90
   * @default 75
   */
  holeSize?: Percentage;

  /**
   * Which points go to the secondary plot, and how it's sized. Applies only when `variant` is
   * `pieOfPie` or `barOfPie`.
   */
  ofPie?: ChartLayoutOfPie;
};
