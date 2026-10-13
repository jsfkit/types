import type { Shape } from '../dml/shape/Shape.ts';
import type { integer } from '../integer.ts';
import type { ChartDataLabel } from './ChartDataLabel.ts';
import type { ChartMarker } from './ChartMarker.ts';
import type { ChartPictureOptions } from './ChartPictureOptions.ts';

/**
 * Overrides for one data point in a series: its style, its label, and number formats that differ
 * from the rest of the series.
 *
 * Each override sets only what it changes. `shape` and `marker` merge over the series' `shape` and
 * `marker` property by property, and `label` merges over the series' labels, and then the plot's.
 * For example, a point `shape` with only a `fill` keeps the series' `line`.
 *
 * @group Charts
 */
export type ChartDataPoint = {
  /**
   * Zero-based index of the point within the series.
   *
   * In a pie-of-pie or bar-of-pie chart, the index right after the last point (the number of
   * points in the series) refers to the combined "Other" slice in the main pie.
   */
  index: integer;

  shape?: Shape;

  marker?: ChartMarker;

  label?: ChartDataLabel;

  /**
   * Overrides {@link ChartSeries.explosion} for this pie slice. When absent, the series' applies.
   */
  explosion?: integer;

  /**
   * Overrides {@link ChartSeries.invertIfNegative} for this point. When absent, the series'
   * applies.
   */
  invertIfNegative?: boolean;

  /** Overrides {@link ChartSeries.shaded} for this bubble. */
  shaded?: boolean;

  /** Overrides {@link ChartSeries.pictureOptions} for this point. */
  pictureOptions?: ChartPictureOptions;

  /**
   * Excel number format codes for this point's values, keyed by dataset field, where they differ
   * from the field binding's `numberFormat`. This happens when the source cells have different
   * formats. OOXML stores these as `formatCode` on individual `c:pt` elements in a series' cache,
   * so like other cached data they're optional, and a renderer that evaluates the binding takes
   * the formats from the cells.
   *
   * Example: `{ value: '0.0%' }`.
   */
  numberFormats?: Record<string, string>;
};
