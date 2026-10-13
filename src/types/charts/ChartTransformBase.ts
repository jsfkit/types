/**
 * Properties shared by every transform.
 *
 * @group Charts
 */
export type ChartTransformBase = {
  /**
   * Identifies the transform within the chart. Plots read its output by naming this in their
   * `data`, and other transforms by naming it in their `source`.
   */
  id: string;

  /**
   * The dataset or transform whose records this transform reads, named by its `id`.
   */
  source: string;
};
