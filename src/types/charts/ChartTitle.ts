import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartShape } from './ChartShape.ts';
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

  shape?: ChartShape;

  textStyle?: ChartTextStyle;

  /** Manual position of the title. When absent, the position is automatic. */
  layout?: ChartManualLayout;
};
