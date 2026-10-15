/**
 * Settings for treemap plots.
 *
 * @group Charts
 */
export type ChartLayoutTreemap = {
  /**
   * The kind of settings. These settings apply to a `treemap` plot.
   */
  type: 'treemap';

  /**
   * How labels for parent categories are placed.
   *
   * @default "overlapping"
   */
  parentLabelLayout?: 'none' | 'banner' | 'overlapping';
};
