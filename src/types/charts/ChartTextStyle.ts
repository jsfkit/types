import type { DmlAngle } from '../dml/DmlAngle.ts';
import type { TextVerticalType } from '../dml/shape/text/TextVerticalType.ts';
import type { Style } from '../styles/Style.ts';

/**
 * Text style for a chart element.
 *
 * Font properties reuse the names and types of the JSF cell {@link Style}.
 *
 * The typeface (`fontFamily` or `fontScheme`, as one property), `fontSize`, `color`, `bold`, and
 * `italic` cascade: an element's own value wins, then `Chart.textStyle` (with 1.2 times the font
 * size for the chart title), then the element's defaults:
 *
 * | Element                       | Size | Bold  | Color          | Typeface |
 * |-------------------------------|------|-------|----------------|----------|
 * | Chart title                   | 14   | false | `tx1` 65%/35%  | minor    |
 * | Axis titles                   | 10   | false | `tx1` 65%/35%  | minor    |
 * | Axis labels, legend           | 9    | false | `tx1` 65%/35%  | minor    |
 * | Display units label           | 9    | false | `tx1` 65%/35%  | minor    |
 * | Trendline labels, data table  | 9    | false | `tx1` 65%/35%  | minor    |
 * | Data labels                   | 9    | false | `tx1` 75%/25%  | minor    |
 *
 * No element is italic by default. `rot` and `vert` apply only to the element that sets them.
 * A data label's text style first merges through the labels it overrides: a point label's from its
 * series' labels, and a series' labels' from its plot's labels.
 *
 * @group Charts
 */
export type ChartTextStyle = Pick<Style,
  'fontFamily' |
  'fontScheme' |
  'fontSize' |
  'color' |
  'bold' |
  'italic' |
  'underline'
> & {
  /**
   * Text rotation in 60,000ths of a degree (for example, 5400000 is 90 degrees).
   *
   * @default 0
   */
  rot?: DmlAngle;

  /**
   * Vertical text type.
   *
   * @default "horz"
   */
  vert?: TextVerticalType;
};
