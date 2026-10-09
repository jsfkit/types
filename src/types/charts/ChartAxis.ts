import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartAxisCrossing } from './ChartAxisCrossing.ts';
import type { ChartDisplayUnit } from './ChartDisplayUnit.ts';
import type { ChartShape } from './ChartShape.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';
import type { ChartTickMark } from './ChartTickMark.ts';
import type { ChartTitle } from './ChartTitle.ts';

/**
 * An axis draws the ticks, labels, and gridlines for a scale.
 *
 * @group Charts
 */
export type ChartAxis = {
  id: string;

  /** ID of the scale that this axis visualizes. */
  scale: string;

  /**
   * Which side of the plot area the axis is on. A `depth` axis runs front to back in a 3D chart,
   * and its placement follows from {@link Chart.view3D}.
   */
  orient: 'top' | 'right' | 'bottom' | 'left' | 'depth';

  /**
   * Whether the axis is shown. A hidden axis still positions the data.
   *
   * @default true
   */
  visible?: boolean;

  /**
   * The axis title. When absent, the axis has no title. When present without `text` or `formula`,
   * the title text is automatic ("Axis Title").
   */
  title?: ChartTitle;

  /**
   * ID of the perpendicular axis that this axis crosses. When absent, it's the other axis of the
   * same axis group.
   */
  crossAxis?: string;

  /**
   * Where this axis crosses `crossAxis`.
   *
   * @default { type: 'auto' }
   */
  crosses?: ChartAxisCrossing;

  /**
   * @default "outside"
   */
  majorTickMark?: ChartTickMark;

  /**
   * @default "none"
   */
  minorTickMark?: ChartTickMark;

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
  tickLabelPosition?: 'nextTo' | 'low' | 'high' | 'none';

  /**
   * For a category axis, how tick labels align with their tick marks.
   *
   * @default "center"
   */
  tickLabelAlign?: 'center' | 'left' | 'right';

  /**
   * For a category axis, the distance between the labels and the axis, as a percentage of the
   * default distance (0-1000).
   *
   * @min 0
   * @max 1000
   * @default 100
   */
  tickLabelOffset?: integer;

  /** For a category axis, show every Nth label. When absent, the interval is automatic. */
  tickLabelInterval?: integer;

  /**
   * For a category axis, show a tick mark every Nth category.
   *
   * @default 1
   */
  tickMarkInterval?: integer;

  /**
   * For a category axis with multi-level categories, whether to show every level of labels. When
   * `false`, only the innermost level is shown. This is the inverse of OOXML `c:noMultiLvlLbl`.
   *
   * @default true
   */
  multiLevelLabels?: boolean;

  /** Gridlines. A gridline is shown when its style is present. */
  gridlines?: {
    major?: Line;
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

  /** Style of the axis line. When absent, the line is automatic. */
  shape?: ChartShape;

  textStyle?: ChartTextStyle;
};
