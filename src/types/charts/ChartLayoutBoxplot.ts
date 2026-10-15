import type { integer } from '../integer.ts';

/**
 * Settings for box and whisker plots.
 *
 * @group Charts
 */
export type ChartLayoutBoxplot = {
  /**
   * The kind of settings. These settings apply to a `boxplot` plot.
   */
  type: 'boxplot';

  /**
   * Space between the boxes of adjacent categories, as a percentage of the box width (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;

  /**
   * Whether each box shows a marker at the mean of its values. The mean includes the outliers.
   *
   * @default true
   */
  showMeanMarkers?: boolean;

  /**
   * Whether a line connects the means of a series' boxes, from category to category.
   *
   * @default false
   */
  showMeanLine?: boolean;

  /**
   * Whether each box shows its values that aren't outliers as points, on top of the box and
   * whiskers.
   *
   * @default false
   */
  showInnerPoints?: boolean;

  /**
   * Whether each box shows its outliers as points beyond the whiskers. The whiskers stop at the
   * smallest and largest values that aren't outliers, whether or not the outliers are shown.
   *
   * @default true
   */
  showOutliers?: boolean;
};
