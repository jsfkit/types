import type { integer } from '../integer.ts';

/**
 * Settings for funnel plots.
 *
 * @group Charts
 */
export type ChartLayoutFunnel = {
  /**
   * The kind of settings. These settings apply to a `funnel` plot.
   */
  type: 'funnel';

  /**
   * Space between the bars, as a percentage of the bar height (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;
};
