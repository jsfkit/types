import type { Line } from '../dml/shape/line/Line.ts';
import type { integer } from '../integer.ts';
import type { ChartDataLabels } from './ChartDataLabels.ts';
import type { ChartManualLayout } from './ChartManualLayout.ts';
import type { ChartText } from './ChartText.ts';

/**
 * A trendline fitted to a series.
 *
 * @group Charts
 */
export type ChartTrendline = {
  type: 'linear' | 'exponential' | 'logarithmic' | 'polynomial' | 'power' | 'movingAverage';

  /**
   * Order of a polynomial trendline (2-6).
   *
   * @min 2
   * @max 6
   * @default 2
   */
  order?: integer;

  /**
   * Period of a moving average trendline.
   *
   * @default 2
   */
  period?: integer;

  /**
   * Name shown in the legend. When absent, the name is generated.
   */
  name?: string;

  /**
   * Number of units to extend the trendline forward.
   *
   * @default 0
   */
  forward?: number;

  /**
   * Number of units to extend the trendline backward.
   *
   * @default 0
   */
  backward?: number;

  /**
   * Fixed value where the trendline crosses the value axis. When absent, it's fitted.
   */
  intercept?: number;

  /**
   * @default false
   */
  displayRSquared?: boolean;

  /**
   * @default false
   */
  displayEquation?: boolean;

  /**
   * Style, position, and text of the R² and equation label.
   */
  label?: Pick<ChartDataLabels, 'numberFormat' | 'shape' | 'textStyle'> & {
    /**
     * Custom label text. Replaces the generated R² and equation text.
     */
    text?: ChartText;

    /**
     * Manual position of the label. When absent, the position is automatic.
     */
    layout?: ChartManualLayout;
  };

  /**
   * Style of the trendline. By default, it's a 1.5pt dotted (`sysDot`) line with round caps, in
   * the series' automatic color.
   */
  line?: Line;
};
