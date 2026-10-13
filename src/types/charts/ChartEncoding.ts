import type { ChartFieldEncoding } from './ChartFieldEncoding.ts';

/**
 * Maps data fields to visual channels.
 *
 * A plot's encoding names every field its mark reads, so no one has to rely on field names. The
 * channels each mark needs, besides `series`:
 *
 * | Mark                     | Channels
 * |--------------------------|----------------------------------------------------------------
 * | `bar`, `line`, `area`    | `x` and `y`: the category (or X) and the value. Bins add `x2`.
 * | `point`                  | `x` and `y`. A bubble plot adds `size`.
 * | `arc`                    | `x` (the slice names) and `angle` (the slice sizes).
 * | `candlestick`            | `x` (the category). Series feed `open`, `high`, `low`, or `close`.
 * | `surface`                | `x` and `y`, and `z` when the chart has a series axis.
 * | `boxplot`, `waterfall`   | `x` (the category) and `y` (the value).
 * | `funnel`                 | `y` (the category) and `x` (the value).
 * | `treemap`, `sunburst`    | None: their `hierarchy` transform names the level and value fields.
 *
 * @group Charts
 */
export type ChartEncoding = {
  /**
   * Horizontal position, usually the category field. In a plot with polar coordinates (an arc
   * plot), which has no horizontal axis, `x` names the slices: the category field. This keeps the
   * category on the same channel as in bar and line plots, so changing a chart between pie and
   * bar only changes the mark.
   */
  x?: ChartFieldEncoding;
  x2?: ChartFieldEncoding;
  y?: ChartFieldEncoding;
  y2?: ChartFieldEncoding;

  /**
   * Depth position in a 3D chart. A 3D column chart with `standard` grouping places each series
   * in its own row, front to back, by encoding the series field here.
   */
  z?: ChartFieldEncoding;

  /**
   * Says that the plot separates its records by series. It's always `{ field: 'series' }`: every
   * evaluated record holds its series' {@link ChartSeries.key} in the reserved `series` field. This
   * channel has no scale.
   */
  series?: ChartFieldEncoding;

  /**
   * Maps a field to a color through a scale, for example a series name through an `ordinal`
   * scale with explicit colors.
   *
   * When absent, colors are automatic: each series gets a theme accent color (see
   * {@link ChartSeries.colorIndex}), or, when {@link ChartPlot.varyColors} is set, each data point
   * does.
   */
  color?: ChartFieldEncoding;

  /**
   * Bubble size.
   */
  size?: ChartFieldEncoding;

  /**
   * Slice size in pie and doughnut charts. The slices are named by `x`.
   */
  angle?: ChartFieldEncoding;
  radius?: ChartFieldEncoding;

  /**
   * Label text: the field whose values data labels show when their `show` list includes
   * `cellRange` (Excel's "Value From Cells"). The field's binding has the `label` role and the
   * formula of the source range.
   */
  text?: ChartFieldEncoding;

  open?: ChartFieldEncoding;
  high?: ChartFieldEncoding;
  low?: ChartFieldEncoding;
  close?: ChartFieldEncoding;
};
