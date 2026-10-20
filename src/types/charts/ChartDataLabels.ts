import type { Shape } from '../dml/shape/Shape.ts';
import type { Line } from '../dml/shape/line/Line.ts';
import type { ChartDataLabelContent } from './ChartDataLabelContent.ts';
import type { ChartDataLabelPosition } from './ChartDataLabelPosition.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * Data labels for a plot or series.
 *
 * @group Charts
 */
export type ChartDataLabels = {
  /**
   * What each label shows. An empty list hides the labels.
   */
  show?: ChartDataLabelContent[];

  /**
   * Where labels sit relative to their points. When absent, the chart type's default applies.
   */
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

  /**
   * Style of the leader lines. By default, they're 0.75pt `tx1` 35%/65%.
   */
  leaderLines?: Line;

  /**
   * Fill and outline of the labels. By default, there are none.
   */
  shape?: Shape;

  /**
   * Text style of the labels. It merges over the style of the labels these override, and then
   * cascades like other text. By default, labels are 9pt `tx1` 75%/25% in the minor font. See
   * {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;
};
