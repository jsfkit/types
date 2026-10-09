import type { integer } from '../integer.ts';
import type { ChartBarShape } from './ChartBarShape.ts';
import type { ChartDataLabels } from './ChartDataLabels.ts';
import type { ChartDataPoint } from './ChartDataPoint.ts';
import type { ChartEncoding } from './ChartEncoding.ts';
import type { ChartErrorBars } from './ChartErrorBars.ts';
import type { ChartFieldBinding } from './ChartFieldBinding.ts';
import type { ChartFilteredPoint } from './ChartFilteredPoint.ts';
import type { ChartMarker } from './ChartMarker.ts';
import type { ChartPictureOptions } from './ChartPictureOptions.ts';
import type { ChartShape } from './ChartShape.ts';
import type { ChartText } from './ChartText.ts';
import type { ChartTrendline } from './ChartTrendline.ts';
import type { ChartValue } from './ChartValue.ts';

/**
 * A logical series.
 *
 * @group Charts
 */
export type ChartSeries = {
  id: string;

  /**
   * The series name. When absent, the series has no name of its own, and an application shows a
   * generated one, such as "Series1".
   */
  name?: ChartText;

  /**
   * Index that picks the series' automatic color from the theme accents. This is OOXML `c:idx`,
   * and it can differ from `order`. When absent, it's the series' position in the chart's series
   * order, counting from 0.
   */
  colorIndex?: integer;

  /**
   * The series' position in the chart's series order. This is OOXML `c:order`.
   *
   * The order is chart-wide: in a chart with several plots, a series in one plot can come between
   * two series in another. It decides where the series sits within its plot (for example, its
   * place in a cluster or a stack), and the order of the chart's series in Excel's Select Data
   * dialog.
   *
   * Rules:
   *
   * - Values are unique across the chart, but don't have to be consecutive.
   * - Each plot lists its series in ascending `order`.
   * - Either every series in the chart has an `order`, or none does. When none does, the order is
   *   each plot's series list in turn, in the order of `Chart.plots`.
   * - Only the relative order matters. When that's the same as the order without `order`, an
   *   importer leaves `order` out.
   */
  order?: integer;

  /**
   * The value of the `series` field in this series' evaluated records. Records are in source
   * point order, so the Nth record of a series is the point that {@link ChartDataPoint.index} N
   * refers to.
   *
   * Usually the same as `id`. They differ when two series read the same records, such as a Pareto
   * line, which has its own `id` but its owner's `key`.
   *
   * @default the series' `id`
   */
  key?: ChartValue;

  /**
   * Where this series' values come from, keyed by dataset field. These bindings define the
   * series' data, and override the dataset's binding for the same field.
   *
   * Each series usually has its own value range here, for example
   * `{ value: { formula: 'Sheet1!$B$2:$B$3', role: 'value' } }`. An exporter writes one OOXML
   * series per `ChartSeries`, taking each range from here, or from the dataset's binding when the
   * series doesn't override it.
   */
  bindings?: Record<string, ChartFieldBinding>;

  /**
   * Field mappings that override the plot's encoding, for example to give one series a different
   * category field.
   */
  encoding?: Partial<ChartEncoding>;

  shape?: ChartShape;

  marker?: ChartMarker;

  /**
   * Data labels for this series. They override the plot's labels property by property: each
   * property left out comes from the plot's labels.
   */
  labels?: ChartDataLabels;

  /** Overrides for individual data points. Each sets only what it changes for its point. */
  points?: ChartDataPoint[];

  /**
   * Overrides for points in categories that are filtered out with Excel's chart filter, so they
   * come back when the filter is removed. These points have no index, because they aren't in
   * the series' records, so each is keyed by the cell reference of its category. This is OOXML
   * `c15:categoryFilterExceptions`.
   */
  filteredPoints?: ChartFilteredPoint[];

  trendlines?: ChartTrendline[];

  errorBars?: ChartErrorBars[];

  /**
   * Whether a line series is drawn as a smooth curve.
   *
   * @default false
   */
  smooth?: boolean;

  /**
   * How far pie slices are pulled out from the center, as a percentage of the radius (0-400).
   *
   * @min 0
   * @max 400
   * @default 0
   */
  explosion?: integer;

  /**
   * Whether bars with negative values use inverted colors.
   *
   * @default false
   */
  invertIfNegative?: boolean;

  /**
   * Shape of the bars in a 3D bar series. Overrides the plot's bar shape. When absent, the plot's
   * bar shape applies.
   */
  barShape?: ChartBarShape;

  /**
   * Whether bubbles in this series are shaded to look like spheres (OOXML `c:bubble3D`).
   *
   * @default false
   */
  shaded?: boolean;

  /** How a picture fill is applied to the bars or areas of this series. */
  pictureOptions?: ChartPictureOptions;

  /**
   * Whether the series is filtered out with Excel's chart filter. A hidden series stays in the
   * chart with its data, formatting, and order, but it isn't drawn, isn't in the legend, and
   * doesn't count toward the automatic title. It comes back when the filter is removed.
   *
   * In OOXML, a legacy chart stores hidden series in `c15:filtered…Series` extensions on the chart
   * element (for example `c15:filteredBarSeries`), and ChartEx uses `hidden="1"`.
   *
   * @default false
   */
  hidden?: boolean;
};
