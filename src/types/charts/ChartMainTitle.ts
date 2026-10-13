import type { ChartSideAlign } from './ChartSideAlign.ts';
import type { ChartTitle } from './ChartTitle.ts';

/**
 * The chart's own title. Unlike axis titles, it can be placed on any side of the chart.
 *
 * A chart title that doesn't set a font size of its own takes 1.2 times the size in
 * `Chart.textStyle`. Other elements take that size as it is.
 *
 * @group Charts
 */
export type ChartMainTitle = ChartTitle & {
  // Legacy charts always put the title at the top, and ChartEx charts can use any side (`pos`).
  /**
   * Which side of the chart the title is on.
   *
   * @default "top"
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  // This is ChartEx `align`.
  /**
   * Where the title sits along its side.
   *
   * @default "center"
   */
  align?: ChartSideAlign;
};
