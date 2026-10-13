import type { Shape } from '../dml/shape/Shape.ts';
import type { PivotArea } from '../pivotTables/PivotArea.ts';
import type { ChartDataLabel } from './ChartDataLabel.ts';
import type { ChartMarker } from './ChartMarker.ts';
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
  /**
   * The pivot items that the format applies to. This is the `pivotArea` of the `chartFormat` in
   * the pivot table part.
   */
  area: PivotArea;

  /**
   * Whether the format applies to whole series. When `false`, it applies to the individual
   * points that the area selects.
   *
   * @default false
   */
  series?: boolean;

  /**
   * Fill and outline for the series or points that the area selects. It applies as the series'
   * `shape` or as each point's `shape` would. This is OOXML `c:pivotFmt/c:spPr`.
   */
  shape?: Shape;

  /**
   * Marker for the series or points that the area selects. This is OOXML `c:pivotFmt/c:marker`.
   */
  marker?: ChartMarker;

  /**
   * Data label for the series or points that the area selects. This is OOXML
   * `c:pivotFmt/c:dLbl`.
   */
  label?: ChartDataLabel;

  /**
   * Text style for the series or points that the area selects. This is OOXML
   * `c:pivotFmt/c:txPr`.
   */
  textStyle?: ChartTextStyle;
};
