import type { PivotArea } from '../pivotTables/PivotArea.ts';
import type { ChartDataLabel } from './ChartDataLabel.ts';
import type { ChartMarker } from './ChartMarker.ts';
import type { ChartShape } from './ChartShape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * Formatting for the pivot chart series or points that match a pivot area.
 *
 * `area` uses the same {@link PivotArea} as pivot table formats. Its field indexes refer to the
 * fields of the chart's pivot table.
 *
 * @group Charts
 */
export type ChartPivotFormat = {
  area: PivotArea;

  /**
   * Whether the format applies to whole series. When `false`, it applies to the individual
   * points that the area selects.
   *
   * @default false
   */
  series?: boolean;

  shape?: ChartShape;

  marker?: ChartMarker;

  label?: ChartDataLabel;

  textStyle?: ChartTextStyle;
};
