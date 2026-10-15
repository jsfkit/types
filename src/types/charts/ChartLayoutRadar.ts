/**
 * Settings for radar plots.
 *
 * @group Charts
 */
export type ChartLayoutRadar = {
  /**
   * The kind of settings. These settings apply to a `line` or `area` plot drawn on radar axes.
   */
  type: 'radar';

  /**
   * @default "standard"
   */
  style?: 'standard' | 'marker' | 'filled';
};
