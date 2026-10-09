import type { Line } from '../dml/shape/line/Line.ts';
import type { ChartDataLabelContent } from './ChartDataLabelContent.ts';
import type { ChartDataLabelPosition } from './ChartDataLabelPosition.ts';
import type { ChartShape } from './ChartShape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * Data labels for a plot or series.
 *
 * @group Charts
 */
export type ChartDataLabels = {
  /** What each label shows. An empty list hides the labels. */
  show?: ChartDataLabelContent[];

  /** Where labels sit relative to their points. When absent, the chart type's default applies. */
  position?: ChartDataLabelPosition;

  /**
   * Separator between the parts of a label.
   *
   * @default ", "
   */
  separator?: string;

  /**
   * Excel number format code for label values. When `sourceLinked` is `true`, the labels follow
   * the source data's format instead, and this is only a fallback.
   *
   * @default "General"
   */
  numberFormat?: string;

  /**
   * Whether the number format follows the source data.
   *
   * @default true
   */
  sourceLinked?: boolean;

  /**
   * Whether leader lines connect labels that have moved away from their points.
   *
   * @default false
   */
  showLeaderLines?: boolean;

  leaderLines?: Line;

  shape?: ChartShape;

  textStyle?: ChartTextStyle;
};
