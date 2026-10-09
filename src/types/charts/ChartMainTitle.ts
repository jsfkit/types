import type { ChartSideAlign } from './ChartSideAlign.ts';
import type { ChartTitle } from './ChartTitle.ts';

/**
 * The chart's own title. Unlike axis titles, it can be placed on any side of the chart.
 *
 * @group Charts
 */
export type ChartMainTitle = ChartTitle & {
  /**
   * Which side of the chart the title is on. Legacy charts always put it at the top, and ChartEx
   * charts can use any side (`pos`).
   *
   * @default "top"
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Where the title sits along its side (ChartEx `align`).
   *
   * @default "center"
   */
  align?: ChartSideAlign;
};
