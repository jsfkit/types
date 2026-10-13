import type { Shape } from '../dml/shape/Shape.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartText } from './ChartText.ts';
import type { ChartTextStyle } from './ChartTextStyle.ts';

/**
 * A title or label that can show automatic text: the chart title, an axis title, or a display
 * units label.
 *
 * When a `ChartTitle` is present but has neither `text` nor `formula`, the application supplies
 * the text: "Chart Title" for a chart title, "Axis Title" for an axis title, and the unit name
 * (such as "Thousands") for a display units label. Excel shows this text in its UI language.
 *
 * @group Charts
 */
export type ChartTitle = ChartText & {
  /**
   * Whether the title overlaps the plot area instead of taking space from it.
   *
   * @default false
   */
  overlay?: boolean;

  /**
   * Fill and outline of the title. By default, there are none.
   */
  shape?: Shape;

  /**
   * Text style of the title. By default, it's `tx1` 65%/35% in the minor font, at 14pt for a chart
   * title, 10pt for an axis title, and 9pt for a display units label. See {@link ChartTextStyle}.
   */
  textStyle?: ChartTextStyle;

  /** Manual position of the title. When absent, the position is automatic. */
  layout?: ChartManualLayout;
};
