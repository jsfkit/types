import type { integer } from '../integer.ts';

/**
 * Settings for box and whisker plots.
 *
 * @group Charts
 */
export type ChartBoxplotLayout = {
  /**
   * Space between the boxes of adjacent categories, as a percentage of the box width (0-500).
   *
   * @min 0
   * @max 500
   * @default 150
   */
  gapWidth?: integer;

  /** @default true */
  showMeanMarkers?: boolean;
  /** @default false */
  showMeanLine?: boolean;
  /** @default false */
  showInnerPoints?: boolean;
  /** @default true */
  showOutliers?: boolean;
};
