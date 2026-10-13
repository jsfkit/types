import type { Shape } from '../dml/shape/Shape.ts';
import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartAxisCrossing } from './ChartAxisCrossing.ts';
import type { ChartDisplayUnit } from './ChartDisplayUnit.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';
import type { ChartTickMark } from './ChartTickMark.ts';
import type { ChartTitle } from './ChartTitle.ts';

/**
 * An axis draws the ticks, labels, and gridlines for a scale.
 *
 * @group Charts
 */
export type ChartAxis = {
  /**
   * Identifies the axis within the chart. Another axis names it in its `crosses` to cross it.
   */
  id: string;

  /**
   * The scale that this axis draws, named by its `id`.
   */
  scale: string;

  /**
   * Which side of the plot area the axis is on. A `depth` axis runs front to back in a 3D chart,
   * and its placement follows from {@link Chart.view3D}.
   */
  orient: 'top' | 'right' | 'bottom' | 'left' | 'depth';

  // This is OOXML `c:delete`, or the ChartEx axis `hidden` attribute.
  /**
   * Whether the axis is hidden. A hidden axis still positions the data.
   *
   * @default false
   */
  hidden?: boolean;

  /**
   * The axis title. When absent, the axis has no title. When present without `text` or `formula`,
   * the title text is automatic ("Axis Title").
   */
  title?: ChartTitle;

  /**
   * Which perpendicular axis this axis crosses, and where. When absent, it crosses the other axis
   * of its plot, at the automatic position.
   *
   * @default { type: 'auto' }
   */
  crosses?: ChartAxisCrossing;

  /**
   * Tick marks. Unlike `gridlines`, these are settings with defaults, so an absent or empty
   * `tickMarks` means outside major tick marks and no minor ones. Tick marks are drawn in the
   * style of the axis line.
   */
  tickMarks?: {
    /**
     * How the major tick marks are drawn.
     *
     * @default "outside"
     */
    major?: ChartTickMark;

    /**
     * How the minor tick marks are drawn.
     *
     * @default "none"
     */
    minor?: ChartTickMark;

    /**
     * For a category axis, show a tick mark every Nth category.
     *
     * @default 1
     */
    interval?: integer;
  };

  /**
   * Where the tick labels go, and which are shown. Their number format and text style are set on
   * the axis itself, with `numberFormat` and `textStyle`.
   */
  tickLabels?: {
    /**
     * Where the tick labels are placed.
     *
     * | Value    | Placement
     * |----------|-----------------------------------------------------
     * | `nextTo` | Next to the axis.
     * | `low`    | At the low end of the perpendicular axis.
     * | `high`   | At the high end of the perpendicular axis.
     * | `none`   | Labels are hidden.
     *
     * @default "nextTo"
     */
    position?: 'nextTo' | 'low' | 'high' | 'none';

    /**
     * For a category axis, how the labels align with their tick marks.
     *
     * @default "center"
     */
    align?: 'center' | 'left' | 'right';

    /**
     * For a category axis, the distance between the labels and the axis, as a percentage of the
     * default distance (0-1000).
     *
     * @min 0
     * @max 1000
     * @default 100
     */
    offset?: integer;

    /**
     * For a category axis, show every Nth label. When absent, the interval is automatic.
     */
    interval?: integer;
  };

  // This is the inverse of OOXML `c:noMultiLvlLbl`.
  /**
   * For a category axis with multi-level categories, whether to show every level of labels. When
   * `false`, only the innermost level is shown.
   *
   * @default true
   */
  multiLevelLabels?: boolean;

  /**
   * Gridlines. A gridline is shown when its style is present, and an empty style (`{}`) draws it
   * with the default: 0.75pt `tx1` 15%/85% for major gridlines, and 0.75pt `tx1` 5%/95% for minor
   * gridlines.
   */
  gridlines?: {
    /**
     * Major gridlines, at the major ticks.
     */
    major?: Line;
    /**
     * Minor gridlines, at the minor ticks.
     */
    minor?: Line;
  };

  /**
   * Excel number format code for the tick labels. When `sourceLinked` is `true`, the labels follow
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
   * Scale the tick labels by a built-in unit or a custom factor. When absent, they aren't scaled.
   */
  displayUnits?: ChartDisplayUnit | number;

  /**
   * Label for the display units. When absent, no label is shown. When present without `text` or
   * `formula`, the text is the unit name, for example "Thousands".
   */
  displayUnitsLabel?: ChartTitle;

  /**
   * Style of the axis line. By default, a category axis has a 0.75pt `tx1` 15%/85% line, and
   * other axes have none. A category axis is one for a band, point, or time scale, or the `x` axis
   * of a `point` plot. A `depth` axis is never a category axis.
   */
  shape?: Shape;

  /**
   * Text style of the tick labels. The axis title and the display units label have their own. By
   * default, the labels are 9pt `tx1` 65%/35% in the minor font. See {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;
};
