/**
 * Properties shared by every transform.
 *
 * @group Charts
 */
export type ChartTransformBase = {
  id: string;
  /**
   * ID of the input dataset or transform.
   */
  source: string;
};
