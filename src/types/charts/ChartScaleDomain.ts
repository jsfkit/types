import type { ChartValue } from './ChartValue.ts';

/**
 * The values that a scale covers: either the values of a field, or an explicit list.
 *
 * @group Charts
 */
export type ChartScaleDomain = {
  /**
   * The dataset or transform that holds the field, named by its `id`.
   */
  data: string;

  /**
   * The field whose values the scale covers.
   */
  field: string;
} | {
  /**
   * The values that the scale covers, in order.
   */
  values: ChartValue[];
};
