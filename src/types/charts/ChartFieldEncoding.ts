/**
 * Maps one data field to a visual channel.
 *
 * @group Charts
 */
export type ChartFieldEncoding = {
  /** The field to encode. For multi-level categories, this is the innermost level. */
  field: string;

  /**
   * For multi-level categories, the fields of the outer levels, from the outermost level inward.
   * For example, a Year > Quarter axis has `levels: ['year']` and `field: 'quarter'`.
   */
  levels?: string[];

  /** ID of a scale. Optional for channels without a scale, such as `text`. */
  scale?: string;
};
