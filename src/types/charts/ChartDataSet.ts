import type { ChartFieldBinding } from './ChartFieldBinding.ts';

/**
 * A named table of records, defined by bindings rather than stored.
 *
 * Evaluating a dataset produces long-form records: one record per point of each series in the
 * plots that use it, with a `series` field holding the series' {@link ChartSeries.key}, and one
 * field per binding. Within a series, records are in source point order, and a point without a
 * value still has a record (with `null`), so the Nth record of a series is the point that
 * {@link ChartDataPoint.index} N refers to.
 *
 * Field names carry no meaning of their own, as in Vega: a field means what the encodings and
 * transforms that name it say. The one exception is `series`, which is reserved for the series key
 * in every record, so no binding may be named `series`.
 *
 * A series without a category binding has no category values. Its points' categories are then
 * their positions, counting from 1, as Excel shows them.
 *
 * @group Charts
 */
export type ChartDataSet = {
  /**
   * Identifies the dataset within the chart. Plots read it by naming this in their `data`,
   * transforms in their `source`, and scales in their `domain`.
   */
  id: string;

  /**
   * Bindings shared by every series that uses this dataset, keyed by field name.
   *
   * A dataset binding applies to each series separately: it says "every series' values for this
   * field come from this range". A category range shared by all series is written once, here. A
   * series whose source differs overrides the binding in {@link ChartSeries.bindings}.
   *
   * Example: `{ category: { formula: 'Sheet1!$A$2:$A$10', role: 'category' } }`.
   */
  bindings?: Record<string, ChartFieldBinding>;
};
